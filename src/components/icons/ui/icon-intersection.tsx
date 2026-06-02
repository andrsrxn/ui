import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMuOTA3IDIwLjQxNmEuNzUuNzUgMCAwIDAgMS41IDB2LTkuMjI5YzAtMS4yMTguNDk1LTIuNzAyIDEuMTctMy43ODYgMi42NjEtNC4yNzggOC45NjctNC4wMzIgMTEuMjg3LjQ0MmE2LjUgNi41IDAgMCAxIC43MyAyLjk5djkuNTgzYS43NS43NSAwIDAgMCAxLjUgMHYtOS41ODJhNy45OTkgNy45OTkgMCAwIDAtLjg5OC0zLjY4MkMxNi4zNCAxLjY0NiA4LjU3OCAxLjM0MiA1LjMwMiA2LjYwOGMtLjc5IDEuMjctMS4zOTUgMy4wMjYtMS4zOTUgNC41OHY5LjIyOFoiLz48L3N2Zz4=)
 */
export const IconIntersection: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M3.907 20.416a.75.75 0 0 0 1.5 0v-9.229c0-1.218.495-2.702 1.17-3.786 2.661-4.278 8.967-4.032 11.287.442a6.5 6.5 0 0 1 .73 2.99v9.583a.75.75 0 0 0 1.5 0v-9.582a7.999 7.999 0 0 0-.898-3.682C16.34 1.646 8.578 1.342 5.302 6.608c-.79 1.27-1.395 3.026-1.395 4.58v9.228Z' />
    </svg>
  )
}
