import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi42NyAzLjAxYTIuNzQ0IDIuNzQ0IDAgMCAwLTEuNzY2LjgzNGwtLjM5LS4zOWEuNzUuNzUgMCAxIDAtMS4wNiAxLjA2bC43MjkuNzNhMi43NyAyLjc3IDAgMCAwLS4wMzkuMjkxIDUuMzc4IDUuMzc4IDAgMCAwLS4wMDkuNDAzdi4wMTNhLjc1Ljc1IDAgMCAwIDEuMjgzLjUyOGw1Ljg4MyA1Ljg4M1YxOS41SDkuNzc4YS43NS43NSAwIDAgMCAwIDEuNWg0LjU0NmEuNzUuNzUgMCAwIDAgMC0xLjVIMTIuOHYtNS42MzZsNi42ODQgNi42ODRhLjc1MS43NTEgMCAwIDAgMS4wNjItMS4wNjJMMTIuOCAxMS43NFY0LjUwMWg0LjIxNWMuMiAwIC4yNTcgMCAuMjk4LjAwNGExLjI1IDEuMjUgMCAwIDEgMS4xNDggMS4xNDhjLjAwNC4wNDIuMDA0LjA5OS4wMDQuMjk4YS43NS43NSAwIDAgMCAxLjUgMHYtLjAxM2MwLS4xNjUgMC0uMjktLjAwOC0uNDAzYTIuNzUgMi43NSAwIDAgMC0yLjUyNi0yLjUyNUE1LjM4MSA1LjM4MSAwIDAgMCAxNy4wMyAzSDcuMDcyYy0uMTY1IDAtLjI5IDAtLjQwMy4wMDlabS0uNzA1IDEuODk1Yy4yMDgtLjIyNi40OTgtLjM3NS44MjMtLjQuMDQxLS4wMDMuMDk4LS4wMDQuMjk4LS4wMDRIMTEuM3Y1Ljc0TDUuOTY1IDQuOTA0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)
 */
export const IconTextOff: Icon = ({ className, ...props }) => {
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
        d='M6.67 3.01a2.744 2.744 0 0 0-1.766.834l-.39-.39a.75.75 0 1 0-1.06 1.06l.729.73a2.77 2.77 0 0 0-.039.291 5.378 5.378 0 0 0-.009.403v.013a.75.75 0 0 0 1.283.528l5.883 5.883V19.5H9.778a.75.75 0 0 0 0 1.5h4.546a.75.75 0 0 0 0-1.5H12.8v-5.636l6.684 6.684a.751.751 0 0 0 1.062-1.062L12.8 11.74V4.501h4.215c.2 0 .257 0 .298.004a1.25 1.25 0 0 1 1.148 1.148c.004.042.004.099.004.298a.75.75 0 0 0 1.5 0v-.013c0-.165 0-.29-.008-.403a2.75 2.75 0 0 0-2.526-2.525A5.381 5.381 0 0 0 17.03 3H7.072c-.165 0-.29 0-.403.009Zm-.705 1.895c.208-.226.498-.375.823-.4.041-.003.098-.004.298-.004H11.3v5.74L5.965 4.904Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
