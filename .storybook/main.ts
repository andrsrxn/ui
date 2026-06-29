import { defineMain } from '@storybook/react-vite/node'

export default defineMain({
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-themes',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      shouldRemoveUndefinedFromOptional: true,
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },

      // biome-ignore lint/performance/useTopLevelRegex: only read once per session
      propFilter: prop => (prop.parent ? !/node_modules/u.test(prop.parent.fileName) : true),
    },
  },

  framework: '@storybook/react-vite',
  core: {
    disableTelemetry: true,
  },
})
