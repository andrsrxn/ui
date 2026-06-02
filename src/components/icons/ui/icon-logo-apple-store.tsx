import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE2LjIyNCAxNS41NTcgMTIgNy43ODVsLTQuMjI0IDcuNzcyaDguNDQ4WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNOS42ODYgMy41MjlhLjczNC43MzQgMCAwIDEgLjk5NS4yOTRMMTIgNi4yNWwxLjMxOS0yLjQyN2EuNzM0LjczNCAwIDEgMSAxLjI4OS43MDFsLTEuNzU2IDMuMjMgMy44MjEgNy4wN2gzLjgzNGEuNzM0LjczNCAwIDAgMSAwIDEuNDY4aC0zLjA0bDEuNzIzIDMuMTg2YS43MzQuNzM0IDAgMCAxLTEuMjkxLjY5N2wtMi4xLTMuODgzSDguMjNMNi4xIDIwLjE3OWEuNzM1LjczNSAwIDAgMS0xLjI4Ny0uNzA1bDEuNzQzLTMuMTgySDMuNDkzYS43MzQuNzM0IDAgMCAxIDAtMS40NjhoMy44NDZsMy44MjUtNy4wNC0xLjc3Mi0zLjI2YS43MzQuNzM0IDAgMCAxIC4yOTQtLjk5NVpNOS4wMSAxNC44MjRoNS45OTdsLTIuOTkxLTUuNTMyLTMuMDA2IDUuNTMyWiIvPjwvc3ZnPg==)
 */
export const IconLogoAppleStore: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M16.224 15.557 12 7.785l-4.224 7.772h8.448Z' opacity='.2' />
      <path d='M9.686 3.529a.734.734 0 0 1 .995.294L12 6.25l1.319-2.427a.734.734 0 1 1 1.289.701l-1.756 3.23 3.821 7.07h3.834a.734.734 0 0 1 0 1.468h-3.04l1.723 3.186a.734.734 0 0 1-1.291.697l-2.1-3.883H8.23L6.1 20.179a.735.735 0 0 1-1.287-.705l1.743-3.182H3.493a.734.734 0 0 1 0-1.468h3.846l3.825-7.04-1.772-3.26a.734.734 0 0 1 .294-.995ZM9.01 14.824h5.997l-2.991-5.532-3.006 5.532Z' />
    </svg>
  )
}
