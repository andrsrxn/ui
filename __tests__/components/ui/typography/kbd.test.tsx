import { render, screen } from '../../../../stories/utils/tests'
import { describe, it, expect } from 'vitest'
import { Kbd, KbdGroup } from '../../../../src/components/ui/typography/kbd'

describe('Kbd Component', () => {
  it('renders a kbd element with default primary, base size', () => {
    render(<Kbd>Ctrl</Kbd>)
    const element = screen.getByText('Ctrl')
    expect(element.tagName).toBe('KBD')
    expect(element.getAttribute('data-slot')).toBe('kbd')
    expect(element.className).toContain('font-mono')
    expect(element.className).toContain('text-body-sm') // default size base -> text-body-sm
    expect(element.className).toContain('bg-surface') // default variant primary -> bg-surface
  })

  it('renders with custom sizes and variants', () => {
    const { rerender } = render(
      <Kbd size='sm' variant='secondary'>
        ⌘
      </Kbd>
    )
    let element = screen.getByText('⌘')
    expect(element.className).toContain('text-body-xs') // size sm -> text-body-xs
    expect(element.className).toContain('bg-surface-alt') // variant secondary -> bg-surface-alt

    rerender(
      <Kbd size='lg' variant='tertiary'>
        X
      </Kbd>
    )
    element = screen.getByText('X')
    expect(element.className).toContain('text-body-base') // size lg -> text-body-base
    expect(element.className).toContain('bg-transparent') // variant tertiary -> bg-transparent
  })

  it('applies custom className', () => {
    render(<Kbd className='custom-kbd'>Enter</Kbd>)
    const element = screen.getByText('Enter')
    expect(element.className).toContain('custom-kbd')
  })
})

describe('KbdGroup Component', () => {
  it('renders a kbd element acting as group wrapper', () => {
    render(
      <KbdGroup data-testid='kbd-grp'>
        <Kbd>Ctrl</Kbd>
        <Kbd>C</Kbd>
      </KbdGroup>
    )
    const element = screen.getByTestId('kbd-grp')
    expect(element.tagName).toBe('KBD')
    expect(element.getAttribute('data-slot')).toBe('kbd-group')
    expect(element.className).toContain('flex')
    expect(element.className).not.toContain(
      '[&>[data-slot=kbd]:not(:last-child)]:after:content-["+"]'
    )
  })

  it('applies separator class when includeSeparator is true', () => {
    render(
      <KbdGroup includeSeparator data-testid='kbd-grp-sep'>
        <Kbd>Ctrl</Kbd>
        <Kbd>C</Kbd>
      </KbdGroup>
    )
    const element = screen.getByTestId('kbd-grp-sep')
    expect(element.className).toContain('[&>[data-slot=kbd]:not(:last-child)]:after:content-["+"]')
  })
})
