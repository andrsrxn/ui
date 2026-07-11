import preview from '../../../.storybook/preview'
import { List, ListItem } from '../../../src/components/ui/typography/list'
import { BrandDecorator, InvertedDecorator } from '../../shared/decorators'

const meta = preview.meta({
  title: 'Components/Typography/List',
  component: List,
  subcomponents: {
    ListItem,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<ul>`/`<ol>` for lists.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    variant: 'primary',
    size: 'base',
    ordered: false,
    nested: false,
    children: (
      <>
        <ListItem>Unlimited collaborative workspaces</ListItem>
        <ListItem>Advanced analytics and custom reporting dashboard</ListItem>
        <ListItem>Dedicated account manager and 24/7 priority support</ListItem>
      </>
    ),
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({
  args: {
    variant: 'secondary',
  },
})

export const Inverted = meta.story({
  args: {
    variant: 'inverted',
    className: 'light',
  },
  decorators: InvertedDecorator,
})

export const Content = meta.story({
  args: {
    variant: 'content',
  },
  decorators: BrandDecorator,
})

export const Ordered = meta.story({
  args: {
    ordered: true,
  },
})

export const WithLabel = meta.story({
  args: {
    children: (
      <>
        <ListItem label='Admin'>The admin user </ListItem>
        <ListItem label='User'>A normal user</ListItem>
      </>
    ),
  },
})

export const Nested = meta.story({
  args: {
    children: (
      <ListItem>
        Levels
        <List nested ordered={false}>
          <ListItem>Admins</ListItem>
          <ListItem>
            Users
            <List nested ordered>
              <ListItem>Basic</ListItem>
              <ListItem>Premium</ListItem>
            </List>
          </ListItem>
        </List>
      </ListItem>
    ),
  },
})
