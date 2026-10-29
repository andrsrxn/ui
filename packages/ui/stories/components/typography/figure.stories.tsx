import preview from '../../../.storybook/preview'
import { Anchor } from '../../../src/components/ui/typography/anchor'
import { Figure, FigureCaption } from '../../../src/components/ui/typography/figure'
import { Image } from '../../../src/components/ui/typography/image'

const meta = preview.meta({
  title: 'Components/Typography/Figure',
  component: Figure,
  subcomponents: { FigureCaption },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The semantic `<figure>` element represents self-contained content, and `<figcaption>` represents the caption of the figure.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    center: false,
  },
})

export const Base = meta.story({
  args: {
    children: (
      <Image
        src='https://placehold.co/800x800/0047cc/e7effd?text=800x800'
        alt='Placeholder'
        placeholderUrl={undefined}
        className='aspect-square w-sm rounded-lg'
      />
    ),
  },
})

export const WithCaption = meta.story({
  args: {
    children: (
      <>
        <Image
          src='https://placehold.co/800x800/0047cc/e7effd?text=800x800'
          alt='Placeholder'
          placeholderUrl={undefined}
          className='aspect-square w-md rounded-lg'
        />
        <FigureCaption>
          Figure 1: Context, additional information, attributes the source or a{' '}
          <Anchor href='https://placehold.co' target='_blank' includeIcon>
            copyright holder
          </Anchor>
        </FigureCaption>
      </>
    ),
  },
})

export const Centered = meta.story({
  args: {
    center: true,
    children: (
      <>
        <Image
          src='https://placehold.co/1920x1080/0047cc/e7effd?text=1920x1080'
          alt='Placeholder'
          placeholderUrl={undefined}
          className='aspect-video max-w-3xl rounded-lg'
        />
        <FigureCaption>
          Figure 1: Context, additional information, attributes the source or a{' '}
          <Anchor href='https://placehold.co' target='_blank' includeIcon>
            copyright holder
          </Anchor>
        </FigureCaption>
      </>
    ),
  },
})
