import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/components/index.tsx', './src/utils/index.ts', './src/constants/index.ts'],
  format: ['esm'],
  outDir: 'dist',

  dts: true,

  clean: true,
  tsconfig: './tsconfig.json',
  target: 'es2024',
  platform: 'neutral',

  unbundle: true,
  sourcemap: false,
  logLevel: 'info',
  exports: false,
})
