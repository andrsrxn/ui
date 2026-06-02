import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjUxIDE0Ljc1YS43NS43NSAwIDAgMSAwIDEuNUgzLjQ5YS43NS43NSAwIDAgMSAwLTEuNWgxNy4wMlptMC03YS43NS43NSAwIDAgMSAwIDEuNUgzLjQ5YS43NS43NSAwIDEgMSAwLTEuNWgxNy4wMloiLz48L3N2Zz4=)
 */
export const IconEqual: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.51 14.75a.75.75 0 0 1 0 1.5H3.49a.75.75 0 0 1 0-1.5h17.02Zm0-7a.75.75 0 0 1 0 1.5H3.49a.75.75 0 1 1 0-1.5h17.02Z' />
    </svg>
  )
}
