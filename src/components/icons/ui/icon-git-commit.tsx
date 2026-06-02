import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE1LjMyNCAxMmEzLjMyNCAzLjMyNCAwIDEgMS02LjY0OCAwIDMuMzI0IDMuMzI0IDAgMCAxIDYuNjQ4IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xMiA3LjkyNmE0LjA3NCA0LjA3NCAwIDAgMSA0LjAwNCAzLjMyNWg0LjQ5MWEuNzUuNzUgMCAwIDEgMCAxLjVoLTQuNDkxYTQuMDc0IDQuMDc0IDAgMCAxLTguMDA4IDBINGEuNzUuNzUgMCAwIDEgMC0xLjVoMy45OTZBNC4wNzQgNC4wNzQgMCAwIDEgMTIgNy45MjZabTAgMS41YTIuNTc1IDIuNTc1IDAgMSAwIDAgNS4xNSAyLjU3NSAyLjU3NSAwIDAgMCAwLTUuMTVaIi8+PC9zdmc+)
 */
export const IconGitCommit: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M15.324 12a3.324 3.324 0 1 1-6.648 0 3.324 3.324 0 0 1 6.648 0Z' opacity='.2' />
      <path d='M12 7.926a4.074 4.074 0 0 1 4.004 3.325h4.491a.75.75 0 0 1 0 1.5h-4.491a4.074 4.074 0 0 1-8.008 0H4a.75.75 0 0 1 0-1.5h3.996A4.074 4.074 0 0 1 12 7.926Zm0 1.5a2.575 2.575 0 1 0 0 5.15 2.575 2.575 0 0 0 0-5.15Z' />
    </svg>
  )
}
