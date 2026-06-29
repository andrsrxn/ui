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
        component: 'The semantic `<code>` inline for code snippets or file paths.',
      },
    },
  },
  args: {
    children:
      'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.',
  },
})

export const Base = meta.story({})

export const WithAuthor = meta.story({
  render: args => (
    <Blockquote cite='https://dribble.com'>
      {args.children}
      <BlockquoteFooter>Dribbble</BlockquoteFooter>
    </Blockquote>
  ),
})
