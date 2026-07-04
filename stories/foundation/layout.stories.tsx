import preview from '../../.storybook/preview'

const meta = preview.meta({
  title: 'Foundations/Layout',
  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs'],
})

export const Base = meta.story({
  render: () => (
    <div className='h-sm grid gap-6'>
      <div className='bg-details flex h-12 w-(--breakpoint-mobile-sm) items-center px-8'>
        <span>
          <strong>Mobile sm</strong> (360px)
        </span>
      </div>
      <div className='bg-details flex h-12 w-(--breakpoint-mobile-base) items-center px-8'>
        <span>
          <strong>Mobile base</strong> (480px)
        </span>
      </div>
      <div className='bg-details flex h-12 w-(--breakpoint-tablet) items-center px-8'>
        <span>
          <strong>Tablet</strong> (768px)
        </span>
      </div>
      <div className='bg-details flex h-12 w-(--breakpoint-laptop) items-center px-8'>
        <span>
          <strong>Laptop</strong> (1024px)
        </span>
      </div>
      <div className='bg-details flex h-12 w-(--breakpoint-desktop) items-center px-8'>
        <span>
          <strong>Desktop</strong> (1280px)
        </span>
      </div>
      <div className='bg-details flex h-12 w-(--breakpoint-display) items-center px-8'>
        <span>
          <strong>Display</strong> (1536px)
        </span>
      </div>
    </div>
  ),
})
