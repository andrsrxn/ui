import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE4LjQ2NiA1Ljk1MWMwLS4yIDAtLjI1Ni0uMDA0LS4yOThhMS4yNSAxLjI1IDAgMCAwLTEuMTQ4LTEuMTQ4IDQuNjk0IDQuNjk0IDAgMCAwLS4yOTgtLjAwNGgtNC4yMTV2MTQuOTk4aDEuNTIzYS43NS43NSAwIDAgMSAwIDEuNUg5Ljc3OGEuNzUuNzUgMCAwIDEgMC0xLjVIMTEuM1Y0LjVINy4wODZjLS4yIDAtLjI1NyAwLS4yOTguMDA0YTEuMjUgMS4yNSAwIDAgMC0xLjE0OSAxLjE0OCA0LjY5NyA0LjY5NyAwIDAgMC0uMDA0LjI5OC43NS43NSAwIDAgMS0xLjUgMGMwLS4xNzEgMC0uMzAxLjAxLS40MTZBMi43NSAyLjc1IDAgMCAxIDYuNjcgMy4wMUM2Ljc4NCAzIDYuOTEzIDMgNy4wODYgM2g5LjkzYy4xNzEgMCAuMzAxIDAgLjQxNi4wMWEyLjc1IDIuNzUgMCAwIDEgMi41MjYgMi41MjVjLjAwOS4xMTUuMDA4LjI0NS4wMDguNDE2YS43NS43NSAwIDAgMS0xLjUgMFoiLz48L3N2Zz4=)
 */
export const IconText: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M18.466 5.951c0-.2 0-.256-.004-.298a1.25 1.25 0 0 0-1.148-1.148 4.694 4.694 0 0 0-.298-.004h-4.215v14.998h1.523a.75.75 0 0 1 0 1.5H9.778a.75.75 0 0 1 0-1.5H11.3V4.5H7.086c-.2 0-.257 0-.298.004a1.25 1.25 0 0 0-1.149 1.148 4.697 4.697 0 0 0-.004.298.75.75 0 0 1-1.5 0c0-.171 0-.301.01-.416A2.75 2.75 0 0 1 6.67 3.01C6.784 3 6.913 3 7.086 3h9.93c.171 0 .301 0 .416.01a2.75 2.75 0 0 1 2.526 2.525c.009.115.008.245.008.416a.75.75 0 0 1-1.5 0Z' />
    </svg>
  )
}
