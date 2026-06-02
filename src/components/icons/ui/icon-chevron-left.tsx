import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE0Ljg3MyAzLjIxOWEuNzUuNzUgMCAwIDEgMS4wNiAxLjA2bC01LjMzOCA1LjM0Yy0uNzAzLjcwMy0xLjE3NiAxLjE3OC0xLjQ4MyAxLjU3OS0uMjkzLjM4NC0uMzYyLjYxMi0uMzYyLjgxIDAgLjE5Ny4wNy40MjQuMzYzLjgwOC4zMDcuNDAxLjc4Ljg3NiAxLjQ4NCAxLjU3OGw1LjMzNyA1LjMyN2EuNzUuNzUgMCAwIDEtMS4wNiAxLjA2MWwtNS4zMzctNS4zMjVjLS42NzQtLjY3My0xLjIzNC0xLjIzLTEuNjE2LTEuNzMtLjM5Ni0uNTE3LS42Ny0xLjA2MS0uNjcxLTEuNzE5IDAtLjY1Ny4yNzUtMS4yMDEuNjctMS43Mi4zODItLjUuOTQxLTEuMDU3IDEuNjE0LTEuNzNsNS4zMzktNS4zNFoiLz48L3N2Zz4=)
 */
export const IconChevronLeft: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M14.873 3.219a.75.75 0 0 1 1.06 1.06l-5.338 5.34c-.703.703-1.176 1.178-1.483 1.579-.293.384-.362.612-.362.81 0 .197.07.424.363.808.307.401.78.876 1.484 1.578l5.337 5.327a.75.75 0 0 1-1.06 1.061l-5.337-5.325c-.674-.673-1.234-1.23-1.616-1.73-.396-.517-.67-1.061-.671-1.719 0-.657.275-1.201.67-1.72.382-.5.941-1.057 1.614-1.73l5.339-5.34Z' />
    </svg>
  )
}
