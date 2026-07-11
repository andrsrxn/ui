import preview from '../../../.storybook/preview'
import { Heading } from '../../../src/components/ui/typography/heading'
import { Text } from '../../../src/components/ui/typography/text'
import { BrandDecorator, InvertedDecorator } from '../../shared/decorators'

const meta = preview.meta({
  title: 'Components/Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic block element for headings.',
      },
    },
  },
  args: {
    level: 1,
    variant: 'base',
    center: false,
    size: 'base',
    children: 'The quick brown fox jumps over the lazy dog',
  },
})

export const Base = meta.story({
  args: {
    variant: 'base',
  },
})

export const Content = meta.story({
  args: {
    variant: 'content',
  },
  decorators: BrandDecorator,
})

export const Inverted = meta.story({
  args: {
    variant: 'inverted',
    className: 'light',
  },
  decorators: InvertedDecorator,
})

export const Levels = meta.story({
  render: args => (
    <div className='flex flex-col gap-4'>
      <Heading {...args} level={1}>
        Heading 1
      </Heading>
      <Heading {...args} level={2}>
        Heading 2
      </Heading>
      <Heading {...args} level={3}>
        Heading 3
      </Heading>
      <Heading {...args} level={4}>
        Heading 4
      </Heading>
      <Heading {...args} level={5}>
        Heading 5
      </Heading>
      <Heading {...args} level={6}>
        Heading 6
      </Heading>
    </div>
  ),
})

export const Sizes = meta.story({
  render: args => (
    <div className='flex flex-col gap-4'>
      <Heading {...args} level={1} size='display-base'>
        Heading 1 display base
      </Heading>
      <Heading {...args} level={1} size='display-sm'>
        Heading 1 display sm
      </Heading>
      <Heading {...args} level={1} size='base'>
        Heading 1 base
      </Heading>
      <Heading {...args} level={1} size='sm'>
        Heading 1 sm
      </Heading>

      <Heading {...args} level={2} size='display-base'>
        Heading 2 display base
      </Heading>
      <Heading {...args} level={2} size='display-sm'>
        Heading 2 display sm
      </Heading>
      <Heading {...args} level={2} size='base'>
        Heading 2 base
      </Heading>
      <Heading {...args} level={2} size='sm'>
        Heading 2 sm
      </Heading>

      <Heading {...args} level={3} size='base'>
        Heading 3 base
      </Heading>
      <Heading {...args} level={3} size='sm'>
        Heading 3 sm
      </Heading>

      <Heading {...args} level={4} size='base'>
        Heading 4 base
      </Heading>
      <Heading {...args} level={4} size='sm'>
        Heading 4 sm
      </Heading>

      <Heading {...args} level={5} size='base'>
        Heading 5 base
      </Heading>
      <Heading {...args} level={5} size='sm'>
        Heading 5 sm
      </Heading>

      <Heading {...args} level={6} size='base'>
        Heading 6 base
      </Heading>
      <Heading {...args} level={6} size='sm'>
        Heading 6 sm
      </Heading>
    </div>
  ),
})

export const Responsive = meta.story({
  args: {
    size: 'sm',
    tablet: 'base',
    laptop: 'display-sm',
    desktop: 'display-base',
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

export const WithParagraph = meta.story({
  render: args => (
    <div className='grid gap-2'>
      <Heading {...args}>Supercharge your team's workflow</Heading>
      <Text variant='secondary' desktop='lg'>
        Transform project management with seamless collaboration and intelligent automation.
      </Text>
    </div>
  ),
})
