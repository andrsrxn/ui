import preview from '../../../.storybook/preview'
import { Time } from '../../../src/components/ui/typography/time'
import { BrandDecorator, InvertedDecorator } from '../../shared/decorators'
import { formatDate } from '../../utils/dates'

const meta = preview.meta({
  title: 'Components/Typography/Time',
  component: Time,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<time>` for dates and times.',
      },
    },
  },
  args: {
    dateTime: '2026-06-17T03:24:00',
    children: formatDate({
      date: new Date('2026-06-17T03:24:00'),
      includeTime: true,
      includeWeekDay: true,
    }),
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({ args: { variant: 'secondary' } })

export const Tertiary = meta.story({ args: { variant: 'tertiary' } })

export const Inverted = meta.story({
  args: { variant: 'inverted', className: 'light' },
  decorators: [
    Story => {
      return (
        <InvertedDecorator>
          <Story />
        </InvertedDecorator>
      )
    },
  ],
})

export const Content = meta.story({
  args: { variant: 'content' },
  decorators: [
    Story => {
      return (
        <BrandDecorator>
          <Story />
        </BrandDecorator>
      )
    },
  ],
})

export const Sizes = meta.story({
  render: args => (
    <div className='flex flex-col gap-4'>
      <Time {...args} size='xs' />
      <Time {...args} size='sm' />
      <Time {...args} size='base' />
      <Time {...args} size='lg' />
    </div>
  ),
})

export const WithIcon = meta.story({ args: { includeIcon: true } })

export const Responsive = meta.story({
  args: {
    size: 'xs',
    tablet: 'sm',
    laptop: 'base',
    desktop: 'lg',
  },
})
