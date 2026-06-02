import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjU3IDkuMTcxYS43NS43NSAwIDAgMS0xLjA2MSAxLjA2bC00LjIxNS00LjIxM2MtLjY4Mi0uNjgyLTEuMTQyLTEuMTQtMS41My0xLjQzNmwtLjAxNC0uMDF2MTUuNDIyYS43NS43NSAwIDAgMS0xLjUgMFY0LjU2M2wtLjAyNy4wMmMtLjM4Ny4yOTYtLjg0Ni43NTQtMS41MjggMS40MzdsLTQuMjAzIDQuMjEyYS43NS43NSAwIDAgMS0xLjA2Mi0xLjA2TDguNjM0IDQuOTZjLjY1MS0uNjUzIDEuMTkyLTEuMTk3IDEuNjc4LTEuNTcuNTA0LS4zODQgMS4wMzYtLjY1NCAxLjY4LS42NTQuNjQ1IDAgMS4xNzguMjY5IDEuNjgyLjY1My40ODYuMzcxIDEuMDI4LjkxNSAxLjY4IDEuNTY3bDQuMjE1IDQuMjE1WiIvPjwvc3ZnPg==)
 */
export const IconArrowDown: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.57 9.171a.75.75 0 0 1-1.061 1.06l-4.215-4.213c-.682-.682-1.142-1.14-1.53-1.436l-.014-.01v15.422a.75.75 0 0 1-1.5 0V4.563l-.027.02c-.387.296-.846.754-1.528 1.437l-4.203 4.212a.75.75 0 0 1-1.062-1.06L8.634 4.96c.651-.653 1.192-1.197 1.678-1.57.504-.384 1.036-.654 1.68-.654.645 0 1.178.269 1.682.653.486.371 1.028.915 1.68 1.567l4.215 4.215Z' />
    </svg>
  )
}
