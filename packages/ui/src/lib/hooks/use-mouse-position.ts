import { useEffect, useState } from 'react'
import { throttle } from '../utils/objects'

type MousePosition = [number, number]

const THROTTLE_DELAY = 200

/**
 * Hook to get the current mouse position
 *
 * @returns Mouse position as a tuple of [x, y]
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>([0, 0])

  const updateMousePosition = throttle((ev: MouseEvent) => {
    setMousePosition([ev.clientX, ev.clientY])
  }, THROTTLE_DELAY)

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      updateMousePosition.cancel()
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [updateMousePosition])

  return mousePosition
}
