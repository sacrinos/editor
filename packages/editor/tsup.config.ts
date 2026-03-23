import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  bundle: false,
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
})
