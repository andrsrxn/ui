import preview from '../../../.storybook/preview'
import { Bold } from '../../../src/components/ui/typography/bold'
import { Text } from '../../../src/components/ui/typography/text'

const meta = preview.meta({
  title: 'Components/Typography/Bold',
  component: Bold,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<strong>` inline for bold text.',
      },
    },
  },
  args: {
    children: 'Bold text',
  },
})

export const Base = meta.story({})

/**
 * Emphize primary idea.
 */
export const InParagraph = meta.story({
  render: args => (
    <Text variant='secondary'>
      Please, notice that <Bold {...args}>your subscription will end soon</Bold>.
    </Text>
  ),
})

/**
 * Emphize principal terms.
 */
export const AsTerms = meta.story({
  render: () => (
    <Text variant='secondary'>
      We are focused on <Bold>productivity</Bold> and <Bold>efficiency</Bold>.
    </Text>
  ),
})

/**
 * An specific feature or key label within a UI context.
 */
export const AsReference = meta.story({
  render: () => (
    <Text size='base' variant='secondary'>
      To continue, check the status in the <Bold>Modules</Bold> section and select{' '}
      <Bold>Pro plan</Bold> to unlock all features.
    </Text>
  ),
})
