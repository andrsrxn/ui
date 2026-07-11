import preview from '../../.storybook/preview'
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionContentText,
  AccordionTrigger,
} from '../../src/components/ui/accordion'
import { SurfaceDecorator } from '../shared/decorators'

const items = [
  {
    value: 'item-1',
    title: 'lorem ipsum dolor sit amet',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    value: 'item-2',
    title: 'lorem ipsum dolor sit amet',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    value: 'item-3',
    title: 'lorem ipsum dolor sit amet',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
]

const meta = preview.meta({
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    AccordionContentText,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An accordion is a vertically stacked list of items, where each item can be expanded or collapsed to reveal its content. It is commonly used for displaying FAQs, navigation menus, or other content that can be organized into collapsible sections.',
      },
    },
  },
  args: {
    defaultValue: ['item-1'],
    variant: 'base',
    multiple: false,
    className: 'w-md',
    children: items.map(item => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>
          <AccordionContentText>{item.content}</AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    )),
  },
})

export const Base = meta.story({})

export const Surface = meta.story({
  args: {
    variant: 'surface',
  },
  decorators: SurfaceDecorator,
})

export const Multiple = meta.story({
  args: { multiple: true },
})

export const Disabled = meta.story({
  args: {
    children: items.map((item, index) => (
      <AccordionItem key={item.value} value={item.value} disabled={index === 1}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>
          <AccordionContentText>{item.content}</AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    )),
  },
})
