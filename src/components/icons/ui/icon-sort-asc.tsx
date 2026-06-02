import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE3LjA3MiAxOC4zMzVhLjc2Ljc2IDAgMCAxIDAgMS41MjFIMy43NmEuNzYuNzYgMCAxIDEgMC0xLjUyaDEzLjMxMlptLS43Ni0zLjI5NVY2LjY4M2wtLjExNC4xMDgtMS43NyAxLjY5NWEuNzYuNzYgMCAwIDEtMS4wNTMtMS4xbDEuNzcxLTEuNjkzYy4zMTctLjMwMy42MDgtLjU4NC44NzUtLjc4LjI4NC0uMjA4LjYyNS0uMzg1IDEuMDU0LS4zODUuNDI5IDAgLjc3LjE3OCAxLjA1NS4zODYuMjY3LjE5Ni41NTguNDc2Ljg3NC43OGwxLjc2NSAxLjY5M2EuNzYuNzYgMCAwIDEtMS4wNTIgMS4wOTlsLTEuNzY1LTEuNjk0LS4xMi0uMTEzdjguMzZhLjc2Ljc2IDAgMCAxLTEuNTIgMFptLTQuNDM5LTIuNzlhLjc2Ljc2IDAgMCAxIDAgMS41MjJIMy43NmEuNzYuNzYgMCAwIDEgMC0xLjUyMWg4LjExM1pNOS44NDUgNi4xNjdhLjc2Ljc2IDAgMCAxIDAgMS41MjFIMy43NmEuNzYuNzYgMCAwIDEgMC0xLjUyaDYuMDg1WiIvPjwvc3ZnPg==)
 */
export const IconSortAsc: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M17.072 18.335a.76.76 0 0 1 0 1.521H3.76a.76.76 0 1 1 0-1.52h13.312Zm-.76-3.295V6.683l-.114.108-1.77 1.695a.76.76 0 0 1-1.053-1.1l1.771-1.693c.317-.303.608-.584.875-.78.284-.208.625-.385 1.054-.385.429 0 .77.178 1.055.386.267.196.558.476.874.78l1.765 1.693a.76.76 0 0 1-1.052 1.099l-1.765-1.694-.12-.113v8.36a.76.76 0 0 1-1.52 0Zm-4.439-2.79a.76.76 0 0 1 0 1.522H3.76a.76.76 0 0 1 0-1.521h8.113ZM9.845 6.167a.76.76 0 0 1 0 1.521H3.76a.76.76 0 0 1 0-1.52h6.085Z' />
    </svg>
  )
}
