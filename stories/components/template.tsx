import preview from '../../.storybook/preview'

const meta = preview.meta({
  title: 'Components/',
  component: ,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'T',
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
    asChild: false,
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({ args: { variant: 'secondary' } })

export const Tertiary = meta.story({ args: { variant: 'tertiary' } })
