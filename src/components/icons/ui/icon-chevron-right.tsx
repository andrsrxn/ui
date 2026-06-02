import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTkuMjggMy4yMTlhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNmw1LjMzOSA1LjM0Yy43MDMuNzAzIDEuMTc2IDEuMTc4IDEuNDgyIDEuNTc5LjI5My4zODQuMzYzLjYxMi4zNjMuODEgMCAuMTk3LS4wNy40MjQtLjM2NC44MDgtLjMwNi40MDEtLjc4Ljg3Ni0xLjQ4MyAxLjU3OEw4LjIyIDE5LjcyMWEuNzUuNzUgMCAwIDAgMS4wNiAxLjA2MWw1LjMzNy01LjMyNWMuNjczLS42NzMgMS4yMzMtMS4yMyAxLjYxNi0xLjczLjM5NS0uNTE3LjY3LTEuMDYxLjY3LTEuNzE5LjAwMS0uNjU3LS4yNzQtMS4yMDEtLjY3LTEuNzItLjM4MS0uNS0uOTQtMS4wNTctMS42MTQtMS43M2wtNS4zMzgtNS4zNFoiLz48L3N2Zz4=)
 */
export const IconChevronRight: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M9.28 3.219a.75.75 0 0 0-1.06 1.06l5.339 5.34c.703.703 1.176 1.178 1.482 1.579.293.384.363.612.363.81 0 .197-.07.424-.364.808-.306.401-.78.876-1.483 1.578L8.22 19.721a.75.75 0 0 0 1.06 1.061l5.337-5.325c.673-.673 1.233-1.23 1.616-1.73.395-.517.67-1.061.67-1.719.001-.657-.274-1.201-.67-1.72-.381-.5-.94-1.057-1.614-1.73l-5.338-5.34Z' />
    </svg>
  )
}
