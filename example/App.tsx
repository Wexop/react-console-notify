import React from "react"
import ConsoleNotifier from "../src/ConsoleNotifier"


export default function App() {
  const handleLog = () => console.log( "Console log !" )
  const handleWarn = () => console.warn( "Console warn !" )
  const handleError = () => console.error( "Console error !" )
  const handleInfo = () => console.info( "Console info !" )
  const handleDebug = () => console.debug( "Console debug !" )

  return (
    <div style={ {
      fontFamily: "Arial, sans-serif",
      padding: 30,
      maxWidth: 400,
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 15,
      backgroundColor: "#f9f9f9",
      borderRadius: 8,
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      marginTop: "20vh"
    } }>
      <h1 style={ { textAlign: "center", color: "#333" } }>react-console-notify</h1>

      <button
        onClick={ handleLog }
        style={ {
          padding: "10px 20px",
          backgroundColor: "#6c757d",
          border: "none",
          borderRadius: 5,
          color: "white",
          cursor: "pointer"
        } }
      >
        Log (console.log)
      </button>

      <button
        onClick={ handleWarn }
        style={ {
          padding: "10px 20px",
          backgroundColor: "#f4b400",
          border: "none",
          borderRadius: 5,
          color: "black",
          cursor: "pointer"
        } }
      >
        Warn (console.warn)
      </button>

      <button
        onClick={ handleError }
        style={ {
          padding: "10px 20px",
          backgroundColor: "#f28b82",
          border: "none",
          borderRadius: 5,
          color: "white",
          cursor: "pointer"
        } }
      >
        Error (console.error)
      </button>

      <button
        onClick={ handleInfo }
        style={ {
          padding: "10px 20px",
          backgroundColor: "#719dcb",
          border: "none",
          borderRadius: 5,
          color: "white",
          cursor: "pointer"
        } }
      >
        Info (console.info)
      </button>

      <button
        onClick={ handleDebug }
        style={ {
          padding: "10px 20px",
          backgroundColor: "#61b96e",
          border: "none",
          borderRadius: 5,
          color: "white",
          cursor: "pointer"
        } }
      >
        Debug (console.debug)
      </button>

      <ConsoleNotifier containerHeight={ "100vh" }/>
    </div>
  )
}
