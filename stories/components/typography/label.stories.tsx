import preview from '../../../.storybook/preview'
import { IconColors, IconDashboard, IconLayers, IconTool } from '../../../src/components/icons'
import { Label } from '../../../src/components/ui/typography/label'
import { Text } from '../../../src/components/ui/typography/text'
import { ContentDecorator } from '../../shared/decorators'

const meta = preview.meta({
  title: 'Components/Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<span>` inline for labels which are not headings.',
      },
    },
  },
  args: {
    children: 'Label text',
    variant: 'primary',
    center: false,
    size: 'base',
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({ args: { variant: 'secondary' } })

export const Content = meta.story({
  args: {
    variant: 'content',
  },
  decorators: ContentDecorator,
})

export const Sizes = meta.story({
  render: args => (
    <div className='flex flex-col gap-4'>
      <Label {...args} size='xs'>
        Label xs
      </Label>
      <Label {...args} size='sm'>
        Label sm
      </Label>
      <Label {...args} size='base'>
        Label base
      </Label>
      <Label {...args} size='lg'>
        Label lg
      </Label>
      <Label {...args} size='xl'>
        Label xl
      </Label>
      <Label {...args} size='2xl'>
        Label 2xl
      </Label>
      <Label {...args} size='3xl'>
        Label 3xl
      </Label>
      <Label {...args} size='4xl'>
        Label 4xl
      </Label>
    </div>
  ),
})

export const Responsive = meta.story({
  args: {
    size: 'sm',
    tablet: 'lg',
    laptop: 'xl',
    desktop: '2xl',
    display: '4xl',
  },
})

/**
 * Used when the text is the main content of a component, section, or page
 */

export const Centered = meta.story({
  args: {
    center: true,
  },
  parameters: {
    layout: 'padded',
  },
})

/**
 * Used when the text is the main content of a component, section, or page
 */
export const WithDescription = meta.story({
  render: args => (
    <div className='grid gap-1'>
      <Label {...args}>Reports</Label>
      <Text variant='secondary'>Manage your data and metrics</Text>
    </div>
  ),
})

/**
 * Used for supporting label, when is not the only label in a list or a sidebar.
 */
export const WithList = meta.story({
  render: args => (
    <div>
      <Label {...args} variant='secondary'>
        General
      </Label>
      <ul className='mt-4 grid gap-2'>
        <li className='flex items-center gap-2'>
          <IconDashboard className='size-icon-responsive' /> Dashboard
        </li>
        <li className='flex items-center gap-2'>
          <IconLayers className='size-icon-responsive' /> Components
        </li>
        <li className='flex items-center gap-2'>
          <IconColors className='size-icon-responsive' /> Colors
        </li>
        <li className='flex items-center gap-2'>
          <IconTool className='size-icon-responsive' /> Utilities
        </li>
      </ul>
    </div>
  ),
})
