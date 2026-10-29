import { useRef } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { MouseSafeArea } from '../../../../src/components/ui/misc/mouse-safe-area'
import { render } from '../../../../stories/utils/tests'

// Mock the useMousePosition hook
vi.mock('../../../../src/lib/hooks/use-mouse-position', () => ({
  useMousePosition: () => [100, 200],
}))

// Mock mouse utility functions to keep tests deterministic
vi.mock('../../../../src/lib/utils/mouse', () => ({
  getMouseSafeAreaPoints: () => '100,200 210,20 210,120',
}))

// A simple wrapper that provides a real ref with a mocked getBoundingClientRect
const Wrapper = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div>
      <div ref={ref} data-testid='parent' className='relative h-25 w-50' />
      <MouseSafeArea parentRef={ref} />
    </div>
  )
}

describe('MouseSafeArea Component', () => {
  beforeEach(() => {
    // Mock getBoundingClientRect for jsdom, which always returns 0s
    vi.spyOn(HTMLDivElement.prototype, 'getBoundingClientRect').mockReturnValue({
      x: 10,
      y: 20,
      width: 200,
      height: 100,
      top: 20,
      right: 210,
      bottom: 120,
      left: 10,
      toJSON: () => ({}),
    })
  })

  it('renders an SVG element with fixed positioning', () => {
    const { container } = render(<Wrapper />)
    const svg = container.querySelector('svg')
    expect(svg).toBeDefined()
    expect(svg?.classList.contains('fixed')).toBe(true)
  })

  it('renders a polygon with the points from the utility function', () => {
    const { container } = render(<Wrapper />)
    const polygon = container.querySelector('polygon')
    expect(polygon).toBeDefined()
    expect(polygon?.getAttribute('points')).toBe('100,200 210,20 210,120')
  })

  it('has zero inline style attributes for strict CSP compliance', () => {
    const { container } = render(<Wrapper />)
    const svg = container.querySelector('svg')
    const polygon = container.querySelector('polygon')
    expect(svg?.getAttribute('style')).toBeNull()
    expect(polygon?.getAttribute('style')).toBeNull()
  })

  it('has no inline styles for strict CSP', () => {
    const { container } = render(<Wrapper />)
    expect(container).toHaveNoInlineStyles()
  })
})
