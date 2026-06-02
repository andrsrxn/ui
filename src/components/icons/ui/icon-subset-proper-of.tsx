import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjI2NCAxOS45NDdhLjczNy43MzcgMCAwIDAgMC0xLjQ3M2gtOS4wNjJjLTEuMTk3IDAtMi42NTQtLjQ4Ny0zLjcxOC0xLjE0OS00LjItMi42MTMtMy45NTktOC44MDUuNDMzLTExLjA4M2E2LjM4MiA2LjM4MiAwIDAgMSAyLjkzOC0uNzE2aDkuNDA5YS43MzcuNzM3IDAgMCAwIDAtMS40NzNoLTkuNDFhNy44NTQgNy44NTQgMCAwIDAtMy42MTUuODgxQzEuODMzIDcuNzM3IDEuNTM1IDE1LjM2IDYuNzA1IDE4LjU3N2MxLjI0OC43NzYgMi45NzEgMS4zNyA0LjQ5NyAxLjM3aDkuMDYyWiIvPjwvc3ZnPg==)
 */
export const IconSubsetProperOf: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.264 19.947a.737.737 0 0 0 0-1.473h-9.062c-1.197 0-2.654-.487-3.718-1.149-4.2-2.613-3.959-8.805.433-11.083a6.382 6.382 0 0 1 2.938-.716h9.409a.737.737 0 0 0 0-1.473h-9.41a7.854 7.854 0 0 0-3.615.881C1.833 7.737 1.535 15.36 6.705 18.577c1.248.776 2.971 1.37 4.497 1.37h9.062Z' />
    </svg>
  )
}
