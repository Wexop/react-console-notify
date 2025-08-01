import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"


export default defineConfig( {
  root: __dirname,
  base: "/react-console-notify/",
  plugins: [react()],
  resolve: {
    alias: {
      "react-console-notify": path.resolve( __dirname, "../src" ),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
} )
