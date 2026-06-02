import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIxLjAxMyA4LjkyOGMwIDMuMTgyLTEuNTM0IDUuMjk3LTMuMzQzIDYuOTQ4LS43OTQuNzI1LTEuNjU5IDEuMzc2LTIuNDY3IDEuOTg0bC0uMjk4LjIyNWMtLjkwNy42ODUtMS43MiAxLjMxOS0yLjM1OSAxLjk5OGEuNzUyLjc1MiAwIDAgMS0xLjA5MiAwYy0uNjQtLjY4LTEuNDUyLTEuMzEzLTIuMzU5LTEuOTk4LS4wOTgtLjA3NC0uMTk3LS4xNS0uMjk4LS4yMjUtLjgwOC0uNjA4LTEuNjczLTEuMjYtMi40NjctMS45ODQtMS44MS0xLjY1LTMuMzQzLTMuNzY1LTMuMzQzLTYuOTQ4IDAtMS4xMTguNDUyLTIuMzY1IDEuMjY2LTMuMzM4LjgyNy0uOTg3IDIuMDU5LTEuNzMgMy42MTctMS43MyAxLjI0OCAwIDIuMzA3LjUxIDMuMTAyIDEuMTAzLjQuMjk5Ljc0NS42MyAxLjAyOC45NDdhNy4wMDQgNy4wMDQgMCAwIDEgMS4wMy0uOTQ3Yy43OTUtLjU5NCAxLjg1NC0xLjEwMyAzLjEwMi0xLjEwMyAxLjU1NyAwIDIuNzkuNzQyIDMuNjE2IDEuNzI5LjgxNC45NzMgMS4yNjYgMi4yMiAxLjI2NiAzLjMzOFoiLz48L3N2Zz4=)
 */
export const IconHeartFilled: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M21.013 8.928c0 3.182-1.534 5.297-3.343 6.948-.794.725-1.659 1.376-2.467 1.984l-.298.225c-.907.685-1.72 1.319-2.359 1.998a.752.752 0 0 1-1.092 0c-.64-.68-1.452-1.313-2.359-1.998-.098-.074-.197-.15-.298-.225-.808-.608-1.673-1.26-2.467-1.984-1.81-1.65-3.343-3.765-3.343-6.948 0-1.118.452-2.365 1.266-3.338.827-.987 2.059-1.73 3.617-1.73 1.248 0 2.307.51 3.102 1.103.4.299.745.63 1.028.947a7.004 7.004 0 0 1 1.03-.947c.795-.594 1.854-1.103 3.102-1.103 1.557 0 2.79.742 3.616 1.729.814.973 1.266 2.22 1.266 3.338Z' />
    </svg>
  )
}
