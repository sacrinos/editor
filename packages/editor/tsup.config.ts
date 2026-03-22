import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    '@pascal-app/core',
    '@pascal-app/viewer',
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'next',
  ],
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
})
