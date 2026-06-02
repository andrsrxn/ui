import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjQzNCAxMmE4LjQzNCA4LjQzNCAwIDEgMS0xNi44NjggMCA4LjQzNCA4LjQzNCAwIDAgMSAxNi44NjggMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE5LjY4NCAxMmE3LjY4NSA3LjY4NSAwIDEgMC0xNS4zNjkgMCA3LjY4NSA3LjY4NSAwIDAgMCAxNS4zNyAwWm0xLjUgMGE5LjE4NSA5LjE4NSAwIDEgMS0xOC4zNy0uMDAxIDkuMTg1IDkuMTg1IDAgMCAxIDE4LjM3IDBaIi8+PHBhdGggZD0iTTEyLjczMiA3LjM4YS45ODIuOTgyIDAgMSAxLTEuOTY0IDAgLjk4Mi45ODIgMCAwIDEgMS45NjQgMFpNMTEgMTUuODE2di01LjQ5YS43NS43NSAwIDEgMSAxLjUgMHY1LjQ5YzAgLjIzLjA3Ny4zNy4xNjcuNDU2LjA5NS4wODguMjcuMTc3LjU2NS4xNzdhLjc1Ljc1IDAgMCAxIDAgMS41Yy0uNjA3IDAtMS4xNzMtLjE5LTEuNTk0LS41ODctLjQyNC0uNC0uNjM4LS45NTItLjYzOC0xLjU0NloiLz48L3N2Zz4=)
 */
export const IconInfo: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.434 12a8.434 8.434 0 1 1-16.868 0 8.434 8.434 0 0 1 16.868 0Z' opacity='.2' />
      <path d='M19.684 12a7.685 7.685 0 1 0-15.369 0 7.685 7.685 0 0 0 15.37 0Zm1.5 0a9.185 9.185 0 1 1-18.37-.001 9.185 9.185 0 0 1 18.37 0Z' />
      <path d='M12.732 7.38a.982.982 0 1 1-1.964 0 .982.982 0 0 1 1.964 0ZM11 15.816v-5.49a.75.75 0 1 1 1.5 0v5.49c0 .23.077.37.167.456.095.088.27.177.565.177a.75.75 0 0 1 0 1.5c-.607 0-1.173-.19-1.594-.587-.424-.4-.638-.952-.638-1.546Z' />
    </svg>
  )
}
