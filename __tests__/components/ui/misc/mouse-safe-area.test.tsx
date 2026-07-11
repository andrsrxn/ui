import { render } from '../../../../stories/utils/tests'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MouseSafeArea } from '../../../../src/components/ui/misc/mouse-safe-area'
import { useRef } from 'react'

// Mock the useMousePosition hook
vi.mock('../../../../src/lib/hooks/use-mouse-position', () => ({
  useMousePosition: () => [100, 200],
}))

// Mock mouse utility functions to keep tests deterministic
vi.mock('../../../../src/lib/utils/mouse', () => ({
  getMouseSafeAreaLeft: () => 0,
  getMouseSafeAreaRight: () => 'auto',
  getMouseSafeAreaWidth: () => 100,
  getMouseSafeAreaClipPath: () => 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
}))

// A simple wrapper that provides a real ref with a mocked getBoundingClientRect
const Wrapper = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div>
      <div
        ref={ref}
        data-testid='parent'
        style={{ position: 'relative', width: 200, height: 100 }}
      />
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

  it('renders a div with position absolute', () => {
    const { container } = render(<Wrapper />)
    // The MouseSafeArea renders an absolutely-positioned div
    const divs = container.querySelectorAll('div')
    const safeArea = Array.from(divs).find(div => div.style.position === 'absolute')
    expect(safeArea).toBeDefined()
  })

  it('applies the values returned by the mouse utility functions to inline styles', () => {
    const { container } = render(<Wrapper />)
    const divs = container.querySelectorAll('div')
    const safeArea = Array.from(divs).find(div => div.style.position === 'absolute')
    expect(safeArea?.style.left).toBe('0px')
    expect(safeArea?.style.width).toBe('100px')
    expect(safeArea?.style.clipPath).toBe('polygon(0 0, 100% 0, 100% 100%, 0 100%)')
  })

  it('has top style of 0', () => {
    const { container } = render(<Wrapper />)
    const divs = container.querySelectorAll('div')
    const safeArea = Array.from(divs).find(div => div.style.position === 'absolute')
    expect(safeArea?.style.top).toBe('0px')
  })
})
