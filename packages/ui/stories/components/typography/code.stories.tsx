import { COMPANY } from '@andrsrxn/constants/company'
import preview from '../../../.storybook/preview'
import { Code } from '../../../src/components/ui/typography/code'
import { Text } from '../../../src/components/ui/typography/text'

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
    variant: 'primary',
    size: 'base',
    children: `pnpm add @${COMPANY.name}`,
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({
  args: {
    variant: 'secondary',
  },
})

export const Sizes = meta.story({
  render: args => (
    <div className='flex flex-col gap-4'>
      <Code {...args} size='sm' />
      <Code {...args} size='base' />
      <Code {...args} size='lg' />
    </div>
  ),
})

export const InParagraph = meta.story({
  args: {
    size: 'inline',
  },
  render: args => (
    <Text variant='secondary'>
      To install this library, run <Code {...args} /> on your terminal.
    </Text>
  ),
})
