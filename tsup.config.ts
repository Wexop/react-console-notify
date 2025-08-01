import { defineConfig } from "tsup"


export default defineConfig( {
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  onSuccess: "cp src/style.css dist/style.css",
} )
