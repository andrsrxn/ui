import preview from '../../../.storybook/preview'
import { Bold } from '../../../src/components/ui/typography/bold'
import { Highlight } from '../../../src/components/ui/typography/highlight'
import { Text } from '../../../src/components/ui/typography/text'

const meta = preview.meta({
  title: 'Components/Typography/Highlight',
  component: Highlight,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<mark>` inline for highlighted text.',
      },
    },
  },
  args: {
    children: 'Highlighted text',
  },
})

export const Base = meta.story({})

/**
 * Emphize primary idea.
 */
export const InParagraph = meta.story({
  render: args => (
    <Text variant='secondary'>
      Our comprehensive guide to <Bold>business management</Bold> covers key areas such as{' '}
      <Highlight {...args}>finance, marketing, and human resources.</Highlight>
    </Text>
  ),
})
