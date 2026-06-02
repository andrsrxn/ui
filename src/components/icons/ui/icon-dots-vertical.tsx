import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEyIDIuNjY1YTEuOTA4IDEuOTA4IDAgMSAxIDAgMy44MTcgMS45MDggMS45MDggMCAwIDEgMC0zLjgxN1ptMCA3LjQyNmExLjkwOCAxLjkwOCAwIDEgMSAwIDMuODE3IDEuOTA4IDEuOTA4IDAgMCAxIDAtMy44MTZabTAgNy40MjdhMS45MDggMS45MDggMCAxIDEgMCAzLjgxNyAxLjkwOCAxLjkwOCAwIDAgMSAwLTMuODE3WiIvPjwvc3ZnPg==)
 */
export const IconDotsVertical: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M12 2.665a1.908 1.908 0 1 1 0 3.817 1.908 1.908 0 0 1 0-3.817Zm0 7.426a1.908 1.908 0 1 1 0 3.817 1.908 1.908 0 0 1 0-3.816Zm0 7.427a1.908 1.908 0 1 1 0 3.817 1.908 1.908 0 0 1 0-3.817Z' />
    </svg>
  )
}
