import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5Ljc4NCA0LjQ2SDQuMjE2YS43My43MyAwIDEgMSAwLTEuNDZoMTUuNTY4YS43My43MyAwIDAgMSAwIDEuNDZaTTEyLjczIDguODFoNy4wNTRhLjczLjczIDAgMCAwIDAtMS40Nkg0LjIxNmEuNzMuNzMgMCAxIDAgMCAxLjQ2aDcuMDU0djExLjQ2YS43My43MyAwIDAgMCAxLjQ2IDBWOC44MVoiLz48L3N2Zz4=)
 */
export const IconCurrencyKzt: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.784 4.46H4.216a.73.73 0 1 1 0-1.46h15.568a.73.73 0 0 1 0 1.46ZM12.73 8.81h7.054a.73.73 0 0 0 0-1.46H4.216a.73.73 0 1 0 0 1.46h7.054v11.46a.73.73 0 0 0 1.46 0V8.81Z' />
    </svg>
  )
}
