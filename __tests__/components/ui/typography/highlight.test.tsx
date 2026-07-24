import { render, screen } from '../../../../stories/utils/tests'
import { describe, it, expect } from 'vitest'
import { Highlight } from '../../../../src/components/ui/typography/highlight'

describe('Highlight Component', () => {
  it('renders a mark element with children and correct slot attribute', () => {
    render(<Highlight>Highlighted Text</Highlight>)
    const element = screen.getByText('Highlighted Text')
    expect(element.tagName).toBe('MARK')
    expect(element.getAttribute('data-slot')).toBe('highlight')
    expect(element.className).toContain('bg-selected-subtle')
  })

  it('applies custom className', () => {
    render(<Highlight className='my-highlight-class'>Text</Highlight>)
    const element = screen.getByText('Text')
    expect(element.className).toContain('my-highlight-class')
    expect(element.className).toContain('bg-selected-subtle')
  })

  it('forwards additional HTML attributes', () => {
    render(
      <Highlight id='highlight-item' data-custom='xyz'>
        Text
      </Highlight>
    )
    const element = screen.getByText('Text')
    expect(element.id).toBe('highlight-item')
    expect(element.getAttribute('data-custom')).toBe('xyz')
  })
})
