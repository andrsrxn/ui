import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Link } from '../../../../src/components/ui/typography/link'
import type { IconProps } from '../../../../src/components/icons/icon'

// Mock the icons
vi.mock('../../../../src/components/icons', () => ({
  IconChevronRight: ({ className, ...props }: IconProps) => (
    <svg data-testid='icon-chevron' className={className} {...props} />
  ),
  IconDownload: ({ className, ...props }: IconProps) => (
    <svg data-testid='icon-download' className={className} {...props} />
  ),
  IconExternalLink: ({ className, ...props }: IconProps) => (
    <svg data-testid='icon-external' className={className} {...props} />
  ),
}))

describe('Link Component', () => {
  it('renders a default anchor link', () => {
    render(<Link href='https://example.com'>My Link</Link>)
    const link = screen.getByRole('link', { name: 'My Link' })
    expect(link).toBeDefined()
    expect(link.getAttribute('data-slot')).toBe('link')
    expect(link.getAttribute('href')).toBe('https://example.com')
    expect(link.className).toContain('text-link') // default variant primary -> text-link
    expect(link.className).toContain('underline')
  })

  it('adds noopener noreferrer when target is _blank', () => {
    render(
      <Link href='https://example.com' target='_blank'>
        External Link
      </Link>
    )
    const link = screen.getByRole('link', { name: 'External Link' })
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
  })

  it('renders as custom slot/child when asChild is true', () => {
    render(
      <Link asChild>
        <button type='button'>Button Link</button>
      </Link>
    )
    const button = screen.getByRole('button', { name: 'Button Link' })
    expect(button).toBeDefined()
    expect(button.getAttribute('data-slot')).toBe('link')
    expect(button.className).toContain('text-link')
  })

  it('includes appropriate icons based on props', () => {
    const { rerender } = render(
      <Link href='/doc.pdf' download='doc.pdf' includeIcon>
        Download
      </Link>
    )
    expect(screen.getByTestId('icon-download')).toBeDefined()

    rerender(
      <Link href='https://google.com' target='_blank' includeIcon>
        Google
      </Link>
    )
    expect(screen.getByTestId('icon-external')).toBeDefined()

    rerender(
      <Link href='/next-page' includeIcon>
        Next
      </Link>
    )
    expect(screen.getByTestId('icon-chevron')).toBeDefined()
  })

  it('wraps the link in a div when full is true', () => {
    const { container } = render(
      <Link href='/path' full>
        Full Link
      </Link>
    )
    // Check that there is a wrapper div with full width styles
    const wrapper = container.firstElementChild
    expect(wrapper?.className).toContain('flex')
    expect(wrapper?.className).toContain('w-full')
    expect(wrapper?.firstElementChild?.getAttribute('data-slot')).toBe('link')
  })
})
