import React, { useState } from "react"
import ConsoleNotifier from "../src/ConsoleNotifier"


export default function App() {
  const [enabled, setEnabled] = useState( true )
  const [position, setPosition] = useState<"top-right" | "top-left">( "top-right" )
  const [duration, setDuration] = useState<number | null>( 5000 )
  const [backgroundOpacity, setBackgroundOpacity] = useState<number>( 0.5 )

  const handleLog = () => console.log( "Console log!" )
  const handleWarn = () => console.warn( "Console warn!" )
  const handleError = () => console.error( "Console error!" )
  const handleInfo = () => console.info( "Console info!" )
  const handleDebug = () => console.debug( "Console debug!" )

  return (
    <>
      <ConsoleNotifier
        enabled={ enabled }
        position={ position }
        duration={ duration }
        backgroundOpacity={ backgroundOpacity }
        containerHeight={ "50vh" }
      >
        <div
          style={ {
            fontFamily: "Arial, sans-serif",
            padding: 30,
            maxWidth: 500,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            backgroundColor: "#f9f9f9",
            borderRadius: 10,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            marginTop: "20vh",
          } }
        >
          <h1 style={ { textAlign: "center", color: "#333" } }>react-console-notify</h1>

          <div style={ { display: "flex", flexWrap: "wrap", gap: 10 } }>
            <button onClick={ handleLog } style={ buttonStyle( "#6c757d", "white" ) }>Log</button>
            <button onClick={ handleWarn } style={ buttonStyle( "#f4b400", "black" ) }>Warn</button>
            <button onClick={ handleError } style={ buttonStyle( "#f28b82", "white" ) }>Error</button>
            <button onClick={ handleInfo } style={ buttonStyle( "#719dcb", "white" ) }>Info</button>
            <button onClick={ handleDebug } style={ buttonStyle( "#61b96e", "white" ) }>Debug</button>
          </div>

          <hr style={ { margin: "20px 0" } }/>

          <div style={ { display: "flex", flexDirection: "column", gap: 10 } }>
            <StyledLabel>
              Enabled
              <select
                value={ enabled ? "true" : "false" }
                onChange={ ( e ) => setEnabled( eval( e.target.value ) as boolean ) }
                style={ inputStyle }
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </StyledLabel>

            <StyledLabel>
              Position:
              <select
                value={ position }
                onChange={ ( e ) => setPosition( e.target.value as any ) }
                style={ inputStyle }
              >
                <option value="top-right">top-right</option>
                <option value="top-left">top-left</option>
              </select>
            </StyledLabel>

            <StyledLabel>
              Duration (ms, 0 for infinite):
              <input
                type="number"
                value={ duration ?? 0 }
                onChange={ ( e ) => {
                  const val = parseInt( e.target.value )
                  setDuration( val > 0 ? val : null )
                } }
                style={ inputStyle }
              />
            </StyledLabel>

            <StyledLabel>
              Background Opacity (0 to 1):
              <input
                type="number"
                step={ 0.1 }
                min={ 0 }
                max={ 1 }
                value={ backgroundOpacity }
                onChange={ ( e ) => setBackgroundOpacity( parseFloat( e.target.value ) ) }
                style={ inputStyle }
              />
            </StyledLabel>
          </div>


        </div>
      </ConsoleNotifier>
    </>
  )
}

function buttonStyle( bg: string, color: string ): React.CSSProperties {
  return {
    padding: "10px 15px",
    backgroundColor: bg,
    border: "none",
    borderRadius: 6,
    color,
    cursor: "pointer",
    flex: 1,
    minWidth: 90,
    transition: "background 0.2s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  }
}

const inputStyle: React.CSSProperties = {
  padding: "8px",
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: 14,
  marginTop: 4,
  width: "100%",
}

const StyledLabel = ( { children }: { children: React.ReactNode } ) => (
  <label style={ { display: "flex", flexDirection: "column", fontSize: 14, color: "#333" } }>
    { children }
  </label>
)
