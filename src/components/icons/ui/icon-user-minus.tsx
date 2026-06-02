import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PGcgb3BhY2l0eT0iLjIiPjxwYXRoIGQ9Ik0xMiAxMy4wNjhjLTMuNTcyIDAtNi45MDQgMi43MTUtNy40MSA2LjQ4LS4wNzUuNTQ3LjM4Ljk5Ny45MzMuOTk3aDEyLjk1NGMuNTUzIDAgMS4wMDgtLjQ1LjkzNC0uOTk3LS41MDgtMy43NjUtMy44NC02LjQ4LTcuNDExLTYuNDhaIi8+PHBhdGggZD0iTTE2LjgwNyA4LjI2MWE0LjgwNyA0LjgwNyAwIDEgMS05LjYxNCAwIDQuODA3IDQuODA3IDAgMCAxIDkuNjE0IDBaIi8+PC9nPjxwYXRoIGQ9Ik0xNi4wNTcgOC4yNjFhNC4wNTcgNC4wNTcgMCAxIDAtNC4yNjYgNC4wNTJsLjIxLjAwNS4yMDgtLjAwNWE0LjA1NyA0LjA1NyAwIDAgMCAzLjg0OC00LjA1MlptNC41MzggOC43NzdhLjc1Ljc1IDAgMCAxIDAgMS41SDE1LjJhLjc1Ljc1IDAgMCAxIDAtMS41aDUuMzk1Wk0xNy41NTcgOC4yNmE1LjU1MSA1LjU1MSAwIDAgMS0yLjU2NSA0LjY4Mi43NDguNzQ4IDAgMCAxLS43MjggMS4yODYgNi41MzMgNi41MzMgMCAwIDAtMi4yNjQtLjQxYy0zLjQ5MSAwLTYuNzI3IDIuODk0LTYuNzI3IDYuNzI3YS43NS43NSAwIDAgMS0xLjUgMGMwLTMuNTU2IDIuMjU1LTYuNDMgNS4xOTYtNy42MjdhNS41NTcgNS41NTcgMCAxIDEgOC41ODgtNC42NTdaIi8+PC9zdmc+)
 */
export const IconUserMinus: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <g opacity='.2'>
        <path d='M12 13.068c-3.572 0-6.904 2.715-7.41 6.48-.075.547.38.997.933.997h12.954c.553 0 1.008-.45.934-.997-.508-3.765-3.84-6.48-7.411-6.48Z' />
        <path d='M16.807 8.261a4.807 4.807 0 1 1-9.614 0 4.807 4.807 0 0 1 9.614 0Z' />
      </g>
      <path d='M16.057 8.261a4.057 4.057 0 1 0-4.266 4.052l.21.005.208-.005a4.057 4.057 0 0 0 3.848-4.052Zm4.538 8.777a.75.75 0 0 1 0 1.5H15.2a.75.75 0 0 1 0-1.5h5.395ZM17.557 8.26a5.551 5.551 0 0 1-2.565 4.682.748.748 0 0 1-.728 1.286 6.533 6.533 0 0 0-2.264-.41c-3.491 0-6.727 2.894-6.727 6.727a.75.75 0 0 1-1.5 0c0-3.556 2.255-6.43 5.196-7.627a5.557 5.557 0 1 1 8.588-4.657Z' />
    </svg>
  )
}
