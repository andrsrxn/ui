import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTQuNDkzIDE5LjQ4M2EuNzUuNzUgMCAwIDAgMCAxLjVIMTkuMTRhLjc1Ljc1IDAgMCAwIDAtMS41SDQuNDkzWm0uMjg1LTE2LjM3MmEuNzUuNzUgMCAwIDAgMCAxLjVoOC4zMzVjLjg5IDAgMS43NjguMjE0IDIuNTU4LjYyNCAzLjgyNCAxLjk4MyA0LjAzNiA3LjM3Ni4zNzggOS42NTFsLS4yMjcuMTQxYTUuNzEgNS43MSAwIDAgMS0zLjAxNi44NjJINC43NzhhLjc1Ljc1IDAgMCAwIDAgMS41aDguMDI4YTcuMjEgNy4yMSAwIDAgMCAzLjgwNy0xLjA4OGwuMjI4LS4xNDFjNC42NDUtMi44OSA0LjM3Ny05LjczOS0uNDgtMTIuMjU3YTcuMDU4IDcuMDU4IDAgMCAwLTMuMjQ4LS43OTJINC43NzhaIi8+PC9zdmc+)
 */
export const IconSupersetOf: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M4.493 19.483a.75.75 0 0 0 0 1.5H19.14a.75.75 0 0 0 0-1.5H4.493Zm.285-16.372a.75.75 0 0 0 0 1.5h8.335c.89 0 1.768.214 2.558.624 3.824 1.983 4.036 7.376.378 9.651l-.227.141a5.71 5.71 0 0 1-3.016.862H4.778a.75.75 0 0 0 0 1.5h8.028a7.21 7.21 0 0 0 3.807-1.088l.228-.141c4.645-2.89 4.377-9.739-.48-12.257a7.058 7.058 0 0 0-3.248-.792H4.778Z' />
    </svg>
  )
}
