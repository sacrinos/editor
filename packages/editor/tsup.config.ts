import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  // Bundle the source but treat all node_modules as external
  external: [/^[^./]/],
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
})
