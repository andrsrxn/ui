import preview from '../../../.storybook/preview'

/**
 * Background colors
 */
const meta = preview.meta({
  title: 'Foundations/Background',

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Background colors',
      },
    },
  },

  tags: ['autodocs'],
})

export const Base = meta.story({
  render: () => (
    <div className='h-sm grid grid-cols-2 place-content-center gap-24'>
      <div className='bg-base text-body-sm -mt-10 -ml-10 aspect-square size-34 rounded-lg border p-4'>
        Base
        <div className='bg-base-accent text-body-sm aspect-square size-34 rounded-lg border p-4'>
          Base Accent
          <div className='bg-surface text-body-sm aspect-square size-34 rounded-lg border p-4'>
            Surface
          </div>
        </div>
      </div>
      <div className='bg-base-alt text-body-sm -mt-10 -ml-10 aspect-square size-34 rounded-lg border p-4'>
        Base Alt
        <div className='bg-base-accent-alt text-body-sm aspect-square size-34 rounded-lg border p-4'>
          Base Accent Alt
          <div className='bg-surface-alt text-body-sm aspect-square size-34 rounded-lg border p-4'>
            Surface Alt
          </div>
        </div>
      </div>
    </div>
  ),
})
