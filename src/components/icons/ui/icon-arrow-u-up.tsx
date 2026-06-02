import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEwLjQwMyAyMS4wMzdhNS4xNjMgNS4xNjMgMCAwIDAgNS4xNjItNS4xNjNWNC41NTZjLjM4My4yOTYuODM4Ljc0OCAxLjUwNyAxLjQxNmwuODc3Ljg3N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2bC0uODc3LS44NzhjLS42NTItLjY1Mi0xLjE5NC0xLjE5Ni0xLjY4LTEuNTY3LS41MDUtLjM4NS0xLjAzOC0uNjU1LTEuNjgyLS42NTQtLjY0NSAwLTEuMTc2LjI3LTEuNjguNjU2LS40ODYuMzcyLTEuMDI4LjkxNS0xLjY4IDEuNTY4bC0uODcyLjg3NUEuNzUuNzUgMCAwIDAgMTEuNiA2Ljg1bC44NzMtLjg3NWMuNjgxLS42ODMgMS4xNC0xLjE0IDEuNTI3LTEuNDM3bC4wNjUtLjA0N3YxMS4zODRhMy42NjMgMy42NjMgMCAxIDEtNy4zMjUgMFY1LjcxNGEuNzUuNzUgMCAwIDAtMS41IDB2MTAuMTZhNS4xNjMgNS4xNjMgMCAwIDAgNS4xNjMgNS4xNjNaIi8+PC9zdmc+)
 */
export const IconArrowUUp: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M10.403 21.037a5.163 5.163 0 0 0 5.162-5.163V4.556c.383.296.838.748 1.507 1.416l.877.877a.75.75 0 1 0 1.06-1.06l-.877-.878c-.652-.652-1.194-1.196-1.68-1.567-.505-.385-1.038-.655-1.682-.654-.645 0-1.176.27-1.68.656-.486.372-1.028.915-1.68 1.568l-.872.875A.75.75 0 0 0 11.6 6.85l.873-.875c.681-.683 1.14-1.14 1.527-1.437l.065-.047v11.384a3.663 3.663 0 1 1-7.325 0V5.714a.75.75 0 0 0-1.5 0v10.16a5.163 5.163 0 0 0 5.163 5.163Z' />
    </svg>
  )
}
