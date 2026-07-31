import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/components/index.tsx', './src/utils/index.ts', './src/constants/index.ts'],
  cjsDefault: false,
  dts: true,
  tsconfig: './tsconfig.app.json',
  target: 'es2024',
  platform: 'browser',
  sourcemap: true,
  logLevel: 'warn',
  exports: false,
})
