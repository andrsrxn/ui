import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC4yMTEgMy4yMDggNi44NiA1Ljg1N2wuMzc2LS4yMzVhNy42IDcuNiAwIDAgMSA0LjAxNC0xLjE0N2g4LjQ2M2EuNzkuNzkgMCAwIDEgMCAxLjU4MUgxMS4yNWMtMS4xMjMgMC0yLjI4OS4zNTUtMy4yNDMuOTQ4bDQuMjA0IDQuMjA0aDcuNTExYS43OS43OSAwIDAgMSAwIDEuNTgyaC01LjkyOWw1LjE1NCA1LjE1NGguNzY2YS43OS43OSAwIDAgMSAuNTcxIDEuMzM3bC41MDguNTA4YS43MS43MSAwIDAgMS0xLjAwMyAxLjAwM2wtMS4yNjctMS4yNjdoLTcuNTk2YTcuNDQgNy40NCAwIDAgMS0zLjQyMy0uODM0QzIuODY5IDE2LjI4OCAyLjE5NyAxMC4xNDYgNS43NCA2Ljc0NEwzLjIwOCA0LjIxQS43MS43MSAwIDEgMSA0LjIxIDMuMjA4Wm0yLjY1IDQuNjU2YTUuNzYzIDUuNzYzIDAgMCAwLTEuNzI4IDMuMzQ0aDUuMDcyTDYuODYxIDcuODY0Wm00LjkyNiA0LjkyNkg1LjExMmE1Ljc4NyA1Ljc4NyAwIDAgMCAzLjExNyA0LjQ5NiA1Ljg2IDUuODYgMCAwIDAgMi42OTYuNjU4aDYuMDE1bC01LjE1NC01LjE1NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)
 */
export const IconMemberOf: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fillRule='evenodd'
        d='M4.211 3.208 6.86 5.857l.376-.235a7.6 7.6 0 0 1 4.014-1.147h8.463a.79.79 0 0 1 0 1.581H11.25c-1.123 0-2.289.355-3.243.948l4.204 4.204h7.511a.79.79 0 0 1 0 1.582h-5.929l5.154 5.154h.766a.79.79 0 0 1 .571 1.337l.508.508a.71.71 0 0 1-1.003 1.003l-1.267-1.267h-7.596a7.44 7.44 0 0 1-3.423-.834C2.869 16.288 2.197 10.146 5.74 6.744L3.208 4.21A.71.71 0 1 1 4.21 3.208Zm2.65 4.656a5.763 5.763 0 0 0-1.728 3.344h5.072L6.861 7.864Zm4.926 4.926H5.112a5.787 5.787 0 0 0 3.117 4.496 5.86 5.86 0 0 0 2.696.658h6.015l-5.154-5.154Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
