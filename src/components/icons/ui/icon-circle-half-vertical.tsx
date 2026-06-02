import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMy41MmE4LjQ4IDguNDggMCAxIDAgMCAxNi45NlYzLjUyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xOS43MyAxMmE3LjczMSA3LjczMSAwIDAgMC02Ljk4LTcuNjk0djE1LjM4N0E3LjczIDcuNzMgMCAwIDAgMTkuNzMgMTJaTTQuMjcgMTJhNy43MyA3LjczIDAgMCAwIDYuOTggNy42OTNWNC4zMDZBNy43MzEgNy43MzEgMCAwIDAgNC4yNyAxMlptMTYuOTYgMEE5LjIzIDkuMjMgMCAwIDEgMTIgMjEuMjNhOS4yMyA5LjIzIDAgMSAxIDAtMTguNDZBOS4yMyA5LjIzIDAgMCAxIDIxLjIzIDEyWiIvPjwvc3ZnPg==)
 */
export const IconCircleHalfVertical: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fillRule='evenodd'
        d='M12 3.52a8.48 8.48 0 1 0 0 16.96V3.52Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path d='M19.73 12a7.731 7.731 0 0 0-6.98-7.694v15.387A7.73 7.73 0 0 0 19.73 12ZM4.27 12a7.73 7.73 0 0 0 6.98 7.693V4.306A7.731 7.731 0 0 0 4.27 12Zm16.96 0A9.23 9.23 0 0 1 12 21.23a9.23 9.23 0 1 1 0-18.46A9.23 9.23 0 0 1 21.23 12Z' />
    </svg>
  )
}
