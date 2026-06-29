import preview from '../../../.storybook/preview'
import { Link } from '../../../src/components/ui/typography/link'
import { Text } from '../../../src/components/ui/typography/text'

const meta = preview.meta({
  title: 'Components/Typography/Link',
  component: Link,
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
    selectedAlt: false,
    includeIcon: false,
    full: false,
    unstyled: false,
    href: '#',
    asChild: false,
    children: 'Go to homepage',
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({ args: { variant: 'secondary' } })

export const AsChild = meta.story({
  args: { asChild: true },
  render: args => (
    <Link {...args}>
      <a href='/#' target='_blank' rel='noopener noreferrer'>
        Go to homepage
      </a>
    </Link>
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
      <Link {...args}>About us</Link>
      <Link {...args} selected>
        Home
      </Link>
      <Link {...args}>Contact</Link>
    </div>
  ),
})

export const SelectedAlt = meta.story({
  args: { selectable: true, selectedAlt: false },
  render: args => (
    <div className='flex items-center gap-4'>
      <Link {...args}>About us</Link>
      <Link {...args} selectedAlt>
        Home
      </Link>
      <Link {...args}>Contact</Link>
    </div>
  ),
})

// TODO: export const Unstyled =

export const InParagraph = meta.story({
  render: args => (
    <Text variant='secondary'>
      Visit our{' '}
      <Link href='/politica-de-privacidad' {...args}>
        privacy policy
      </Link>
      .
    </Text>
  ),
})
