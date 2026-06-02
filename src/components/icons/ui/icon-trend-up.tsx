import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjI1IDExLjg4VjguOTY4bC01LjEzMiA1LjM0YTEuNzUgMS43NSAwIDAgMS0yLjUxNy4wMDdsLTIuMy0yLjM2N2EuMjUuMjUgMCAwIDAtLjM1Ny0uMDAzTDMuOSAxNi45ODlhLjc1Ljc1IDAgMSAxLTEuMDYtMS4wNmw1LjA0My01LjA0NWExLjc1IDEuNzUgMCAwIDEgMi40OTMuMDE4bDIuMyAyLjM2OGEuMjUxLjI1MSAwIDAgMCAuMzYgMGw1LjI0Ni01LjQ1OUgxNS4yMmEuNzUuNzUgMCAwIDEgMC0xLjVoMy4yOGEyLjI1IDIuMjUgMCAwIDEgMi4yNSAyLjI1djMuMzE5YS43NS43NSAwIDAgMS0xLjUgMFoiLz48L3N2Zz4=)
 */
export const IconTrendUp: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.25 11.88V8.968l-5.132 5.34a1.75 1.75 0 0 1-2.517.007l-2.3-2.367a.25.25 0 0 0-.357-.003L3.9 16.989a.75.75 0 1 1-1.06-1.06l5.043-5.045a1.75 1.75 0 0 1 2.493.018l2.3 2.368a.251.251 0 0 0 .36 0l5.246-5.459H15.22a.75.75 0 0 1 0-1.5h3.28a2.25 2.25 0 0 1 2.25 2.25v3.319a.75.75 0 0 1-1.5 0Z' />
    </svg>
  )
}
