import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Inline } from '../../../../src/components/ui/typography/inline'

describe('Inline Component', () => {
  it('renders a span element with default attributes and children', () => {
    render(<Inline>Inline Content</Inline>)
    const element = screen.getByText('Inline Content')
    expect(element.tagName).toBe('SPAN')
    expect(element.getAttribute('data-slot')).toBe('inline')
    expect(element.className).toContain('font-body')
    expect(element.className).toContain('text-body-inherit') // default size inherit -> text-body-inherit
    expect(element.className).toContain('text-inherit') // default variant inherit -> text-inherit
  })

  it('renders with custom sizes, variants, and responsive utilities', () => {
    const { rerender } = render(<Inline size="sm" variant="brand">Text</Inline>)
    let element = screen.getByText('Text')
    expect(element.className).toContain('text-body-sm')
    expect(element.className).toContain('text-brand')

    rerender(<Inline size="lg" tablet="xl" laptop="xs" desktop="sm" display="base">Text</Inline>)
    element = screen.getByText('Text')
    expect(element.className).toContain('text-body-lg')
    expect(element.className).toContain('tablet:text-body-xl')
    expect(element.className).toContain('laptop:text-body-xs')
    expect(element.className).toContain('desktop:text-body-sm')
    expect(element.className).toContain('display:text-body-base')
  })

  it('renders with center aligned style', () => {
    render(<Inline center>Centered Inline</Inline>)
    const element = screen.getByText('Centered Inline')
    expect(element.className).toContain('text-center')
    expect(element.className).toContain('w-full')
    expect(element.className).toContain('inline-block')
  })

  it('applies custom className', () => {
    render(<Inline className="my-inline-class">Content</Inline>)
    const element = screen.getByText('Content')
    expect(element.className).toContain('my-inline-class')
  })

  it('forwards HTML props', () => {
    render(<Inline id="inline-id" data-custom="value">Content</Inline>)
    const element = screen.getByText('Content')
    expect(element.id).toBe('inline-id')
    expect(element.getAttribute('data-custom')).toBe('value')
  })
})
