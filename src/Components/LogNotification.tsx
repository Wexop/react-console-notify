import { LogType, NotifyLog } from "../ConsoleNotifier"
import { darkenHexColor, hexToRgba } from "../utils"
import React, { useEffect } from "react"
import ShrinkingBar from "./TimeBar"


type Props = NotifyLog & {
  colorMap: Record<LogType, string>,
  duration?: number | null,
  onDelete?: ( id: string ) => void,
  backgroundOpacity: number,
}

const LogNotification = React.memo( ( {
  type,
  message,
  colorMap,
  date,
  onDelete,
  id,
  duration,
  backgroundOpacity
}: Props ) => {

  useEffect( () => {
    if ( duration ) {
      setTimeout( () => {
        onDelete?.( id )
      }, duration )
    }
  }, [] )

  return (
    <div className={ "log-notification" } style={ {
      backgroundColor: hexToRgba( colorMap[type], backgroundOpacity ),
      borderRadius: 10,
      padding: "10px 20px",
      border: "1px solid " + colorMap[type],
      width: 400,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    } }>
      <div style={ { display: "flex", flexDirection: "column", alignItems: "start", width: "100%" } }>
        <div style={ { backgroundColor: colorMap[type], borderRadius: 5, padding: "5px 10px" } }>
          <p style={ {
            fontWeight: "bold",
            color: "white",
            margin: 0,
            fontSize: 12
          } }>{ type.toUpperCase() }</p>
        </div>
        <p style={ {
          color: darkenHexColor( colorMap[type], 150 ),
          width: "100%",
          maxWidth: "85%",
          wordBreak: "break-all"
        } }>{ message }</p>
        <p style={ { color: "#656565" } }>{ new Date( date ).toLocaleTimeString() }</p>
        { !!duration && <ShrinkingBar duration={ duration } color={ colorMap[type] }/> }
      </div>
      <div onClick={ () => onDelete?.( id ) } className={ "cross pointer" }
           style={ { borderRadius: 500, padding: "10px 10px 8px 10px" } }>
        <svg
          width={ 15 }
          height={ 15 }
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth={ 2 }
          strokeLinecap="round"
          strokeLinejoin="round" color={ "white" }

        >
          <line x1="18" y1="0" x2="0" y2="18"/>
          <line x1="0" y1="0" x2="18" y2="18"/>
        </svg>
      </div>

    </div>
  )

} )

export default LogNotification
