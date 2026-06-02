import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTExLjI0NSAyMC41OTdWMTIuNzVIMy40MDhhLjc1Ljc1IDAgMCAxIDAtMS41aDcuODM3VjMuNDEzYS43NS43NSAwIDAgMSAxLjUgMHY3LjgzN2g3Ljg0N2EuNzUuNzUgMCAwIDEgMCAxLjVoLTcuODQ3djcuODQ3YS43NS43NSAwIDAgMS0xLjUgMFoiLz48L3N2Zz4=)
 */
export const IconPlus: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M11.245 20.597V12.75H3.408a.75.75 0 0 1 0-1.5h7.837V3.413a.75.75 0 0 1 1.5 0v7.837h7.847a.75.75 0 0 1 0 1.5h-7.847v7.847a.75.75 0 0 1-1.5 0Z' />
    </svg>
  )
}
