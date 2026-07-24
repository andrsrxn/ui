import preview from '../../.storybook/preview'
import { IconPlus, IconSearch } from '../../src/components/icons'
import { Button } from '../../src/components/ui/button'
import { Anchor } from '../../src/components/ui/typography/anchor'
import { COMPANY } from '../constants/company'

const meta = preview.meta({
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The main interactive action element. It can be used to trigger an action, such as submitting a form, opening a dialog, or navigating to another page.',
      },
    },
  },
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'base',
    pill: false,
    full: false,
    adjustIcon: false,
    loading: false,
    disabled: false,
    render: undefined,
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({ args: { variant: 'secondary' } })

export const Tertiary = meta.story({ args: { variant: 'tertiary' } })

export const Ghost = meta.story({ args: { variant: 'ghost' } })

export const Danger = meta.story({ args: { variant: 'danger' } })

export const Success = meta.story({ args: { variant: 'success' } })

export const Disabled = meta.story({ args: { disabled: true } })

export const DisabledWithFocus = meta.story({
  args: { disabled: true, focusableWhenDisabled: true },
})

export const Loading = meta.story({ args: { loading: true } })

export const Pill = meta.story({ args: { pill: true } })

export const WithIcon = meta.story({
  render: args => (
    <Button {...args}>
      <IconPlus />
      Add project
    </Button>
  ),
})

export const AsChild = meta.story({
  render: () => (
    <Button
      variant='secondary'
      render={<Anchor target='_blank' includeIcon href={COMPANY.repository.url} unstyled />}>
      See repository
    </Button>
  ),
})

export const Full = meta.story({
  args: {
    full: true,
  },
  decorators: [
    Story => (
      <div className='mx-auto w-md'>
        <Story />
      </div>
    ),
  ],
})

export const Sizes = meta.story({
  render: args => (
    <div className='grid grid-cols-2 gap-4'>
      <div className='flex flex-col gap-4'>
        <Button {...args} size='xs' />
        <Button {...args} size='sm' />
        <Button {...args} size='base' />
        <Button {...args} size='lg' />
      </div>
      <div className='flex flex-col gap-4'>
        <Button size='icon-xs' aria-label='Search'>
          <IconSearch />
        </Button>
        <Button size='icon-sm' aria-label='Search'>
          <IconSearch />
        </Button>
        <Button size='icon-base' aria-label='Search'>
          <IconSearch />
        </Button>
        <Button size='icon-lg' aria-label='Search'>
          <IconSearch />
        </Button>
      </div>
    </div>
  ),
})
