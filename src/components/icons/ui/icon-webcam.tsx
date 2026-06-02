import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE1LjgyOCAxMC4xODZhMy44MjggMy44MjggMCAxIDEtNy42NTYgMCAzLjgyOCAzLjgyOCAwIDAgMSA3LjY1NiAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTcuNzAxIDEwLjE4NmE1LjcwMSA1LjcwMSAwIDEgMC0xMS40MDIgMCA1LjcwMSA1LjcwMSAwIDAgMCAxMS40MDIgMFptLTIuNjIzIDBhMy4wNzggMy4wNzggMCAxIDAtNi4xNTcgMCAzLjA3OCAzLjA3OCAwIDAgMCA2LjE1NyAwWm0xLjUgMGE0LjU3OCA0LjU3OCAwIDEgMS05LjE1NiAwIDQuNTc4IDQuNTc4IDAgMCAxIDkuMTU2IDBabTIuNjIzIDBhNy4yMDIgNy4yMDIgMCAwIDEtNi40NTEgNy4xNjJ2Mi4xNjhoMi45ODJhLjc1Ljc1IDAgMCAxIDAgMS41SDguMjY4YS43NS43NSAwIDAgMSAwLTEuNWgyLjk4MnYtMi4xNjhhNy4yMDIgNy4yMDIgMCAxIDEgNy45NTEtNy4xNjJaIi8+PC9zdmc+)
 */
export const IconWebcam: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M15.828 10.186a3.828 3.828 0 1 1-7.656 0 3.828 3.828 0 0 1 7.656 0Z' opacity='.2' />
      <path d='M17.701 10.186a5.701 5.701 0 1 0-11.402 0 5.701 5.701 0 0 0 11.402 0Zm-2.623 0a3.078 3.078 0 1 0-6.157 0 3.078 3.078 0 0 0 6.157 0Zm1.5 0a4.578 4.578 0 1 1-9.156 0 4.578 4.578 0 0 1 9.156 0Zm2.623 0a7.202 7.202 0 0 1-6.451 7.162v2.168h2.982a.75.75 0 0 1 0 1.5H8.268a.75.75 0 0 1 0-1.5h2.982v-2.168a7.202 7.202 0 1 1 7.951-7.162Z' />
    </svg>
  )
}
