import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE1LjgxNyA3LjYzYTMuODE3IDMuODE3IDAgMSAxLTcuNjM0IDAgMy44MTcgMy44MTcgMCAwIDEgNy42MzQgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE1LjA2NyA3LjYzYTMuMDY3IDMuMDY3IDAgMSAwLTYuMTM1LjAwMiAzLjA2NyAzLjA2NyAwIDAgMCA2LjEzNS0uMDAyWm0xLjUgMGE0LjU2OCA0LjU2OCAwIDAgMS0zLjgxNyA0LjUwNXY4LjQ5MWEuNzUuNzUgMCAwIDEtMS41IDB2LTguNDkxYTQuNTY4IDQuNTY4IDAgMSAxIDUuMzE3LTQuNTA1WiIvPjwvc3ZnPg==)
 */
export const IconMapPinLine: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M15.817 7.63a3.817 3.817 0 1 1-7.634 0 3.817 3.817 0 0 1 7.634 0Z' opacity='.2' />
      <path d='M15.067 7.63a3.067 3.067 0 1 0-6.135.002 3.067 3.067 0 0 0 6.135-.002Zm1.5 0a4.568 4.568 0 0 1-3.817 4.505v8.491a.75.75 0 0 1-1.5 0v-8.491a4.568 4.568 0 1 1 5.317-4.505Z' />
    </svg>
  )
}
