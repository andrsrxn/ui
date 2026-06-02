import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTExLjI1IDIwLjQ5NXYtMy4wNGEuNzUuNzUgMCAwIDEgMS41IDB2My4wNGEuNzUuNzUgMCAwIDEtMS41IDBabS0zLjYzOC01LjE2OGEuNzUuNzUgMCAwIDEgMS4wNiAxLjA2bC0yLjE0OSAyLjE1YS43NS43NSAwIDEgMS0xLjA2LTEuMDZsMi4xNS0yLjE1Wm03LjcxNSAwYS43NS43NSAwIDAgMSAxLjA2IDBsMi4xNSAyLjE1YS43NS43NSAwIDEgMS0xLjA2IDEuMDZsLTIuMTUtMi4xNWEuNzUuNzUgMCAwIDEgMC0xLjA2Wk02LjU0NSAxMS4yNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuMDRhLjc1Ljc1IDAgMCAxIDAtMS41aDMuMDRabTEzLjk1IDBhLjc1Ljc1IDAgMCAxIDAgMS41aC0zLjA0YS43NS43NSAwIDAgMSAwLTEuNWgzLjA0Wk01LjQ2MyA1LjQ2M2EuNzUuNzUgMCAwIDEgMS4wNiAwbDIuMTUgMi4xNWEuNzUuNzUgMCAxIDEtMS4wNiAxLjA2bC0yLjE1LTIuMTVhLjc1Ljc1IDAgMCAxIDAtMS4wNlptMTIuMDEzIDBhLjc1Ljc1IDAgMCAxIDEuMDYgMS4wNmwtMi4xNDkgMi4xNWEuNzUuNzUgMCAxIDEtMS4wNi0xLjA2bDIuMTUtMi4xNVpNMTEuMjUgNi41NDV2LTMuMDRhLjc1Ljc1IDAgMCAxIDEuNSAwdjMuMDRhLjc1Ljc1IDAgMCAxLTEuNSAwWiIvPjwvc3ZnPg==)
 */
export const IconSpinner: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M11.25 20.495v-3.04a.75.75 0 0 1 1.5 0v3.04a.75.75 0 0 1-1.5 0Zm-3.638-5.168a.75.75 0 0 1 1.06 1.06l-2.149 2.15a.75.75 0 1 1-1.06-1.06l2.15-2.15Zm7.715 0a.75.75 0 0 1 1.06 0l2.15 2.15a.75.75 0 1 1-1.06 1.06l-2.15-2.15a.75.75 0 0 1 0-1.06ZM6.545 11.25a.75.75 0 0 1 0 1.5h-3.04a.75.75 0 0 1 0-1.5h3.04Zm13.95 0a.75.75 0 0 1 0 1.5h-3.04a.75.75 0 0 1 0-1.5h3.04ZM5.463 5.463a.75.75 0 0 1 1.06 0l2.15 2.15a.75.75 0 1 1-1.06 1.06l-2.15-2.15a.75.75 0 0 1 0-1.06Zm12.013 0a.75.75 0 0 1 1.06 1.06l-2.149 2.15a.75.75 0 1 1-1.06-1.06l2.15-2.15ZM11.25 6.545v-3.04a.75.75 0 0 1 1.5 0v3.04a.75.75 0 0 1-1.5 0Z' />
    </svg>
  )
}
