import preview from '../../.storybook/preview'

const meta = preview.meta({
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs'],
})

export const Heading = meta.story({
  render: () => (
    <div className='grid gap-6'>
      <h1 className='text-heading-1-display-base'>Heading 1 Display Base</h1>
      <h1 className='text-heading-1-display-sm'>Heading 1 Display Small</h1>
      <h1 className='text-heading-1-base'>Heading 1 Base</h1>
      <h1 className='text-heading-1-sm'>Heading 1 Small</h1>
      <h2 className='text-heading-2-display-base'>Heading 2 Display Base</h2>
      <h2 className='text-heading-2-display-sm'>Heading 2 Display Small</h2>
      <h2 className='text-heading-2-base'>Heading 2 Base</h2>
      <h2 className='text-heading-2-sm'>Heading 2 Small</h2>
      <h3 className='text-heading-3-base'>Heading 3 Base</h3>
      <h3 className='text-heading-3-sm'>Heading 3 Small</h3>
      <h4 className='text-heading-4-base'>Heading 4 Base</h4>
      <h4 className='text-heading-4-sm'>Heading 4 Small</h4>
      <h5 className='text-heading-5-base'>Heading 5 Base</h5>
      <h5 className='text-heading-5-sm'>Heading 5 Small</h5>
      <h6 className='text-heading-6-base'>Heading 6 Base</h6>
      <h6 className='text-heading-6-sm'>Heading 6 Small</h6>
    </div>
  ),
})

export const Label = meta.story({
  render: () => (
    <div className='grid gap-6'>
      <p className='text-label-4xl'>Label 4X-Large</p>
      <p className='text-label-3xl'>Label 3X-Large</p>
      <p className='text-label-2xl'>Label 2X-Large</p>
      <p className='text-label-xl'>Label X-Large</p>
      <p className='text-label-lg'>Label Large</p>
      <p className='text-label-base'>Label Base</p>
      <p className='text-label-sm'>Label Small</p>
      <p className='text-label-xs'>Label X-Small</p>
    </div>
  ),
})

export const Body = meta.story({
  render: () => (
    <div className='grid gap-6'>
      <p className='text-body-xl'>Body X-Large</p>
      <p className='text-body-lg'>Body Large</p>
      <p className='text-body-base'>Body Base</p>
      <p className='text-body-sm'>Body Small</p>
      <p className='text-body-xs'>Body X-Small</p>
    </div>
  ),
})
