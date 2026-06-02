import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMuOTA3IDMuNTg0YS43NS43NSAwIDAgMSAxLjUgMHY5LjIyOWMwIDEuMjE4LjQ5NSAyLjcwMiAxLjE3IDMuNzg2IDIuNjYxIDQuMjc4IDguOTY3IDQuMDMyIDExLjI4Ny0uNDQyYTYuNSA2LjUgMCAwIDAgLjczLTIuOTlWMy41ODNhLjc1Ljc1IDAgMCAxIDEuNSAwdjkuNTgyYTcuOTk4IDcuOTk4IDAgMCAxLS44OTggMy42ODJjLTIuODU1IDUuNTA2LTEwLjYxOCA1LjgxLTEzLjg5NC41NDQtLjc5LTEuMjctMS4zOTUtMy4wMjYtMS4zOTUtNC41OFYzLjU4NVoiLz48L3N2Zz4=)
 */
export const IconUnion: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M3.907 3.584a.75.75 0 0 1 1.5 0v9.229c0 1.218.495 2.702 1.17 3.786 2.661 4.278 8.967 4.032 11.287-.442a6.5 6.5 0 0 0 .73-2.99V3.583a.75.75 0 0 1 1.5 0v9.582a7.998 7.998 0 0 1-.898 3.682c-2.855 5.506-10.618 5.81-13.894.544-.79-1.27-1.395-3.026-1.395-4.58V3.585Z' />
    </svg>
  )
}
