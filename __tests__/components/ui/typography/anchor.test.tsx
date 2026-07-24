import { render, screen } from '../../../../stories/utils/tests'
import { describe, it, expect, vi } from 'vitest'
import { Anchor } from '../../../../src/components/ui/typography/anchor'
import type { IconProps } from '../../../../src/components/icons/icon'

// Mock the icons
vi.mock('../../../../src/components/icons', () => ({
  IconChevronEnd: ({ className, ...props }: IconProps) => (
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
    render(<Anchor href='https://example.com'>My Link</Anchor>)
    const link = screen.getByRole('link', { name: 'My Link' })
    expect(link).toBeDefined()
    expect(link.getAttribute('data-slot')).toBe('anchor')
    expect(link.getAttribute('href')).toBe('https://example.com')
    expect(link.className).toContain('text-link') // default variant primary -> text-link
    expect(link.className).toContain('underline')
  })

  it('adds noopener noreferrer when target is _blank', () => {
    render(
      <Anchor href='https://example.com' target='_blank'>
        External Link
      </Anchor>
    )
    const link = screen.getByRole('link', { name: 'External Link' })
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
  })

  it('renders as custom slot/child when passing render prop function', () => {
    render(<Anchor render={<button type='button' />}>Button Link</Anchor>)
    const button = screen.getByRole('button', { name: 'Button Link' })
    expect(button).toBeDefined()
    expect(button.getAttribute('data-slot')).toBe('anchor')
    expect(button.className).toContain('text-link')
  })

  it('includes appropriate icons based on props', () => {
    const { rerender } = render(
      <Anchor href='/doc.pdf' download='doc.pdf' includeIcon>
        Download
      </Anchor>
    )
    expect(screen.getByTestId('icon-download')).toBeDefined()

    rerender(
      <Anchor href='https://google.com' target='_blank' includeIcon>
        Google
      </Anchor>
    )
    expect(screen.getByTestId('icon-external')).toBeDefined()

    rerender(
      <Anchor href='/next-page' includeIcon>
        Next
      </Anchor>
    )
    expect(screen.getByTestId('icon-chevron')).toBeDefined()
  })

  it('wraps the link in a div when full is true', () => {
    const { container } = render(
      <Anchor href='/path' full>
        Full Link
      </Anchor>
    )

    // Check that there is a wrapper div with full width styles
    const wrapper = container.querySelector('[data-slot="anchor"]')?.parentElement
    expect(wrapper?.className).toContain('flex')
    expect(wrapper?.className).toContain('w-full')
    expect(wrapper?.firstElementChild?.getAttribute('data-slot')).toBe('anchor')
  })
})
