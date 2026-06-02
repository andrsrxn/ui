import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjczIDEyLjczNGE3LjczIDcuNzMgMCAxIDEtMTUuNDYgMCA3LjczIDcuNzMgMCAwIDEgMTUuNDYgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTMuNTIgMTIuNzM1YTguNDcyIDguNDcyIDAgMCAxIDMuNjU4LTYuOTc3Ljc1Ljc1IDAgMSAxIC44NTMgMS4yMzMgNi45OCA2Ljk4IDAgMSAwIDcuOTM4IDAgLjc1Ljc1IDAgMSAxIC44NTMtMS4yMzNBOC40OCA4LjQ4IDAgMSAxIDMuNTIgMTIuNzM1Wm03LjczLjM2N1YzLjYzNWEuNzUuNzUgMCAwIDEgMS41IDB2OS40NjdhLjc1Ljc1IDAgMCAxLTEuNSAwWiIvPjwvc3ZnPg==)
 */
export const IconPower: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.73 12.734a7.73 7.73 0 1 1-15.46 0 7.73 7.73 0 0 1 15.46 0Z' opacity='.2' />
      <path d='M3.52 12.735a8.472 8.472 0 0 1 3.658-6.977.75.75 0 1 1 .853 1.233 6.98 6.98 0 1 0 7.938 0 .75.75 0 1 1 .853-1.233A8.48 8.48 0 1 1 3.52 12.735Zm7.73.367V3.635a.75.75 0 0 1 1.5 0v9.467a.75.75 0 0 1-1.5 0Z' />
    </svg>
  )
}
