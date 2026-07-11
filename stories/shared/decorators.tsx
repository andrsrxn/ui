import type { PartialStoryFn } from 'storybook/internal/types'

export const BrandDecorator = (Story: PartialStoryFn) => {
  return (
    <div data-slot='brand-decorator'>
      <style>{`
        body {
          background: var(--background-color-brand)
        }
      `}</style>
      <Story />
    </div>
  )
}

export const InvertedDecorator = (Story: PartialStoryFn) => {
  return (
    <div data-slot='inverted-decorator'>
      <style>{`
        body {
          background: var(--background-color-base-inverted)
        }
      `}</style>
      <Story />
    </div>
  )
}

export const SurfaceDecorator = (Story: PartialStoryFn) => {
  return (
    <div data-slot='surface-decorator'>
      <style>{`
        body {
          background: var(--background-color-surface)
        }
      `}</style>
      <Story />
    </div>
  )
}
