import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjc4MiAxNC43MmEuNzUuNzUgMCAwIDEtMS4wNjEgMS4wNmwtNS4zNC01LjMzOWMtLjcwMy0uNzAzLTEuMTc4LTEuMTc2LTEuNTc5LTEuNDgyLS4zODQtLjI5My0uNjEyLS4zNjMtLjgxLS4zNjMtLjE5NyAwLS40MjQuMDctLjgwOC4zNjQtLjQwMS4zMDYtLjg3Ni43OC0xLjU3OCAxLjQ4M0w0LjI4IDE1Ljc4YS43NS43NSAwIDAgMS0xLjA2Mi0xLjA2bDUuMzI1LTUuMzM3Yy42NzMtLjY3MyAxLjIzLTEuMjMzIDEuNzMtMS42MTYuNTE3LS4zOTUgMS4wNjEtLjY3IDEuNzE5LS42Ny42NTctLjAwMSAxLjIwMS4yNzQgMS43Mi42Ny41LjM4MSAxLjA1Ny45NCAxLjczIDEuNjE0bDUuMzQgNS4zMzhaIi8+PC9zdmc+)
 */
export const IconChevronUp: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.782 14.72a.75.75 0 0 1-1.061 1.06l-5.34-5.339c-.703-.703-1.178-1.176-1.579-1.482-.384-.293-.612-.363-.81-.363-.197 0-.424.07-.808.364-.401.306-.876.78-1.578 1.483L4.28 15.78a.75.75 0 0 1-1.062-1.06l5.325-5.337c.673-.673 1.23-1.233 1.73-1.616.517-.395 1.061-.67 1.719-.67.657-.001 1.201.274 1.72.67.5.381 1.057.94 1.73 1.614l5.34 5.338Z' />
    </svg>
  )
}
