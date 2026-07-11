import { render, screen } from '../../../stories/utils/tests'
import { describe, it, expect, vi } from 'vitest'
import { Button } from '../../../src/components/ui/button'

// Mock spinner and config used internally
vi.mock('../../../src/components/ui/spinner', () => ({
  Spinner: ({ decorative, ...props }: { decorative?: boolean }) => (
    <svg data-testid='spinner' aria-hidden={decorative} {...props} />
  ),
}))

vi.mock('../../../src/lib/utils/config', () => ({
  getUILabels: () => ({ state: { loading: 'Loading…' } }),
}))

describe('Button Component', () => {
  it('renders a button element with default primary variant and base size', () => {
    render(<Button>Click Me</Button>)
    const button = screen.getByRole('button', { name: 'Click Me' })
    expect(button).toBeDefined()
    expect(button.tagName).toBe('BUTTON')
    expect(button.getAttribute('type')).toBe('button')
    expect(button.className).toContain('bg-brand') // primary variant
    expect(button.className).toContain('h-9') // base size
  })

  it('renders with correct size classes for all sizes', () => {
    const { rerender } = render(<Button size='xs'>XS</Button>)
    let button = screen.getByRole('button', { name: 'XS' })
    expect(button.className).toContain('h-7')

    rerender(<Button size='sm'>SM</Button>)
    button = screen.getByRole('button', { name: 'SM' })
    expect(button.className).toContain('h-8')

    rerender(<Button size='lg'>LG</Button>)
    button = screen.getByRole('button', { name: 'LG' })
    expect(button.className).toContain('h-10')
  })

  it('is disabled when disabled prop is passed', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button', { name: 'Disabled' })
    expect(button.hasAttribute('disabled')).toBe(true)
  })

  it('shows spinner and is disabled when loading is true', () => {
    render(<Button loading>Submit</Button>)
    expect(screen.getByTestId('spinner')).toBeDefined()
    const button = screen.getByRole('button')
    expect(button.hasAttribute('disabled')).toBe(true)
    expect(button.getAttribute('aria-busy')).toBe('true')
  })

  it('renders as a child element when asChild is true', () => {
    render(
      <Button asChild>
        <a href='/home'>Home</a>
      </Button>
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toBeDefined()
    expect(link.tagName).toBe('A')
    expect(link.className).toContain('bg-brand') // primary variant applied
  })

  it('applies custom className', () => {
    render(<Button className='custom-btn'>Custom</Button>)
    const button = screen.getByRole('button', { name: 'Custom' })
    expect(button.className).toContain('custom-btn')
  })

  it('forwards HTML attributes', () => {
    render(
      <Button id='my-btn' data-custom='value'>
        Attrs
      </Button>
    )
    const button = screen.getByRole('button', { name: 'Attrs' })
    expect(button.id).toBe('my-btn')
    expect(button.getAttribute('data-custom')).toBe('value')
  })
})
