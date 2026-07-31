import { render, screen } from '../../../stories/utils/tests'
import { describe, it, expect } from 'vitest'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionContentText,
} from '../../../src/components/ui/accordion'
// import type { IconProps } from '../../../src/components/icons/icon'

// // Mock the icons used inside AccordionTrigger
// vi.mock('../../../src/components/icons', () => ({
//   IconPlus: ({ className, ...props }: IconProps) => (
//     <svg data-testid='icon-plus' className={className} {...props} />
//   ),
// }))

describe('Accordion Component', () => {
  it('renders with data-slot accordion and default base variant classes', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const accordion = container.querySelector('[data-slot="accordion"]')
    expect(accordion).toBeDefined()
    expect(accordion?.className).toContain('[&_h3>button]:bg-base')
  })

  it('renders with surface variant classes when variant is surface', () => {
    const { container } = render(
      <Accordion variant='surface'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const accordion = container.querySelector('[data-slot="accordion"]')
    expect(accordion?.className).toContain('[&_h3>button]:bg-surface')
    expect(accordion?.className).not.toContain('[&_h3>button]:bg-base')
  })

  it('applies custom className to Accordion', () => {
    const { container } = render(
      <Accordion className='custom-accordion'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const accordion = container.querySelector('[data-slot="accordion"]')
    expect(accordion?.className).toContain('custom-accordion')
  })

  it('forwards HTML attributes', () => {
    const { container } = render(
      <Accordion id='my-accordion' data-custom='value'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const accordion = container.querySelector('[data-slot="accordion"]')
    expect(accordion?.id).toBe('my-accordion')
    expect(accordion?.getAttribute('data-custom')).toBe('value')
  })
})

describe('AccordionItem Component', () => {
  it('renders with data-slot accordion-item and border-b class', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem value='item-1'>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const item = container.querySelector('[data-slot="accordion-item"]')
    expect(item).toBeDefined()
    expect(item?.className).toContain('border-b')
  })

  it('applies custom className to AccordionItem', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem value='item-1' className='custom-item'>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const item = container.querySelector('[data-slot="accordion-item"]')
    expect(item?.className).toContain('custom-item')
  })
})

describe('AccordionTrigger Component', () => {
  it('renders a button with data-slot accordion-trigger', () => {
    render(
      <Accordion>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Click Me</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    )
    const trigger = screen.getByRole('button', { name: /click me/iu })
    expect(trigger).toBeDefined()
    expect(trigger.getAttribute('data-slot')).toBe('accordion-trigger')
  })

  it('renders the IconPlus icon inside the trigger', () => {
    render(
      <Accordion>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Trigger With Icon</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByTestId('icon-plus')).toBeDefined()
  })

  it('applies custom className to trigger', () => {
    render(
      <Accordion>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='custom-trigger'>Trigger</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    )
    const trigger = screen.getByRole('button', { name: /trigger/iu })
    expect(trigger.className).toContain('custom-trigger')
  })
})

describe('AccordionContent Component', () => {
  it('renders with data-slot accordion-content', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem value='item-1'>
          <AccordionContent>Panel Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const content = container.querySelector('[data-slot="accordion-content"]')
    expect(content).toBeDefined()
  })

  it('does not renders content panel without trigger action', () => {
    render(
      <Accordion>
        <AccordionItem value='item-1'>
          <AccordionContent>Panel Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.queryByText('Panel Content')).toBeNull()
  })
})

describe('AccordionContentText Component', () => {
  it('renders with data-slot accordion-content-text and secondary variant', () => {
    render(<AccordionContentText>Description text</AccordionContentText>)
    const element = screen.getByText('Description text')
    expect(element.getAttribute('data-slot')).toBe('accordion-content-text')
    expect(element.className).toContain('text-secondary')
  })

  it('applies custom className', () => {
    render(<AccordionContentText className='custom-text'>Content</AccordionContentText>)
    const element = screen.getByText('Content')
    expect(element.className).toContain('custom-text')
  })
})
