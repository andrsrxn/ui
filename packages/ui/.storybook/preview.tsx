/** biome-ignore-all lint/style/useNamingConvention: Story rendering */
import '@fontsource/fira-mono/500.css'
import '@fontsource-variable/hanken-grotesk/wght.css'
import '@andrsrxn/icons/rtl.css'

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
import type { PartialStoryFn, StoryContext } from 'storybook/internal/types'
import theme from './theme'
import '../src/styles.css'
import type { TextDirection } from '../src/components/providers/direction-provider'
import { UIProvider } from '../src/components/providers/ui-provider'

const RTLDecorator = (Story: PartialStoryFn, context: StoryContext) => {
  const dir = context.globals.rtl

  document.documentElement.dir = dir
  return <Story />
}

const LayoutDecorator = (Story: PartialStoryFn, context: StoryContext) => {
  return (
    <UIProvider dir={context.globals.rtl as TextDirection}>
      <Story />
      {/* TODO: <Toaster /> */}
    </UIProvider>
  )
}

const decorators = [
  withThemeByClassName({
    themes: {
      light:
        'light [&_.docs-story]:bg-base [&_.docs-story]:has-data-[slot=surface-decorator]:bg-surface [&_.docs-story]:has-data-[slot=content-decorator]:bg-brand',
      dark: 'dark [&_.docs-story]:bg-base',
    },
    defaultTheme: 'light',
    parentSelector: 'html',
  }),
  LayoutDecorator,
  RTLDecorator,
]

export default definePreview({
  addons: [addonThemes(), addonVitest(), addonA11y(), addonDocs()],
  decorators,
  initialGlobals: {
    rtl: 'ltr',
  },
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        // biome-ignore lint/style/useNamedCaptureGroup: not necessary
        color: /(background|color)$/iu,
        date: /Date$/iu,
      },
    },
    docs: {
      theme,
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
      test: 'error',
    },
  },
  // Automatically detect the controls based on types even when using CVA
  argTypesEnhancers: [
    ({ argTypes }) => {
      for (const [key, argType] of Object.entries(argTypes)) {
        const isBooleanUnion = argType.type?.raw === 'boolean' || argType.type?.name === 'boolean'

        if (isBooleanUnion) {
          // Convert the CVA generated true/false union to a proper switch toggle instead radio
          argTypes[key] = {
            ...argType,

            control: {
              type: 'boolean',
            },
          }
        }

        // set always select type if has more than two options
        const hasMoreThanTwoOptions =
          (argType.type?.name === 'array' || argType.type?.name === 'enum') &&
          'length' in argType.type.value &&
          argType.type.value.length >= 2 &&
          argType.type.raw?.includes('|')

        if (!isBooleanUnion && hasMoreThanTwoOptions) {
          argTypes[key] = {
            ...argType,

            control: {
              type: 'select',
            },
          }
        }

        if (argType.type?.raw === 'string') {
          argTypes[key] = {
            ...argType,

            control: {
              type: 'text',
            },
          }
        }
      }
      return argTypes
    },
  ],
  // Automatically set default values if set on the component default props
  argsEnhancers: [
    ({ argTypes, initialArgs }) => {
      const newArgs = { ...initialArgs }

      for (const [key, argType] of Object.entries(argTypes)) {
        // Skip if the story already provides an explicit value
        if (newArgs[key] !== undefined) {
          continue
        }

        const defaultSummary = argType.table?.defaultValue?.summary
        if (defaultSummary === undefined || defaultSummary === null) {
          continue
        }

        const isBooleanType = argType.type?.raw === 'boolean' || argType.type?.name === 'boolean'
        if (isBooleanType) {
          newArgs[key] = defaultSummary === 'true' || defaultSummary
        } else {
          // For enums/strings, strip surrounding quotes from the summary
          const stripped =
            typeof defaultSummary === 'string'
              ? defaultSummary.replace(/^['"]|['"]$/gu, '')
              : defaultSummary
          newArgs[key] = stripped
        }
      }
      return newArgs
    },
  ],
})
