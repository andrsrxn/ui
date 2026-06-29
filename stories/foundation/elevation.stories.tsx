import preview from '../../.storybook/preview'

const meta = preview.meta({
  title: 'Foundations/Elevation',

  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
})

export const Base = meta.story({
  render: () => (
    <div className='h-sm flex items-center justify-center gap-6'>
      <div className='bg-surface text-body-sm flex aspect-square size-20 items-center justify-center rounded-sm text-center shadow-xs'>
        <span>xs</span>
      </div>
      <div className='bg-surface text-body-sm flex aspect-square size-20 items-center justify-center rounded-sm text-center shadow-sm'>
        <span>sm</span>
      </div>
      <div className='bg-surface text-body-sm shadow-base flex aspect-square size-20 items-center justify-center rounded-sm text-center'>
        <span>base</span>
      </div>
      <div className='bg-surface text-body-sm flex aspect-square size-20 items-center justify-center rounded-sm text-center shadow-lg'>
        <span>lg</span>
      </div>
      <div className='bg-surface text-body-sm flex aspect-square size-20 items-center justify-center rounded-sm text-center shadow-xl'>
        <span>xl</span>
      </div>
      <div className='bg-surface text-body-sm flex aspect-square size-20 items-center justify-center rounded-sm text-center shadow-2xl'>
        <span>2xl</span>
      </div>
      <div className='bg-surface text-body-sm flex aspect-square size-20 items-center justify-center rounded-sm text-center shadow-inner'>
        <span>inner</span>
      </div>
    </div>
  ),
})
