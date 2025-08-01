import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"


export default defineConfig( {
  root: "example",
  plugins: [react()],
  resolve: {
    alias: {
      "react-console-notify": path.resolve( __dirname, "./src" ),
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
} )
