import { useMousePosition } from '../../../lib/hooks/use-mouse-position'
import {
  getMouseSafeAreaLeft,
  getMouseSafeAreaRight,
  getMouseSafeAreaWidth,
  getMouseSafeAreaClipPath,
} from '../../../lib/utils/mouse'

/**
 * Natural smooth mouse safe area that follows the mouse cursor.
 * See: https://gist.github.com/eldh/51e3825b7aa55694f2a5ffa5f7de8a6a
 *
 * @returns A wrapper to cover the area between the mouse cursor and the sub-menu, to allow moving cursor to lower parts of sub-menu without the sub-menu disappearing.
 */
export const MouseSafeArea = (props: { parentRef: React.RefObject<HTMLDivElement | null> }) => {
  const {
    x = 0,
    y = 0,
    height: h = 0,
    width: w = 0,
  } = props.parentRef.current?.getBoundingClientRect() || {}
  const [mouseX, mouseY] = useMousePosition()
  const positions = { x, y, h, w, mouseX, mouseY }
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        // backgroundColor: "rgba(255,0,0,0.1)", // Debug
        right: getMouseSafeAreaRight(positions),
        left: getMouseSafeAreaLeft(positions),
        height: h,
        width: getMouseSafeAreaWidth(positions),
        clipPath: getMouseSafeAreaClipPath(positions),
      }}
    />
  )
}
