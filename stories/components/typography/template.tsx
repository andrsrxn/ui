import preview from '../../../.storybook/preview'
import { Code } from '../../../src/components/ui/typography/code'

const meta = preview.meta({
  title: 'Components/Typography/Code',
  component: Code,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<code>` inline for code snippets or file paths.',
      },
    },
  },
  args: {
    children: '',
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({ args: { variant: 'secondary' } })
