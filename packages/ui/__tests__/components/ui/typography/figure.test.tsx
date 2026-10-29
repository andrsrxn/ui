import type { IconProps } from '@andrsrxn/icons/types'
import { describe, expect, it, vi } from 'vitest'
import { Figure, FigureCaption } from '../../../../src/components/ui/typography/figure'
import { render, screen } from '../../../../stories/utils/tests'

// Mock the IconInfo to verify it renders without dependencies breaking
vi.mock('@andrsrxn/icons', () => ({
  IconInfo: ({ className, ...props }: IconProps) => (
    <svg data-testid='icon-ui-info' className={className} {...props} />
  ),
}))

describe('Figure Component', () => {
  it('renders a figure element with default properties', () => {
    render(<Figure>Content</Figure>)
    const element = screen.getByRole('figure')
    expect(element.tagName).toBe('FIGURE')
    expect(element.getAttribute('data-slot')).toBe('figure')
    expect(element.className).toContain('flex')
    expect(element.className).not.toContain('items-center')
  })

  it('applies items-center when center prop is true', () => {
    render(<Figure center>Content</Figure>)
    const element = screen.getByRole('figure')
    expect(element.className).toContain('items-center')
    expect(element.className).toContain('w-fit')
  })

  it('applies custom className', () => {
    render(<Figure className='custom-figure'>Content</Figure>)
    const element = screen.getByRole('figure')
    expect(element.className).toContain('custom-figure')
  })
  it('has no inline styles for strict CSP', () => {
    const { container } = render(<Figure>Content</Figure>)
    expect(container).toHaveNoInlineStyles()
  })
})

describe('FigureCaption Component', () => {
  it('renders figcaption with info icon and children text', () => {
    render(<FigureCaption>My Caption</FigureCaption>)
    const element = screen.getByText('My Caption')
    expect(element).toBeDefined()
    expect(element.parentElement?.getAttribute('data-slot')).toBe('figure-caption')

    // Check info icon
    const icon = screen.getByTestId('icon-ui-info')
    expect(icon).toBeDefined()

    // Check text
    const textElement = screen.getByText('My Caption')
    expect(textElement).toBeDefined()
  })

  it('applies custom className to figcaption', () => {
    render(<FigureCaption className='custom-caption'>My Caption</FigureCaption>)
    const element = screen.getByText('My Caption')
    expect(element.parentElement?.className).toContain('custom-caption')
  })
  it('has no inline styles for strict CSP', () => {
    const { container } = render(<FigureCaption>My Caption</FigureCaption>)
    expect(container).toHaveNoInlineStyles()
  })
})
