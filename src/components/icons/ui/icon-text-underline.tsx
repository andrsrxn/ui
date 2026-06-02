import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5Ljc1OSAxOS41NTJhLjc1Ljc1IDAgMCAxIDAgMS41SDQuMjRhLjc1Ljc1IDAgMCAxIDAtMS41aDE1LjUyWk01LjQzMSAxMS4wMTR2LTcuMTlhLjc1Ljc1IDAgMCAxIDEuNSAwdjcuMTljMCAzLjI4NyAyLjQ5IDUuNDIgNS4wNyA1LjQyIDIuNTc5IDAgNS4wNjgtMi4xMzMgNS4wNjgtNS40MlYzLjgyMWEuNzUuNzUgMCAwIDEgMS41IDB2Ny4xOTNjMCA0LjExNy0zLjE2MiA2LjkyLTYuNTY5IDYuOTItMy40MDYgMC02LjU2OS0yLjgwMy02LjU2OS02LjkyWiIvPjwvc3ZnPg==)
 */
export const IconTextUnderline: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.759 19.552a.75.75 0 0 1 0 1.5H4.24a.75.75 0 0 1 0-1.5h15.52ZM5.431 11.014v-7.19a.75.75 0 0 1 1.5 0v7.19c0 3.287 2.49 5.42 5.07 5.42 2.579 0 5.068-2.133 5.068-5.42V3.821a.75.75 0 0 1 1.5 0v7.193c0 4.117-3.162 6.92-6.569 6.92-3.406 0-6.569-2.803-6.569-6.92Z' />
    </svg>
  )
}
