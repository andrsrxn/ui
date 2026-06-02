import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41MiAxMmE4LjQ4IDguNDggMCAwIDAgMTYuOTYgMEgzLjUyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xMiA0LjI3YTcuNzMxIDcuNzMxIDAgMCAwLTcuNjk0IDYuOThoMTUuMzg3QTcuNzMgNy43MyAwIDAgMCAxMiA0LjI3Wm0wIDE1LjQ2YTcuNzMgNy43MyAwIDAgMCA3LjY5My02Ljk4SDQuMzA2QTcuNzMxIDcuNzMxIDAgMCAwIDEyIDE5LjczWm0wLTE2Ljk2YTkuMjMgOS4yMyAwIDEgMSAwIDE4LjQ2IDkuMjMgOS4yMyAwIDAgMSAwLTE4LjQ2WiIvPjwvc3ZnPg==)
 */
export const IconCircleHalfHorizontal: Icon = ({ className, ...props }) => {
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
        d='M3.52 12a8.48 8.48 0 0 0 16.96 0H3.52Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path d='M12 4.27a7.731 7.731 0 0 0-7.694 6.98h15.387A7.73 7.73 0 0 0 12 4.27Zm0 15.46a7.73 7.73 0 0 0 7.693-6.98H4.306A7.731 7.731 0 0 0 12 19.73Zm0-16.96a9.23 9.23 0 1 1 0 18.46 9.23 9.23 0 0 1 0-18.46Z' />
    </svg>
  )
}
