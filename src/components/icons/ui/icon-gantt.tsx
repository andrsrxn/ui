import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMuMDI4IDE4LjcyM1YzLjY1NGEuNzUuNzUgMCAwIDEgMS41IDB2MTUuMDY5YzAgLjQxNC4zMzYuNzUuNzUuNzVoMTUuMDc0YS43NS43NSAwIDAgMSAwIDEuNUg1LjI3OGEyLjI1IDIuMjUgMCAwIDEtMi4yNS0yLjI1Wk0xOSAxNC4yNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTZhLjc1Ljc1IDAgMCAxIDAtMS41aDZabS0xLTRhLjc1Ljc1IDAgMCAxIDAgMS41SDcuODg3YS43NS43NSAwIDAgMSAwLTEuNUgxOFptLTUtNGEuNzUuNzUgMCAwIDEgMCAxLjVINy4wOTJhLjc1Ljc1IDAgMCAxIDAtMS41SDEzWiIvPjwvc3ZnPg==)
 */
export const IconGantt: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M3.028 18.723V3.654a.75.75 0 0 1 1.5 0v15.069c0 .414.336.75.75.75h15.074a.75.75 0 0 1 0 1.5H5.278a2.25 2.25 0 0 1-2.25-2.25ZM19 14.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h6Zm-1-4a.75.75 0 0 1 0 1.5H7.887a.75.75 0 0 1 0-1.5H18Zm-5-4a.75.75 0 0 1 0 1.5H7.092a.75.75 0 0 1 0-1.5H13Z' />
    </svg>
  )
}
