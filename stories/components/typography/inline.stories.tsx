import preview from '../../../.storybook/preview'
import { Inline } from '../../../src/components/ui/typography/inline'
import { Text } from '../../../src/components/ui/typography/text'
import { ContentDecorator } from '../../shared/decorators'

const meta = preview.meta({
  title: 'Components/Typography/Inline',
  component: Inline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<span>` element for inline text.',
      },
    },
  },
  args: {
    children: 'Inline text',
    variant: 'primary',
    center: false,
    size: 'base',
  },
})

export const Inherit = meta.story({
  args: {
    variant: 'inherit',
  },
  decorators: [
    Story => (
      <div>
        <Text>
          Main text with: <Story />, and more text
        </Text>
      </div>
    ),
  ],
})

/**
 * Used when the text is the main content of a component, section, or page
 */
export const Primary = meta.story({})

/**
 * Used for supporting text, like descriptions or supplementary labels. Often used with a heading.
 */
export const Secondary = meta.story({
  args: {
    variant: 'secondary',
  },
})

/**
 * Used on placeholders or legal text.
 */
export const Tertiary = meta.story({
  args: {
    variant: 'tertiary',
  },
})

export const Brand = meta.story({
  args: {
    variant: 'brand',
  },
})

export const Content = meta.story({
  args: {
    variant: 'content',
  },
  decorators: ContentDecorator,
})

export const Info = meta.story({
  args: {
    variant: 'info',
  },
})

export const Success = meta.story({
  args: {
    variant: 'success',
  },
})

export const Warning = meta.story({
  args: {
    variant: 'warning',
  },
})

export const Danger = meta.story({
  args: {
    variant: 'danger',
  },
})

export const Sizes = meta.story({
  render: args => (
    <div className='flex flex-col gap-4'>
      <Inline {...args} size='xs'>
        Inline xs
      </Inline>
      <Inline {...args} size='sm'>
        Inline sm
      </Inline>
      <Inline {...args} size='base'>
        Inline base
      </Inline>
      <Inline {...args} size='lg'>
        Inline lg
      </Inline>
      <Inline {...args} size='xl'>
        Inline xl
      </Inline>
    </div>
  ),
})

export const Responsive = meta.story({
  args: {
    size: 'xs',
    tablet: 'sm',
    laptop: 'base',
    desktop: 'lg',
    display: 'xl',
  },
})

export const Centered = meta.story({
  args: {
    center: true,
  },
  parameters: {
    layout: 'padded',
  },
})
