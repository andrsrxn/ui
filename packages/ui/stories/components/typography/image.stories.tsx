import preview from '../../../.storybook/preview'
import { Image } from '../../../src/components/ui/typography/image'

const meta = preview.meta({
  title: 'Components/Typography/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<img>` for images.',
      },
    },
  },
  args: {
    src: 'https://placehold.co/800x800/0047cc/e7effd?text=800x800',
    alt: 'Placeholder',
    placeholderUrl: undefined,
    className: 'rounded-lg aspect-square w-sm',
  },
})

export const Base = meta.story({})

export const WithPlaceholder = meta.story({
  args: {
    src: 'https://placehold.co/800x800/0047cc/e7effd?text=4000x4000',
    placeholderUrl: 'https://placehold.co/20x20/0047cc/e7effd?text=Placeholder',
  },
})
