import { getUIConfig } from './config'

export interface MousePositions {
  /* Sub-menu x */
  x: number
  /* Sub-menu y */
  y: number
  /* Sub-menu height */
  h: number
  /* Sub-menu width */
  w: number
  /* Mouse x */
  mouseX: number
  /* Mouse y */
  mouseY: number
}

const PADDING_INSET = getUIConfig().mouseSafeArea.paddingInset

/** Get left position for mouse safe area */
export const getMouseSafeAreaLeft = ({ x, mouseX }: MousePositions) =>
  mouseX > x ? undefined : `${-Math.max(x - mouseX, PADDING_INSET)}px`

/** Get right position for mouse safe area */
export const getMouseSafeAreaRight = ({ x, w, mouseX }: MousePositions) =>
  mouseX > x ? `${-Math.max(mouseX - (x + w), PADDING_INSET)}px` : undefined

/** Get width for mouse safe area */
export const getMouseSafeAreaWidth = ({ x, w, mouseX }: MousePositions) =>
  mouseX > x
    ? `${Math.max(mouseX - (x + w), PADDING_INSET)}px`
    : `${Math.max(x - mouseX, PADDING_INSET)}px`

/** Get clip path for mouse safe area */
export const getMouseSafeAreaClipPath = ({ x, y, h, mouseX, mouseY }: MousePositions) =>
  mouseX > x
    ? `polygon(0% 0%, 0% 100%, 100% ${
        // biome-ignore lint/style/noMagicNumbers: 100 for max percentage
        (100 * (mouseY - y)) / h
      }%)`
    : `polygon(100% 0%, 0% ${
        // biome-ignore lint/style/noMagicNumbers: 100 for max percentage
        (100 * (mouseY - y)) / h
      }%, 100% 100%)`

/** Get SVG polygon points for mouse safe area */
export const getMouseSafeAreaPoints = ({
  x,
  y,
  h,
  w,
  mouseX,
  mouseY,
}: MousePositions) => {
  const isRight = mouseX > x
  const targetX = isRight ? x + w : x
  return `${mouseX},${mouseY} ${targetX},${y} ${targetX},${y + h}`
}
