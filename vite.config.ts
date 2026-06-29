/// <reference types="vitest/config" />

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// const _dirname =
//   typeof import.meta.dirname === 'undefined'
//     ? path.dirname(fileURLToPath(import.meta.url))
//     : // biome-ignore lint/correctness/noGlobalDirnameFilename: storybook api
//       __dirname

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./__tests__/setup.ts'],
    include: ['./__tests__/**/*.test.(ts|tsx)'],
    // projects: [
    // {
    // extends: true,
    // plugins: [
    //   storybookTest({
    //     configDir: path.join(dirname, '.storybook'),
    //   }),
    // ],
    // test: {
    //   name: 'storybook',
    //   browser: {
    //     enabled: true,
    //     headless: true,
    //     provider: playwright({}),
    //     instances: [
    //       {
    //         browser: 'chromium',
    //       },
    //     ],
    //   },
    // },
    // },
    // ],
  },
})
