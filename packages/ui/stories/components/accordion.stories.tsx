import preview from '../../.storybook/preview'
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionItem,
  AccordionTrigger,
} from '../../src/components/ui/accordion'
import { SurfaceDecorator } from '../shared/decorators'

const items = [
  {
    value: 'item-1',
    title: 'What is a design system?',
    content: [
      'A design system is a collection of reusable components, guidelines, and best practices that help teams create consistent and high-quality user interfaces.',
    ],
  },
  {
    value: 'item-2',
    title: 'Why is it important?',
    content: [
      'It ensures consistency across all products, speeds up the development process, and improves the user experience by providing a familiar and intuitive interface.',
    ],
  },
  {
    value: 'item-3',
    title: 'Who benefits from a design system?',
    content: [
      'Everyone! It provides a common language and a shared understanding of the design principles, patterns, and components that should be used across all products.',
    ],
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

export const WithDefaultValue = meta.story({
  args: {
    defaultValue: ['item-1'],
  },
})
