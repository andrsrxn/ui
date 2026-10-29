import preview from '../../../.storybook/preview'
import { Anchor } from '../../../src/components/ui/typography/anchor'
import { Text } from '../../../src/components/ui/typography/text'

const meta = preview.meta({
  title: 'Components/Typography/Anchor',
  component: Anchor,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<a>` inline for hyperlinks.',
      },
    },
  },
  args: {
    variant: 'primary',
    selectable: false,
    selected: false,
    selectedSubtle: false,
    includeIcon: false,
    full: false,
    unstyled: false,
    href: '#',
    render: undefined,
    children: 'Go to homepage',
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({ args: { variant: 'secondary' } })

export const AsChild = meta.story({
  render: args => (
    <Anchor {...args} render={<a href='/#' target='_blank' rel='noopener noreferrer' />}>
      Go to homepage
    </Anchor>
  ),
})

export const WithIcon = meta.story({ args: { includeIcon: true } })

export const DownloadLink = meta.story({
  args: { children: 'image.png', includeIcon: true, href: 'image.png', download: 'image.png' },
})

export const ExternalLink = meta.story({ args: { includeIcon: true, target: '_blank' } })

export const Full = meta.story({
  parameters: {
    layout: 'padded',
  },
  args: { full: true, includeIcon: true },
})

export const Selectable = meta.story({
  args: { selectable: true, selected: false },
  render: args => (
    <div className='flex items-center gap-4'>
      <Anchor {...args}>About us</Anchor>
      <Anchor {...args} selected>
        Home
      </Anchor>
      <Anchor {...args}>Contact</Anchor>
    </div>
  ),
})

export const SelectedSubtle = meta.story({
  args: { selectable: true },
  render: args => (
    <div className='flex items-center gap-4'>
      <Anchor {...args}>About us</Anchor>
      <Anchor {...args} selectedSubtle>
        Home
      </Anchor>
      <Anchor {...args}>Contact</Anchor>
    </div>
  ),
})

// TODO: export const Unstyled =

export const InParagraph = meta.story({
  render: args => (
    <Text variant='secondary'>
      Visit our{' '}
      <Anchor href='/politica-de-privacidad' {...args}>
        privacy policy
      </Anchor>
      .
    </Text>
  ),
})
