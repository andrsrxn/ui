import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIxLjIzIDEyQTkuMjMgOS4yMyAwIDAgMSAxMiAyMS4yM2E5LjIzIDkuMjMgMCAxIDEgMC0xOC40NkE5LjIzIDkuMjMgMCAwIDEgMjEuMjMgMTJaIi8+PC9zdmc+)
 */
export const IconCircleFilled: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M21.23 12A9.23 9.23 0 0 1 12 21.23a9.23 9.23 0 1 1 0-18.46A9.23 9.23 0 0 1 21.23 12Z' />
    </svg>
  )
}
