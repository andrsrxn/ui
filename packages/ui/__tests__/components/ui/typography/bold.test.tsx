import { describe, expect, it } from 'vitest'
import { Bold } from '../../../../src/components/ui/typography/bold'
import { render, screen } from '../../../../stories/utils/tests'

describe('Bold Component', () => {
  it('renders a strong element with correct text and slot attribute', () => {
    render(<Bold>Important Text</Bold>)
    const element = screen.getByText('Important Text')
    expect(element.tagName).toBe('STRONG')
    expect(element.getAttribute('data-slot')).toBe('bold')
    expect(element.className).toContain('font-semibold')
  })

  it('applies custom className', () => {
    render(<Bold className='my-bold-class'>Text</Bold>)
    const element = screen.getByText('Text')
    expect(element.className).toContain('my-bold-class')
    expect(element.className).toContain('font-semibold')
  })

  it('forwards additional HTML attributes', () => {
    render(
      <Bold id='bold-item' data-custom='value'>
        Text
      </Bold>
    )
    const element = screen.getByText('Text')
    expect(element.id).toBe('bold-item')
    expect(element.getAttribute('data-custom')).toBe('value')
  })
  it('has no inline styles for strict CSP', () => {
    const { container } = render(<Bold>Text</Bold>)
    expect(container).toHaveNoInlineStyles()
  })
})
