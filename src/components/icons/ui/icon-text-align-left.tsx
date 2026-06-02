import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE0LjEwMyAxOC42MzlhLjc1Ljc1IDAgMCAxIDAgMS41SDMuNTg2YS43NS43NSAwIDAgMSAwLTEuNWgxMC41MTdabTYuMzExLTQuOTI2YS43NS43NSAwIDEgMSAwIDEuNUgzLjU4NmEuNzUuNzUgMCAwIDEgMC0xLjVoMTYuODI4Wm0tNi4zMS00LjkyNmEuNzUuNzUgMCAwIDEgMCAxLjVIMy41ODVhLjc1Ljc1IDAgMCAxIDAtMS41aDEwLjUxN1ptNi4zMS00LjkyNmEuNzUuNzUgMCAwIDEgMCAxLjVIMy41ODZhLjc1Ljc1IDAgMSAxIDAtMS41aDE2LjgyOFoiLz48L3N2Zz4=)
 */
export const IconTextAlignLeft: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M14.103 18.639a.75.75 0 0 1 0 1.5H3.586a.75.75 0 0 1 0-1.5h10.517Zm6.311-4.926a.75.75 0 1 1 0 1.5H3.586a.75.75 0 0 1 0-1.5h16.828Zm-6.31-4.926a.75.75 0 0 1 0 1.5H3.585a.75.75 0 0 1 0-1.5h10.517Zm6.31-4.926a.75.75 0 0 1 0 1.5H3.586a.75.75 0 1 1 0-1.5h16.828Z' />
    </svg>
  )
}
