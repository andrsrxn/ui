import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjQyIDE5LjQ4M2EuNzUuNzUgMCAwIDEgMCAxLjVINC43NzRhLjc1Ljc1IDAgMCAxIDAtMS41SDE5LjQyWm0tLjI4NC0xNi4zNzJhLjc1Ljc1IDAgMCAxIDAgMS41SDEwLjhjLS44OSAwLTEuNzY3LjIxNC0yLjU1OC42MjQtMy44MjQgMS45ODMtNC4wMzUgNy4zNzYtLjM3OCA5LjY1MWwuMjI4LjE0MWE1LjcxIDUuNzEgMCAwIDAgMy4wMTYuODYyaDguMDI4YS43NS43NSAwIDAgMSAwIDEuNWgtOC4wMjhBNy4yMSA3LjIxIDAgMCAxIDcuMyAxNi4zMDFsLS4yMjgtLjE0MWMtNC42NDUtMi44OS00LjM3Ny05LjczOS40OC0xMi4yNTdhNy4wNTggNy4wNTggMCAwIDEgMy4yNDgtLjc5Mmg4LjMzNloiLz48L3N2Zz4=)
 */
export const IconSubsetOf: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.42 19.483a.75.75 0 0 1 0 1.5H4.774a.75.75 0 0 1 0-1.5H19.42Zm-.284-16.372a.75.75 0 0 1 0 1.5H10.8c-.89 0-1.767.214-2.558.624-3.824 1.983-4.035 7.376-.378 9.651l.228.141a5.71 5.71 0 0 0 3.016.862h8.028a.75.75 0 0 1 0 1.5h-8.028A7.21 7.21 0 0 1 7.3 16.301l-.228-.141c-4.645-2.89-4.377-9.739.48-12.257a7.058 7.058 0 0 1 3.248-.792h8.336Z' />
    </svg>
  )
}
