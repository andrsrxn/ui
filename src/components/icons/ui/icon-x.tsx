import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjQ1MSAzLjQ4NmEuNzUuNzUgMCAwIDEgMS4wNiAxLjA2bC03LjQ1NCA3LjQ1NSA3LjQ1NSA3LjQ1NWEuNzUuNzUgMCAxIDEtMS4wNiAxLjA2MWwtNy40NTYtNy40NTUtNy40NTUgNy40NTVhLjc1Ljc1IDAgMSAxLTEuMDYtMS4wNkwxMC45MzYgMTIgMy40OCA0LjU0NmEuNzUuNzUgMCAxIDEgMS4wNi0xLjA2bDcuNDU1IDcuNDU1IDcuNDU1LTcuNDU1WiIvPjwvc3ZnPg==)
 */
export const IconX: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.451 3.486a.75.75 0 0 1 1.06 1.06l-7.454 7.455 7.455 7.455a.75.75 0 1 1-1.06 1.061l-7.456-7.455-7.455 7.455a.75.75 0 1 1-1.06-1.06L10.936 12 3.48 4.546a.75.75 0 1 1 1.06-1.06l7.455 7.455 7.455-7.455Z' />
    </svg>
  )
}
