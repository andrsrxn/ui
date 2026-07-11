import preview from '../../.storybook/preview'
import { Button } from '../../src/components/ui/button'
import { Spinner } from '../../src/components/ui/spinner'
import { InvertedDecorator } from '../shared/decorators'

const meta = preview.meta({
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An icon that shows the loading state of an element. It can be used to indicate that an action is processing. By default the spinner is wrapped in a span element that is accessible to screen readers.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'base',
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({ args: { variant: 'secondary' } })

export const Tertiary = meta.story({ args: { variant: 'tertiary' } })

export const Inverted = meta.story({
  args: {
    variant: 'inverted',
    className: 'light',
  },
  decorators: InvertedDecorator,
})

export const Inherit = meta.story({
  args: {
    variant: 'inherit',
    className: 'text-success',
  },
})

export const Sizes = meta.story({
  render: args => (
    <div className='flex flex-col gap-4'>
      <Spinner {...args} size='xs' />
      <Spinner {...args} size='sm' />
      <Spinner {...args} size='base' />
      <Spinner {...args} size='lg' />
      <Spinner {...args} size='xl' />
      <Spinner {...args} size='2xl' />
      <Spinner {...args} size='3xl' />
      <Spinner {...args} size='4xl' />
    </div>
  ),
})

/**
 * Set `decorative` to `true` and `size` to `responsive` when Spinner is within another component (e.g. Button, Input).
 */
export const Decorative = meta.story({
  args: {
    decorative: true,
    size: 'responsive',
  },
  render: () => <Button loading>Creating...</Button>,
})
