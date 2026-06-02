import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PGcgb3BhY2l0eT0iLjIiPjxwYXRoIGQ9Ik0xMiAxMy4wNjhjLTMuNTcyIDAtNi45MDQgMi43MTUtNy40MSA2LjQ4LS4wNzQuNTQ3LjM4Ljk5Ny45MzMuOTk3aDEyLjk1NGMuNTUzIDAgMS4wMDgtLjQ1LjkzNC0uOTk3LS41MDctMy43NjUtMy44NC02LjQ4LTcuNDExLTYuNDhaIi8+PHBhdGggZD0iTTE2LjgwNyA4LjI2MWE0LjgwNyA0LjgwNyAwIDEgMS05LjYxNCAwIDQuODA3IDQuODA3IDAgMCAxIDkuNjE0IDBaIi8+PC9nPjxwYXRoIGQ9Ik0xNi4wNTcgOC4yNjFhNC4wNTcgNC4wNTcgMCAxIDAtNC4yNjYgNC4wNTJsLjIxLjAwNS4yMDgtLjAwNWE0LjA1NyA0LjA1NyAwIDAgMCAzLjg0OC00LjA1MlptMS41IDBhNS41NSA1LjU1IDAgMCAxLTIuNTI3IDQuNjU3YzIuOTQxIDEuMTk2IDUuMTk4IDQuMDcgNS4xOTggNy42MjdhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtMy44MzMtMy4yMzYtNi43MjctNi43MjgtNi43MjctMy40OTEgMC02LjcyNyAyLjg5NC02LjcyNyA2LjcyN2EuNzUuNzUgMCAwIDEtMS41IDBjMC0zLjU1NiAyLjI1NS02LjQzIDUuMTk2LTcuNjI3YTUuNTU3IDUuNTU3IDAgMSAxIDguNTg4LTQuNjU3WiIvPjwvc3ZnPg==)
 */
export const IconUser: Icon = ({ className, ...props }) => {
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
        <path d='M12 13.068c-3.572 0-6.904 2.715-7.41 6.48-.074.547.38.997.933.997h12.954c.553 0 1.008-.45.934-.997-.507-3.765-3.84-6.48-7.411-6.48Z' />
        <path d='M16.807 8.261a4.807 4.807 0 1 1-9.614 0 4.807 4.807 0 0 1 9.614 0Z' />
      </g>
      <path d='M16.057 8.261a4.057 4.057 0 1 0-4.266 4.052l.21.005.208-.005a4.057 4.057 0 0 0 3.848-4.052Zm1.5 0a5.55 5.55 0 0 1-2.527 4.657c2.941 1.196 5.198 4.07 5.198 7.627a.75.75 0 0 1-1.5 0c0-3.833-3.236-6.727-6.728-6.727-3.491 0-6.727 2.894-6.727 6.727a.75.75 0 0 1-1.5 0c0-3.556 2.255-6.43 5.196-7.627a5.557 5.557 0 1 1 8.588-4.657Z' />
    </svg>
  )
}
