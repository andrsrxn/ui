import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjMxOCAxOC41M2EuNzUuNzUgMCAwIDEgMCAxLjVIMy42ODJhLjc1Ljc1IDAgMCAxIDAtMS41aDE2LjYzNlptMC00Ljg3YS43NS43NSAwIDAgMSAwIDEuNUgzLjY4MmEuNzUuNzUgMCAwIDEgMC0xLjVoMTYuNjM2Wm0wLTQuODdhLjc1Ljc1IDAgMCAxIDAgMS41SDMuNjgyYS43NS43NSAwIDAgMSAwLTEuNWgxNi42MzZabTAtNC44N2EuNzUuNzUgMCAwIDEgMCAxLjVIMy42ODJhLjc1Ljc1IDAgMSAxIDAtMS41aDE2LjYzNloiLz48L3N2Zz4=)
 */
export const IconTextAlignJustify: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.318 18.53a.75.75 0 0 1 0 1.5H3.682a.75.75 0 0 1 0-1.5h16.636Zm0-4.87a.75.75 0 0 1 0 1.5H3.682a.75.75 0 0 1 0-1.5h16.636Zm0-4.87a.75.75 0 0 1 0 1.5H3.682a.75.75 0 0 1 0-1.5h16.636Zm0-4.87a.75.75 0 0 1 0 1.5H3.682a.75.75 0 1 1 0-1.5h16.636Z' />
    </svg>
  )
}
