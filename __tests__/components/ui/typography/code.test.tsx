import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Code } from '../../../../src/components/ui/typography/code'

describe('Code Component', () => {
  it('renders a code element with correct defaults', () => {
    render(<Code>const x = 5;</Code>)
    const element = screen.getByText('const x = 5;')
    expect(element.tagName).toBe('CODE')
    expect(element.getAttribute('data-slot')).toBe('code')
    expect(element.className).toContain('font-mono')
    expect(element.className).toContain('text-body-sm') // default size base -> text-body-sm
    expect(element.className).toContain('bg-surface') // default variant primary -> bg-surface
  })

  it('renders with custom sizes and variants', () => {
    const { rerender } = render(<Code size="lg" variant="secondary">code</Code>)
    let element = screen.getByText('code')
    expect(element.className).toContain('text-body-base') // size lg -> text-body-base
    expect(element.className).toContain('bg-surface-alt') // variant secondary -> bg-surface-alt

    rerender(<Code size="sm">code</Code>)
    element = screen.getByText('code')
    expect(element.className).toContain('text-body-xs') // size sm -> text-body-xs

    rerender(<Code size="inline">code</Code>)
    element = screen.getByText('code')
    expect(element.className).toContain('text-[0.9em]') // size inline -> text-[0.9em]
  })

  it('applies custom className', () => {
    render(<Code className="custom-code">my code</Code>)
    const element = screen.getByText('my code')
    expect(element.className).toContain('custom-code')
  })

  it('forwards HTML props', () => {
    render(<Code id="my-code-id" data-test="true">my code</Code>)
    const element = screen.getByText('my code')
    expect(element.id).toBe('my-code-id')
    expect(element.getAttribute('data-test')).toBe('true')
  })
})
