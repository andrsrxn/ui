import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjAzOCA3LjgyM2EuNzUuNzUgMCAwIDEgMS4wNiAxLjA2bC01IDUuMDAyYTEuNzUgMS43NSAwIDAgMS0yLjQ5Mi0uMDE4bC0yLjI3NC0yLjM0YS4yNS4yNSAwIDAgMC0uMzYuMDAyTDUuNzggMTYuOTNoMy4wMjZhLjc1Ljc1IDAgMCAxIDAgMS41SDUuNTYyYTIuMjUgMi4yNSAwIDAgMS0yLjI1LTIuMjV2LTMuMjgyYS43NS43NSAwIDAgMSAxLjUgMHYyLjg3NUw5Ljg5IDEwLjQ5YTEuNzUgMS43NSAwIDAgMSAyLjUxNi0uMDA4bDIuMjc0IDIuMzRhLjI1LjI1IDAgMCAwIC4zNTYuMDAzbDUuMDAxLTUuMDAyWiIvPjwvc3ZnPg==)
 */
export const IconTrendDown: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.038 7.823a.75.75 0 0 1 1.06 1.06l-5 5.002a1.75 1.75 0 0 1-2.492-.018l-2.274-2.34a.25.25 0 0 0-.36.002L5.78 16.93h3.026a.75.75 0 0 1 0 1.5H5.562a2.25 2.25 0 0 1-2.25-2.25v-3.282a.75.75 0 0 1 1.5 0v2.875L9.89 10.49a1.75 1.75 0 0 1 2.516-.008l2.274 2.34a.25.25 0 0 0 .356.003l5.001-5.002Z' />
    </svg>
  )
}
