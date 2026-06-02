import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5Ljg4IDMuMjY3YS43NS43NSAwIDEgMSAxLjI2LjgxNGwtNy45IDEyLjJjLS43MzYgMS4xMzYtMS4zMzMgMi4wNi0xLjg4OCAyLjY5MS0uNTY0LjY0MS0xLjIwOSAxLjEyNC0yLjA2NyAxLjEyOC0uODU4LjAwNC0xLjUwNy0uNDcxLTIuMDc4LTEuMTA2LS41NjItLjYyNS0xLjE2OC0xLjU0NC0xLjkxNS0yLjY3MmwtMi40MjctMy42NjVhLjc1Ljc1IDAgMSAxIDEuMjUtLjgyOWwyLjQyOCAzLjY2NmMuNzc1IDEuMTcgMS4zMSAxLjk3NSAxLjc4IDIuNDk4LjQ2LjUxMS43MzEuNjA5Ljk1NC42MDguMjIzLS4wMDEuNDk0LS4xMDEuOTUtLjYxOC40NjQtLjUyOC45OS0xLjM0IDEuNzUzLTIuNTE3bDcuOS0xMi4xOThaIi8+PC9zdmc+)
 */
export const IconCheck: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.88 3.267a.75.75 0 1 1 1.26.814l-7.9 12.2c-.736 1.136-1.333 2.06-1.888 2.691-.564.641-1.209 1.124-2.067 1.128-.858.004-1.507-.471-2.078-1.106-.562-.625-1.168-1.544-1.915-2.672l-2.427-3.665a.75.75 0 1 1 1.25-.829l2.428 3.666c.775 1.17 1.31 1.975 1.78 2.498.46.511.731.609.954.608.223-.001.494-.101.95-.618.464-.528.99-1.34 1.753-2.517l7.9-12.198Z' />
    </svg>
  )
}
