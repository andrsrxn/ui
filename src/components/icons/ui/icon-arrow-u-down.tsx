import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEwLjQwMyAyLjY5YTUuMTYzIDUuMTYzIDAgMCAxIDUuMTYyIDUuMTYzVjE5LjE3Yy4zODMtLjI5Ni44MzgtLjc0OCAxLjUwNy0xLjQxNmwuODc3LS44NzdhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNmwtLjg3Ny44NzhjLS42NTIuNjUyLTEuMTk0IDEuMTk2LTEuNjggMS41NjctLjUwNS4zODQtMS4wMzguNjU1LTEuNjgyLjY1NC0uNjQ1IDAtMS4xNzYtLjI3MS0xLjY4LS42NTYtLjQ4Ni0uMzcyLTEuMDI4LS45MTYtMS42OC0xLjU2OGwtLjg3Mi0uODc1YS43NS43NSAwIDAgMSAxLjA2Mi0xLjA2bC44NzMuODc1Yy42ODEuNjgzIDEuMTQgMS4xNCAxLjUyNyAxLjQzNmwuMDY1LjA0N1Y3Ljg1M2EzLjY2MyAzLjY2MyAwIDEgMC03LjMyNSAwdjEwLjE2YS43NS43NSAwIDAgMS0xLjUgMFY3Ljg1M2E1LjE2MyA1LjE2MyAwIDAgMSA1LjE2My01LjE2M1oiLz48L3N2Zz4=)
 */
export const IconArrowUDown: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M10.403 2.69a5.163 5.163 0 0 1 5.162 5.163V19.17c.383-.296.838-.748 1.507-1.416l.877-.877a.75.75 0 1 1 1.06 1.06l-.877.878c-.652.652-1.194 1.196-1.68 1.567-.505.384-1.038.655-1.682.654-.645 0-1.176-.271-1.68-.656-.486-.372-1.028-.916-1.68-1.568l-.872-.875a.75.75 0 0 1 1.062-1.06l.873.875c.681.683 1.14 1.14 1.527 1.436l.065.047V7.853a3.663 3.663 0 1 0-7.325 0v10.16a.75.75 0 0 1-1.5 0V7.853a5.163 5.163 0 0 1 5.163-5.163Z' />
    </svg>
  )
}
