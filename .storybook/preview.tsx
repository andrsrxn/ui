import '@fontsource/fira-mono/500.css'
import '@fontsource/fira-sans/400.css'
import '@fontsource/fira-sans/500.css'
import '@fontsource/fira-sans/600.css'
import '@fontsource/fira-sans/700.css'

import addonA11y from '@storybook/addon-a11y'
import addonDocs from '@storybook/addon-docs'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs/blocks'
import addonThemes, { withThemeByClassName } from '@storybook/addon-themes'
import addonVitest from '@storybook/addon-vitest'
import { definePreview } from '@storybook/react-vite'
import type { PartialStoryFn } from 'storybook/internal/types'
import { themes } from 'storybook/theming'
import '../src/globals.css'

// biome-ignore lint/style/useNamingConvention: component rendering
const LayoutDecorator = (Story: PartialStoryFn) => (
  <div>
    <Story />
    {/* <Toaster /> */}
  </div>
)

const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light  [&_.docs-story]:bg-base',
      dark: 'dark [&_.docs-story]:bg-base',
    },
    defaultTheme: 'light',
    parentSelector: 'html',
  }),
  LayoutDecorator,
]

export default definePreview({
  addons: [addonThemes(), addonVitest(), addonA11y(), addonDocs()],
  decorators,
  parameters: {
    tags: ['autodocs'],
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        // biome-ignore lint/nursery/useNamedCaptureGroup: not necessary
        color: /(background|color)$/iu,
        date: /Date$/iu,
      },
    },

    docs: {
      theme: themes.light,
      codePanel: true,
      toc: {
        disable: false,
        title: 'Table of contents',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Subtitle />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
  },
})
