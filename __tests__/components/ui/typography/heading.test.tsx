import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Heading } from '../../../../src/components/ui/typography/heading'
import type { IconProps } from '../../../../src/components/icons/icon'

// Mock the IconLink from icons
vi.mock('../../../../src/components/icons', () => ({
  IconLink: ({ className, ...props }: IconProps) => (
    <svg data-testid='icon-link' className={className} {...props} />
  ),
}))

describe('Heading Component', () => {
  it('renders h1 by default', () => {
    render(<Heading>Heading Text</Heading>)
    const element = screen.getByRole('heading', { level: 1 })
    expect(element.tagName).toBe('H1')
    expect(element.getAttribute('data-slot')).toBe('heading')
    expect(element.id).toBe('heading-text') // slugified text
    expect(element.className).toContain('font-heading')
  })

  it('renders correct header tag based on level prop', () => {
    const { rerender } = render(<Heading level={2}>H2 Heading</Heading>)
    let element = screen.getByRole('heading', { level: 2 })
    expect(element.tagName).toBe('H2')

    rerender(<Heading level={3}>H3 Heading</Heading>)
    element = screen.getByRole('heading', { level: 3 })
    expect(element.tagName).toBe('H3')

    rerender(<Heading level={6}>H6 Heading</Heading>)
    element = screen.getByRole('heading', { level: 6 })
    expect(element.tagName).toBe('H6')
  })

  it('handles slugify id generation correctly', () => {
    render(<Heading>Hello World Example!</Heading>)
    const element = screen.getByRole('heading')
    expect(element.id).toBe('hello-world-example')
  })

  it('uses custom id if provided instead of slugified id', () => {
    render(<Heading id='custom-id'>My Heading</Heading>)
    const element = screen.getByRole('heading')
    expect(element.id).toBe('custom-id')
  })

  it('renders anchor link only if includeAnchor is true and id is provided', () => {
    const { rerender } = render(
      <Heading id='test-anchor' includeAnchor>
        Anchor Heading
      </Heading>
    )
    const anchor = screen.getByRole('link')
    expect(anchor).toBeDefined()
    expect(anchor.getAttribute('href')).toBe('#test-anchor')
    expect(anchor.getAttribute('data-slot')).toBe('heading-permanent-link')

    // Check that without explicit id but with includeAnchor, the anchor is NOT rendered (since it checks id !== undefined)
    rerender(<Heading includeAnchor>Anchor Heading No ID</Heading>)
    const anchorNoId = screen.queryByRole('link')
    expect(anchorNoId).toBeNull()
  })

  it('applies custom className', () => {
    render(<Heading className='custom-heading-class'>Heading</Heading>)
    const element = screen.getByRole('heading')
    expect(element.className).toContain('custom-heading-class')
  })
})
