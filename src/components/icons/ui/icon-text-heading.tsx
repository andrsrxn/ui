import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE2LjI1IDIwLjIwM1YxMi43NWgtOC41djcuNDUzYS43NS43NSAwIDAgMS0xLjUgMFYzLjc5N2EuNzUuNzUgMCAxIDEgMS41IDB2Ny40NTNoOC41VjMuNzk3YS43NS43NSAwIDAgMSAxLjUgMHYxNi40MDZhLjc1Ljc1IDAgMCAxLTEuNSAwWiIvPjwvc3ZnPg==)
 */
export const IconTextHeading: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M16.25 20.203V12.75h-8.5v7.453a.75.75 0 0 1-1.5 0V3.797a.75.75 0 1 1 1.5 0v7.453h8.5V3.797a.75.75 0 0 1 1.5 0v16.406a.75.75 0 0 1-1.5 0Z' />
    </svg>
  )
}
