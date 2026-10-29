import { describe, expect, it } from 'vitest'
import { Label } from '../../../../src/components/ui/typography/label'
import { render, screen } from '../../../../stories/utils/tests'

describe('Label Component', () => {
  it('renders a span element with correct defaults and children', () => {
    render(<Label>Label Content</Label>)
    const element = screen.getByText('Label Content')
    expect(element.tagName).toBe('SPAN')
    expect(element.getAttribute('data-slot')).toBe('label')
    expect(element.className).toContain('font-label')
    expect(element.className).toContain('text-label-base') // default size base -> text-label-base
    expect(element.className).toContain('text-primary') // default variant primary -> text-primary
  })

  it('renders with custom sizes, variants, and responsive utilities', () => {
    const { rerender } = render(
      <Label size='sm' variant='secondary'>
        Text
      </Label>
    )
    let element = screen.getByText('Text')
    expect(element.className).toContain('text-label-sm')
    expect(element.className).toContain('text-secondary')

    rerender(
      <Label size='2xl' tablet='3xl' laptop='4xl' desktop='xs' display='lg'>
        Text
      </Label>
    )
    element = screen.getByText('Text')
    expect(element.className).toContain('text-label-2xl')
    expect(element.className).toContain('tablet:text-label-3xl')
    expect(element.className).toContain('laptop:text-label-4xl')
    expect(element.className).toContain('desktop:text-label-xs')
    expect(element.className).toContain('display:text-label-lg')
  })

  it('renders with center alignment', () => {
    render(<Label center>Centered Label</Label>)
    const element = screen.getByText('Centered Label')
    expect(element.className).toContain('text-center')
    expect(element.className).toContain('w-full')
  })

  it('applies custom className', () => {
    render(<Label className='custom-label'>Content</Label>)
    const element = screen.getByText('Content')
    expect(element.className).toContain('custom-label')
  })

  it('forwards HTML props', () => {
    render(
      <Label id='label-id' data-custom='value'>
        Content
      </Label>
    )
    const element = screen.getByText('Content')
    expect(element.id).toBe('label-id')
    expect(element.getAttribute('data-custom')).toBe('value')
  })

  it('has no inline styles for strict CSP', () => {
    const { container } = render(<Label>Label Text</Label>)
    expect(container).toHaveNoInlineStyles()
  })
})
