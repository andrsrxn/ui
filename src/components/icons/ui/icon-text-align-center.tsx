import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE3LjIyMyAxOC41ODlhLjc1Ljc1IDAgMCAxIDAgMS41SDYuNzc2YS43NS43NSAwIDAgMSAwLTEuNWgxMC40NDdabTMuMTM1LTQuODkzYS43NS43NSAwIDAgMSAwIDEuNUgzLjY0MmEuNzUuNzUgMCAxIDEgMC0xLjVoMTYuNzE2Wm0tMy4xMzUtNC44OTNhLjc1Ljc1IDAgMCAxIDAgMS41SDYuNzc2YS43NS43NSAwIDAgMSAwLTEuNWgxMC40NDdabTMuMTM1LTQuODkyYS43NS43NSAwIDAgMSAwIDEuNUgzLjY0MmEuNzUuNzUgMCAwIDEgMC0xLjVoMTYuNzE2WiIvPjwvc3ZnPg==)
 */
export const IconTextAlignCenter: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M17.223 18.589a.75.75 0 0 1 0 1.5H6.776a.75.75 0 0 1 0-1.5h10.447Zm3.135-4.893a.75.75 0 0 1 0 1.5H3.642a.75.75 0 1 1 0-1.5h16.716Zm-3.135-4.893a.75.75 0 0 1 0 1.5H6.776a.75.75 0 0 1 0-1.5h10.447Zm3.135-4.892a.75.75 0 0 1 0 1.5H3.642a.75.75 0 0 1 0-1.5h16.716Z' />
    </svg>
  )
}
