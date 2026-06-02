import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjQ4IDEyYTguNDggOC40OCAwIDEgMS0xNi45NiAwIDguNDggOC40OCAwIDAgMSAxNi45NiAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTkuNzMgMTJhNy43MyA3LjczIDAgMSAwLTE1LjQ2IDAgNy43MyA3LjczIDAgMCAwIDE1LjQ2IDBabTEuNSAwQTkuMjMgOS4yMyAwIDAgMSAxMiAyMS4yM2E5LjIzIDkuMjMgMCAxIDEgMC0xOC40NkE5LjIzIDkuMjMgMCAwIDEgMjEuMjMgMTJaIi8+PC9zdmc+)
 */
export const IconCircle: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.48 12a8.48 8.48 0 1 1-16.96 0 8.48 8.48 0 0 1 16.96 0Z' opacity='.2' />
      <path d='M19.73 12a7.73 7.73 0 1 0-15.46 0 7.73 7.73 0 0 0 15.46 0Zm1.5 0A9.23 9.23 0 0 1 12 21.23a9.23 9.23 0 1 1 0-18.46A9.23 9.23 0 0 1 21.23 12Z' />
    </svg>
  )
}
