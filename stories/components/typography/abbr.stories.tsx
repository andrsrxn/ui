import preview from '../../../.storybook/preview'
import { Abbr } from '../../../src/components/ui/typography/abbr'
import { Text } from '../../../src/components/ui/typography/text'

const meta = preview.meta({
  title: 'Components/Typography/Abbr',
  component: Abbr,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<abbr>` inline for abbreviation text.',
      },
    },
  },
  args: {
    children: 'SaaS',
    title: 'Software as a Service',
  },
})

export const Base = meta.story({})

export const InParagraph = meta.story({
  render: args => (
    <Text variant='secondary'>
      We are focused on <Abbr {...args} />
    </Text>
  ),
})
