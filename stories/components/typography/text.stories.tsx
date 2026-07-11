import preview from '../../../.storybook/preview'
import { Text } from '../../../src/components/ui/typography/text'
import { BrandDecorator, InvertedDecorator } from '../../shared/decorators'

const meta = preview.meta({
  title: 'Components/Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The semantic `<p>` element for body copy. Supports **semantic color variants** (`primary`, `secondary`, `danger`, etc.) and **responsive sizing** via per-breakpoint props (`tablet`, `laptop`, `desktop`, `display`). Use instead of raw `<p>` tags throughout the system to ensure consistent typography tokens and theme transitions.',
      },
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'primary',
    center: false,
    size: 'base',
  },
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
  decorators: BrandDecorator,
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

export const Inverted = meta.story({
  args: {
    variant: 'inverted',
  },
  decorators: InvertedDecorator,
})

export const Inherit = meta.story({
  args: {
    variant: 'inherit',
  },
  decorators: [
    Story => (
      <div className='text-success'>
        <Story />
      </div>
    ),
  ],
})

export const Sizes = meta.story({
  render: args => (
    <div className='flex flex-col gap-4'>
      <Text {...args} size='xs'>
        Text xs
      </Text>
      <Text {...args} size='sm'>
        Text sm
      </Text>
      <Text {...args} size='base'>
        Text base
      </Text>
      <Text {...args} size='lg'>
        Text lg
      </Text>
      <Text {...args} size='xl'>
        Text xl
      </Text>
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
