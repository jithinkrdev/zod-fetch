import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts", "cli/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    sourcemap: false,
    minify: true,
    splitting: false,
    treeshake: true,
    external: ["zod"],
});
