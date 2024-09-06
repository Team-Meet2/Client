import { defineConfig } from 'tsup';


export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    clean: true,
    sourcemap: true,
    dts: true,
    external: ['react', 'react-dom'],
    minify: true,
    treeshake: true,
});