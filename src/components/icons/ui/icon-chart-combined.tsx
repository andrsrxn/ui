import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMuMDI4IDE4LjcyM1YzLjY1NGEuNzUuNzUgMCAwIDEgMS41IDB2MTUuMDY5YzAgLjQxNC4zMzYuNzUuNzUuNzVoMTUuMDc0YS43NS43NSAwIDAgMSAwIDEuNUg1LjI3OGEyLjI1IDIuMjUgMCAwIDEtMi4yNS0yLjI1Wm0zLjUwMy0xLjAyNHYtMy41NTZhLjc1Ljc1IDAgMCAxIDEuNSAwdjMuNTU2YS43NS43NSAwIDAgMS0xLjUgMFptMy42NzQgMHYtNi4yMDNhLjc1Ljc1IDAgMCAxIDEuNSAwVjE3LjdhLjc1Ljc1IDAgMCAxLTEuNSAwWm0zLjY3NSAwdi00Ljk1YS43NS43NSAwIDAgMSAxLjUgMHY0Ljk1YS43NS43NSAwIDAgMS0xLjUgMFptMy42NzMgMHYtNy4yNjRhLjc1Ljc1IDAgMCAxIDEuNSAwdjcuMjY0YS43NS43NSAwIDAgMS0xLjUgMFptMS4yMDgtMTMuMjAyYS43NS43NSAwIDEgMSAxLjA4MSAxLjA0bC00LjMxNCA0LjQ4OGExLjc1IDEuNzUgMCAwIDEtMi41MTcuMDA3bC0xLjcxNS0xLjc2NGEuMjUuMjUgMCAwIDAtLjM1Ni0uMDAybC0zLjc2IDMuNzZhLjc1Ljc1IDAgMSAxLTEuMDYxLTEuMDZsMy43Ni0zLjc2YTEuNzUgMS43NSAwIDAgMSAyLjQ5My4wMTdsMS43MTQgMS43NjRhLjI1LjI1IDAgMCAwIC4zNiAwbDQuMzE1LTQuNDlaIi8+PC9zdmc+)
 */
export const IconChartCombined: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M3.028 18.723V3.654a.75.75 0 0 1 1.5 0v15.069c0 .414.336.75.75.75h15.074a.75.75 0 0 1 0 1.5H5.278a2.25 2.25 0 0 1-2.25-2.25Zm3.503-1.024v-3.556a.75.75 0 0 1 1.5 0v3.556a.75.75 0 0 1-1.5 0Zm3.674 0v-6.203a.75.75 0 0 1 1.5 0V17.7a.75.75 0 0 1-1.5 0Zm3.675 0v-4.95a.75.75 0 0 1 1.5 0v4.95a.75.75 0 0 1-1.5 0Zm3.673 0v-7.264a.75.75 0 0 1 1.5 0v7.264a.75.75 0 0 1-1.5 0Zm1.208-13.202a.75.75 0 1 1 1.081 1.04l-4.314 4.488a1.75 1.75 0 0 1-2.517.007l-1.715-1.764a.25.25 0 0 0-.356-.002l-3.76 3.76a.75.75 0 1 1-1.061-1.06l3.76-3.76a1.75 1.75 0 0 1 2.493.017l1.714 1.764a.25.25 0 0 0 .36 0l4.315-4.49Z' />
    </svg>
  )
}
