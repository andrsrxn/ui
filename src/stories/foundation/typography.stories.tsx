import preview from '../../../.storybook/preview'

const meta = preview.meta({
  title: 'Foundations/Typography',

  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography types and scale',
      },
    },
  },

  tags: ['autodocs'],
})

export const Heading = meta.story({
  render: () => (
    <div className=' grid gap-6'>
      <h1>The fox text</h1>
    </div>
  ),
})
