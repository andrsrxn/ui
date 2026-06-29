import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Text } from '../../../../src/components/ui/typography/text'

describe('Text Component', () => {
  it('renders a paragraph element with correct defaults and children', () => {
    render(<Text>Paragraph Content</Text>)
    const element = screen.getByText('Paragraph Content')
    expect(element.tagName).toBe('P')
    expect(element.getAttribute('data-slot')).toBe('text')
    expect(element.className).toContain('font-body')
    expect(element.className).toContain('text-body-base') // default size base -> text-body-base
    expect(element.className).toContain('text-primary') // default variant primary -> text-primary
  })

  it('renders with custom sizes, variants, and responsive utilities', () => {
    const { rerender } = render(<Text size="sm" variant="secondary">Text</Text>)
    let element = screen.getByText('Text')
    expect(element.className).toContain('text-body-sm')
    expect(element.className).toContain('text-secondary')

    rerender(<Text size="xl" tablet="lg" laptop="base" desktop="xs" display="sm">Text</Text>)
    element = screen.getByText('Text')
    expect(element.className).toContain('text-body-xl')
    expect(element.className).toContain('tablet:text-body-lg')
    expect(element.className).toContain('laptop:text-body-base')
    expect(element.className).toContain('desktop:text-body-xs')
    expect(element.className).toContain('display:text-body-sm')
  })

  it('renders with center alignment', () => {
    render(<Text center>Centered Text</Text>)
    const element = screen.getByText('Centered Text')
    expect(element.className).toContain('text-center')
    expect(element.className).toContain('w-full')
  })

  it('applies custom className', () => {
    render(<Text className="custom-text">Content</Text>)
    const element = screen.getByText('Content')
    expect(element.className).toContain('custom-text')
  })

  it('forwards HTML props', () => {
    render(<Text id="text-id" data-custom="value">Content</Text>)
    const element = screen.getByText('Content')
    expect(element.id).toBe('text-id')
    expect(element.getAttribute('data-custom')).toBe('value')
  })
})
