import preview from '../../../.storybook/preview'
import { Blockquote, BlockquoteFooter } from '../../../src/components/ui/typography/blockquote'

const meta = preview.meta({
  title: 'Components/Typography/Blockquote',
  component: Blockquote,
  subcomponents: { BlockquoteFooter },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<blockquote>` element for quotations including author citation.',
      },
    },
  },
  args: {
    children:
      'Quality is more important than quantity. One home run is much better than two doubles.',
  },
})

export const Base = meta.story({})

export const WithAuthor = meta.story({
  render: args => (
    <Blockquote cite='https://dribble.com'>
      {args.children}
      <BlockquoteFooter>Steve Jobs</BlockquoteFooter>
    </Blockquote>
  ),
})
