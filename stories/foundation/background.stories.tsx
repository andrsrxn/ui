import preview from '../../.storybook/preview'

const meta = preview.meta({
  title: 'Foundations/Background',
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
})

export const Base = meta.story({
  render: () => (
    <div className='h-lg grid place-content-center gap-24'>
      <div className='bg-base text-body-sm -mt-4 -ml-14 aspect-square size-40 rounded-lg border p-6'>
        Base
        <div className='bg-base-contrast text-body-sm aspect-square size-40 rounded-lg border p-6'>
          Base contrast
          <div className='bg-surface text-body-sm aspect-square size-40 rounded-lg border p-6'>
            Surface
          </div>
        </div>
      </div>
    </div>
  ),
})
