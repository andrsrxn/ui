import type { PartialStoryFn } from 'storybook/internal/types'

export const ContentDecorator = (Story: PartialStoryFn) => {
  return (
    <div data-slot='content-decorator'>
      <style>{`
        body {
          background: var(--background-brand)
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
