import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEwLjMwNCA0Ljg1N2ExLjQ3MyAxLjQ3MyAwIDEgMS0yLjk0NyAwIDEuNDczIDEuNDczIDAgMCAxIDIuOTQ3IDBabTAgNy4xNDNhMS40NzMgMS40NzMgMCAxIDEtMi45NDcgMCAxLjQ3MyAxLjQ3MyAwIDAgMSAyLjk0NyAwWm0wIDcuMTQzYTEuNDczIDEuNDczIDAgMSAxLTIuOTQ3IDAgMS40NzMgMS40NzMgMCAwIDEgMi45NDcgMFptNi4zMzktMTQuMjg2YTEuNDczIDEuNDczIDAgMSAxLTIuOTQ3IDAgMS40NzMgMS40NzMgMCAwIDEgMi45NDcgMFptMCA3LjE0M2ExLjQ3MyAxLjQ3MyAwIDEgMS0yLjk0NyAwIDEuNDczIDEuNDczIDAgMCAxIDIuOTQ3IDBabTAgNy4xNDNhMS40NzMgMS40NzMgMCAxIDEtMi45NDcgMCAxLjQ3MyAxLjQ3MyAwIDAgMSAyLjk0NyAwWiIvPjwvc3ZnPg==)
 */
export const IconGripVertical: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M10.304 4.857a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0Zm0 7.143a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0Zm0 7.143a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0Zm6.339-14.286a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0Zm0 7.143a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0Zm0 7.143a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0Z' />
    </svg>
  )
}
