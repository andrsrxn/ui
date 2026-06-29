import preview from '../../.storybook/preview'

const meta = preview.meta({
  title: 'Foundations/Border',
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
})

export const Widths = meta.story({
  render: () => (
    <div className='h-sm flex items-center justify-center gap-12'>
      <div className='bg-surface text-body-sm flex aspect-square size-34 items-center justify-center rounded-lg border text-center'>
        <span>1</span>
      </div>
      <div className='bg-surface text-body-sm flex aspect-square size-34 items-center justify-center rounded-lg border-2 text-center'>
        <span>2</span>
      </div>
      <div className='bg-surface text-body-sm flex aspect-square size-34 items-center justify-center rounded-lg border-3 text-center'>
        <span>3</span>
      </div>
    </div>
  ),
})

export const Rounded = meta.story({
  render: () => (
    <div className='h-sm flex items-center justify-center gap-12'>
      <div className='bg-surface text-body-sm flex aspect-square size-12 items-center justify-center rounded-sm border text-center'>
        <span>sm</span>
      </div>
      <div className='bg-surface text-body-sm rounded-base flex aspect-square size-34 items-center justify-center border text-center'>
        <span>base</span>
      </div>
      <div className='bg-surface text-body-sm flex aspect-square size-44 items-center justify-center rounded-lg border text-center'>
        <span>lg</span>
      </div>
    </div>
  ),
})

export const Colors = meta.story({
  render: () => (
    <div className='flex flex-wrap items-center justify-center gap-6'>
      <div className='bg-surface text-body-sm border-base flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Base
      </div>
      <div className='bg-surface text-body-sm border-base-alt flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Base Alt
      </div>
      <div className='bg-surface text-body-sm border-inverted flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Inverted
      </div>
      <div className='bg-surface text-body-sm border-input flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Input
      </div>
      <div className='bg-surface text-body-sm border-focus flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Focus
      </div>

      <div className='bg-surface text-body-sm border-selected flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Selected
      </div>
      <div className='bg-surface text-body-sm border-selectable flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Selectable
      </div>

      <div className='bg-surface text-body-sm border-brand flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Brand
      </div>
      <div className='bg-surface text-body-sm border-accent-blue flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Accent Blue
      </div>
      <div className='bg-surface text-body-sm border-accent-green flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Accent Green
      </div>
      <div className='bg-surface text-body-sm border-accent-red flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Accent Red
      </div>
      <div className='bg-surface text-body-sm border-accent-yellow flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Accent Yellow
      </div>
      <div className='bg-surface text-body-sm border-accent-teal flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Accent Teal
      </div>
      <div className='bg-surface text-body-sm border-accent-magenta flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Accent Magenta
      </div>
      <div className='bg-surface text-body-sm border-accent-purple flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Accent Purple
      </div>
      <div className='bg-surface text-body-sm border-accent-orange flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Accent Orange
      </div>
      <div className='bg-surface text-body-sm border-info flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Info
      </div>
      <div className='bg-surface text-body-sm border-success flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Success
      </div>
      <div className='bg-surface text-body-sm border-warning flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Warning
      </div>
      <div className='bg-surface text-body-sm border-danger flex size-20 items-center justify-center rounded-sm border p-1 text-center'>
        Danger
      </div>
    </div>
  ),
})

export const AsSeparator = meta.story({
  render: () => (
    <div className='h-sm flex items-center justify-center gap-12'>
      <div className='bg-base text-body-sm relative flex aspect-square size-40 justify-center rounded-sm border p-4 text-center'>
        <div className='absolute top-1/2 left-0 h-px w-full -translate-y-1/2 border-b' />
        Base
      </div>
      <div className='bg-surface text-body-sm relative flex aspect-square size-40 justify-center rounded-sm border p-4 text-center'>
        <div className='border-base-alt absolute top-1/2 left-0 h-px w-full -translate-y-1/2 border-b' />
        Base Alt
      </div>
    </div>
  ),
})
