import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjI5MSAxMkE4LjI5MSA4LjI5MSAwIDEgMSAzLjcxIDEyYTguMjkxIDguMjkxIDAgMCAxIDE2LjU4MiAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTkuNTQgMTJhNy41NDEgNy41NDEgMCAxIDAtMTUuMDggMCA3LjU0MSA3LjU0MSAwIDAgMCAxNS4wODIgMFptMS41IDBhOS4wNDEgOS4wNDEgMCAxIDEtMTguMDgyIDAgOS4wNDEgOS4wNDEgMCAwIDEgMTguMDgzIDBaIi8+PHBhdGggZD0iTTExLjI1IDcuNDEzYS43NS43NSAwIDAgMSAxLjUgMHY1LjM2YS43NS43NSAwIDAgMS0xLjUgMHYtNS4zNlptMS45NzQgOC43NDVhMS4yMjQgMS4yMjQgMCAxIDEtMi40NDggMCAxLjIyNCAxLjIyNCAwIDAgMSAyLjQ0OCAwWiIvPjwvc3ZnPg==)
 */
export const IconWarningCircle: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.291 12A8.291 8.291 0 1 1 3.71 12a8.291 8.291 0 0 1 16.582 0Z' opacity='.2' />
      <path d='M19.54 12a7.541 7.541 0 1 0-15.08 0 7.541 7.541 0 0 0 15.082 0Zm1.5 0a9.041 9.041 0 1 1-18.082 0 9.041 9.041 0 0 1 18.083 0Z' />
      <path d='M11.25 7.413a.75.75 0 0 1 1.5 0v5.36a.75.75 0 0 1-1.5 0v-5.36Zm1.974 8.745a1.224 1.224 0 1 1-2.448 0 1.224 1.224 0 0 1 2.448 0Z' />
    </svg>
  )
}
