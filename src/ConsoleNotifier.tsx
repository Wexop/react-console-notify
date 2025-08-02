import { ReactNode, useCallback, useEffect, useRef, useState } from "react"
import LogNotification from "./Components/LogNotification"
import "./style.css"


export type LogType = "log" | "warn" | "error" | "info" | "debug";

type Position = "top-right" | "top-left"

type ConsoleNotifierProps = {
  types?: LogType[];
  onNotify?: ( type: LogType, ...args: unknown[] ) => void;
  colorMap?: Record<LogType, string>;
  children?: ReactNode;
  enabled?: boolean;
  position?: Position;
  duration?: number | null;
  backgroundOpacity?: number;
  containerHeight?: number | string
};

export type NotifyLog = {
  message: string,
  type: LogType,
  date: Date,
  id: string,
}

export default function ConsoleNotifier( {
  types = ["log", "warn", "error", "info", "debug"],
  onNotify,
  children,
  colorMap = {
    log: "#6c757d",
    warn: "#f4b400",
    error: "#f28b82",
    info: "#719dcb",
    debug: "#61b96e",
  },
  enabled = true,
  position = "top-right",
  duration = 5000,
  backgroundOpacity = 0.5,
  containerHeight = 500
}: ConsoleNotifierProps ) {

  const [logs, setLogs] = useState<NotifyLog[]>( [] )

  const deleteLog = useCallback( ( id: string ) => {
    setLogs( logs => logs.filter( l => l.id !== id ) )
  }, [] )

  const onLog = ( logType: LogType, ...args: unknown[] ) => {
    if ( onNotify ) {
      onNotify( logType, args )
    }
    else {
      const message = args
        .map( ( arg ) =>
          typeof arg === "string"
            ? arg
            : typeof arg === "object"
              ? JSON.stringify( arg, null, 2 )
              : String( arg )
        ).join( " " )

      setLogs( [...logs, {
        message,
        type: logType,
        id: (new Date().getTime() + Math.random() * 100).toString(),
        date: new Date()
      }] )

    }
  }

  useEffect( () => {
    if ( !enabled ) return

    const originalMethods: Partial<Record<LogType, ( ...args: unknown[] ) => void>> = {}

    types.forEach( ( type ) => {
      const original = console[type]
      if ( !original ) return // ignore unknown methods

      originalMethods[type] = original

      console[type] = ( ...args: unknown[] ) => {
        original( ...args )
        onLog( type, ...args )
      }
    } )

    return () => {
      Object.entries( originalMethods ).forEach( ( [type, original] ) => {
        if ( original ) {
          console[type as LogType] = original
        }
      } )
    }
  }, [types, onNotify] )

  const containerRef = useRef( null )

  useEffect( () => {
    const el = containerRef.current as any
    if ( el ) {
      el.scrollTop = el.scrollHeight
    }
  }, [logs] )

  return <>
    <div className={ "scrollable" } ref={ containerRef } style={ {
      position: "fixed",
      left: position === "top-right" ? undefined : 20,
      right: position === "top-left" ? undefined : 20,
      top: 20,
      maxHeight: containerHeight,
      overflowY: "auto",
      overflowX: "hidden",
      zIndex: 9999,
      width: 500,

    } }>
      <div style={ {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
        marginBottom: 20,
      } }>
        { logs.map( ( log ) => {
          return (
            <LogNotification backgroundOpacity={ backgroundOpacity } key={ log.id } { ...log }
                             colorMap={ colorMap } onDelete={ deleteLog } duration={ duration }/>)
        } ) }
      </div>
    </div>
    { children }
  </>
}
