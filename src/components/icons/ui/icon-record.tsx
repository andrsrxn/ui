import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNS4xNTQiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE5LjY3IDEyYTcuNjcgNy42NyAwIDEgMC0xNS4zNCAwIDcuNjcgNy42NyAwIDAgMCAxNS4zNCAwWm0tMy4yNjYgMGE0LjQwNSA0LjQwNSAwIDEgMC04LjgxIDAgNC40MDUgNC40MDUgMCAwIDAgOC44MSAwWm0xLjUgMGE1LjkwNCA1LjkwNCAwIDEgMS0xMS44MDkgMCA1LjkwNCA1LjkwNCAwIDAgMSAxMS44MDkgMFptMy4yNjYgMGE5LjE3IDkuMTcgMCAxIDEtMTguMzQxLS4wMDEgOS4xNyA5LjE3IDAgMCAxIDE4LjM0IDBaIi8+PC9zdmc+)
 */
export const IconRecord: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <circle cx='12' cy='12' r='5.154' opacity='.2' />
      <path d='M19.67 12a7.67 7.67 0 1 0-15.34 0 7.67 7.67 0 0 0 15.34 0Zm-3.266 0a4.405 4.405 0 1 0-8.81 0 4.405 4.405 0 0 0 8.81 0Zm1.5 0a5.904 5.904 0 1 1-11.809 0 5.904 5.904 0 0 1 11.809 0Zm3.266 0a9.17 9.17 0 1 1-18.341-.001 9.17 9.17 0 0 1 18.34 0Z' />
    </svg>
  )
}
