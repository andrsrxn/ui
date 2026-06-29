import preview from '../../../.storybook/preview'
import { IconKeyCommand, IconKeyOption } from '../../../src/components/icons'
import { Kbd, KbdGroup } from '../../../src/components/ui/typography/kbd'
import { Text } from '../../../src/components/ui/typography/text'

const meta = preview.meta({
  title: 'Components/Typography/Kbd',
  component: Kbd,
  subcomponents: { KbdGroup },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<kbd>` inline for keyboard or mouse inputs.',
      },
    },
  },
  args: {
    children: 'Shift',
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({ args: { variant: 'secondary' } })

export const Tertiary = meta.story({ args: { variant: 'tertiary' } })

export const WithIcon = meta.story({ args: { children: <IconKeyCommand /> } })

export const Sizes = meta.story({
  render: args => (
    <div className='grid gap-4'>
      <Kbd {...args} size='sm' />
      <Kbd {...args} size='base' />
      <Kbd {...args} size='lg' />
      <Kbd {...args} size='inline' />
    </div>
  ),
})

export const WithSeparator = meta.story({
  args: {
    variant: 'tertiary',
  },
  render: args => (
    <KbdGroup includeSeparator>
      <Kbd {...args}>Cntl</Kbd>
      <Kbd {...args}>B</Kbd>
    </KbdGroup>
  ),
})

export const Grouped = meta.story({
  render: args => (
    <div className='grid gap-4'>
      <KbdGroup>
        <Kbd {...args}>
          <IconKeyOption />
        </Kbd>
        <Kbd {...args}>
          <IconKeyCommand />
        </Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd {...args}>Cntl</Kbd>
        <Kbd {...args}>B</Kbd>
      </KbdGroup>
    </div>
  ),
})

export const InParagraph = meta.story({
  render: () => (
    <Text>
      Press <Kbd size='inline'>D</Kbd> to toggle theme.
    </Text>
  ),
})
