import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjYwNyAxMy40N2EuNzUuNzUgMCAxIDEgMS4wNiAxLjA2MWwtMi40MzkgMi40NCAyLjQ0MiAyLjQ0YS43NS43NSAwIDAgMS0xLjA2IDEuMDZsLTIuNDQyLTIuNDM5LTIuNDM5IDIuNDQyYS43NS43NSAwIDAgMS0xLjA2LTEuMDYxbDIuNDM4LTIuNDQxLTIuNDQtMi40MzlhLjc1Ljc1IDAgMSAxIDEuMDYtMS4wNmwyLjQ0IDIuNDM4IDIuNDQtMi40NFptLTkuMzg0IDQuMjM2YS43NS43NSAwIDAgMSAwIDEuNWgtNi40OWEuNzUuNzUgMCAwIDEgMC0xLjVoNi40OVptMC0yLjkzYS43NS43NSAwIDAgMSAwIDEuNWgtNi40OWEuNzUuNzUgMCAwIDEgMC0xLjVoNi40OVpNNi4yMjUgNC4wNTZhLjc1Ljc1IDAgMCAxIDEuNSAwbC4wMDEgMi40OTZoMi40OTZhLjc1Ljc1IDAgMSAxIC4wMDEgMS41SDcuNzI2bC4wMDIgMi40OTZhLjc1Ljc1IDAgMCAxLTEuNSAwbC0uMDAyLTIuNDk1SDMuNzMxYS43NS43NSAwIDAgMSAwLTEuNWgyLjQ5NVY0LjA1N1pNMjAuMjcgNi41NTVhLjc1Ljc1IDAgMCAxIDAgMS41aC02LjIwMmEuNzUuNzUgMCAwIDEgMC0xLjVoNi4yMDJaIi8+PC9zdmc+)
 */
export const IconMaths: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.607 13.47a.75.75 0 1 1 1.06 1.061l-2.439 2.44 2.442 2.44a.75.75 0 0 1-1.06 1.06l-2.442-2.439-2.439 2.442a.75.75 0 0 1-1.06-1.061l2.438-2.441-2.44-2.439a.75.75 0 1 1 1.06-1.06l2.44 2.438 2.44-2.44Zm-9.384 4.236a.75.75 0 0 1 0 1.5h-6.49a.75.75 0 0 1 0-1.5h6.49Zm0-2.93a.75.75 0 0 1 0 1.5h-6.49a.75.75 0 0 1 0-1.5h6.49ZM6.225 4.056a.75.75 0 0 1 1.5 0l.001 2.496h2.496a.75.75 0 1 1 .001 1.5H7.726l.002 2.496a.75.75 0 0 1-1.5 0l-.002-2.495H3.731a.75.75 0 0 1 0-1.5h2.495V4.057ZM20.27 6.555a.75.75 0 0 1 0 1.5h-6.202a.75.75 0 0 1 0-1.5h6.202Z' />
    </svg>
  )
}
