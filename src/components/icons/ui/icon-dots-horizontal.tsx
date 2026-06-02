import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIuNjY1IDEyYTEuOTA4IDEuOTA4IDAgMSAxIDMuODE3IDAgMS45MDggMS45MDggMCAwIDEtMy44MTcgMFptNy40MjYgMGExLjkwOSAxLjkwOSAwIDEgMSAzLjgxOCAwIDEuOTA5IDEuOTA5IDAgMCAxLTMuODE4IDBabTcuNDI3IDBhMS45MDggMS45MDggMCAxIDEgMy44MTcgMCAxLjkwOCAxLjkwOCAwIDAgMS0zLjgxNyAwWiIvPjwvc3ZnPg==)
 */
export const IconDotsHorizontal: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M2.665 12a1.908 1.908 0 1 1 3.817 0 1.908 1.908 0 0 1-3.817 0Zm7.426 0a1.909 1.909 0 1 1 3.818 0 1.909 1.909 0 0 1-3.818 0Zm7.427 0a1.908 1.908 0 1 1 3.817 0 1.908 1.908 0 0 1-3.817 0Z' />
    </svg>
  )
}
