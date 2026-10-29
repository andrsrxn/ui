import { describe, expect, it } from 'vitest'
import {
  Blockquote,
  BlockquoteFooter,
  BlockquoteText,
} from '../../../../src/components/ui/typography/blockquote'
import { render, screen } from '../../../../stories/utils/tests'

describe('Blockquote Component', () => {
  it('renders a blockquote element with correct default size and slot attribute', () => {
    render(
      <Blockquote>
        <BlockquoteText>This is a quote</BlockquoteText>
      </Blockquote>
    )
    const blockquote = screen.getByRole('blockquote')
    expect(blockquote).toBeDefined()
    expect(blockquote.getAttribute('data-slot')).toBe('blockquote')
    expect(blockquote.className).toContain('relative')

    const textElement = blockquote.querySelector('[data-slot="blockquote-text"]')
    expect(textElement).toBeDefined()
    expect(textElement?.className).toContain('text-body-lg') // default size is lg -> text-body-lg
  })

  it('renders with custom sizes and responsiveness', () => {
    render(
      <Blockquote>
        <BlockquoteText size='sm' tablet='lg'>
          Responsive Quote
        </BlockquoteText>
      </Blockquote>
    )
    const textElement = screen.getByText('Responsive Quote')
    expect(textElement.className).toContain('text-body-sm')
    expect(textElement.className).toContain('tablet:text-body-lg')
  })

  it('applies custom className to blockquote element', () => {
    render(
      <Blockquote className='custom-quote-class'>
        <BlockquoteText>Custom Class Quote</BlockquoteText>
      </Blockquote>
    )
    const blockquote = document.querySelector('[data-slot="blockquote"]')
    expect(blockquote?.className).toContain('custom-quote-class')
  })

  it('forwards additional HTML props to blockquote element', () => {
    render(
      <Blockquote id='quote-1' data-testid='my-quote'>
        <BlockquoteText>Quote with Attributes</BlockquoteText>
      </Blockquote>
    )
    const blockquote = document.querySelector('[data-testid="my-quote"]')
    expect(blockquote?.id).toBe('quote-1')
  })
  it('has no inline styles for strict CSP', () => {
    const { container } = render(
      <Blockquote>
        <BlockquoteText>This is a quote</BlockquoteText>
      </Blockquote>
    )
    expect(container).toHaveNoInlineStyles()
  })
})

describe('BlockquoteFooter Component', () => {
  it('renders a footer element with secondary text', () => {
    render(<BlockquoteFooter>John Doe</BlockquoteFooter>)
    const footer = screen.getByRole('contentinfo') // footer is contentinfo by default
    expect(footer).toBeDefined()
    expect(footer.getAttribute('data-slot')).toBe('blockquote-cite')
    expect(footer.textContent).toBe('— John Doe')
    expect(footer.className).toContain('text-secondary')
  })

  it('applies custom className to footer element', () => {
    render(<BlockquoteFooter className='custom-footer'>Jane Doe</BlockquoteFooter>)
    const footer = document.querySelector('[data-slot="blockquote-cite"]')
    expect(footer?.className).toContain('custom-footer')
  })
})
