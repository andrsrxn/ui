import { render, screen } from '../../../stories/utils/tests'
import { describe, it, expect, vi } from 'vitest'
import { Spinner } from '../../../src/components/ui/spinner'

// // Mock the IconSpinner used internally
// vi.mock('../../../src/components/icons', () => ({
//   IconSpinner: ({ className, ...props }: IconProps) => (
//     <svg data-testid='icon-spinner' className={className} {...props} />
//   ),
// }))

// Mock getUILabels config
vi.mock('../../../src/lib/utils/config', () => ({
  getUILabels: () => ({ state: { loading: 'Loading…' } }),
}))

describe('Spinner Component', () => {
  it('renders a status span with aria-label when not decorative', () => {
    render(<Spinner />)
    const status = screen.getByRole('status')
    expect(status).toBeDefined()
    expect(status.getAttribute('data-slot')).toBe('spinner')
    expect(status.getAttribute('aria-label')).toBe('Loading…')
    // The icon inside should be aria-hidden
    const icon = screen.getByTestId('icon-spinner')
    expect(icon.getAttribute('aria-hidden')).toBe('true')
  })

  it('renders a plain icon when decorative is true (no status wrapper)', () => {
    render(<Spinner decorative />)
    // No status role when decorative
    expect(screen.queryByRole('status')).toBeNull()
    const icon = screen.getByTestId('icon-spinner')
    expect(icon).toBeDefined()
    expect(icon.getAttribute('data-slot')).toBe('spinner')
    expect(icon.getAttribute('aria-hidden')).toBe('true')
  })

  it('applies primary variant color class by default', () => {
    render(<Spinner decorative />)
    const icon = screen.getByTestId('icon-spinner')
    expect(icon.className).toContain('text-brand') // primary -> text-brand
  })

  it('applies animate-spin class for the spinning animation', () => {
    render(<Spinner decorative />)
    const icon = screen.getByTestId('icon-spinner')
    expect(icon.className).toContain('animate-spin')
  })

  it('applies custom className', () => {
    render(<Spinner decorative className='custom-spinner' />)
    const icon = screen.getByTestId('icon-spinner')
    expect(icon.className).toContain('custom-spinner')
  })

  it('forwards additional HTML attributes', () => {
    render(<Spinner id='spinner-item' data-custom='value' />)
    const element = screen.getByTestId('icon-spinner')
    expect(element.id).toBe('spinner-item')
    expect(element.getAttribute('data-custom')).toBe('value')
  })
})
