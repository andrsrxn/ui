import { useMousePosition } from '../../../lib/hooks/use-mouse-position'
import { getMouseSafeAreaPoints } from '../../../lib/utils/mouse'

/**
 * Natural smooth mouse safe area that follows the mouse cursor.
 * See: https://gist.github.com/eldh/51e3825b7aa55694f2a5ffa5f7de8a6a
 *
 * @returns An SVG wrapper to cover the area between the mouse cursor and the sub-menu, to allow moving cursor to lower parts of sub-menu without the sub-menu disappearing.
 */
export const MouseSafeArea = (props: {
  parentRef: React.RefObject<HTMLDivElement | null>
}) => {
  const {
    x = 0,
    y = 0,
    height: h = 0,
    width: w = 0,
  } = props.parentRef.current?.getBoundingClientRect() || {}
  const [mouseX, mouseY] = useMousePosition()
  const positions = { x, y, h, w, mouseX, mouseY }
  const points = getMouseSafeAreaPoints(positions)

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
    >
      <polygon
        data-testid="mouse-safe-area"
        points={points}
        className="pointer-events-auto fill-transparent"
      />
    </svg>
  )
}
