import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEyLjc3IDUuMDc3YTQuMzUxIDQuMzUxIDAgMCAxIDYuMTUzIDYuMTU0bC03LjY5MiA3LjY5MmE0LjM1MiA0LjM1MiAwIDAgMS02LjE1NC02LjE1NGw3LjY5Mi03LjY5MloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTYuODU0IDkuOTMxYS43NS43NSAwIDEgMSAxLjA2IDEuMDZMNS42MDggMTMuM2EzLjYwMSAzLjYwMSAwIDEgMCA1LjA5NCA1LjA5MmwyLjMwNy0yLjMwN2EuNzUuNzUgMCAwIDEgMS4wNjEgMS4wNjFsLTIuMzA4IDIuMzA4YTUuMTAyIDUuMTAyIDAgMCAxLTcuMjE0LTcuMjE1bDIuMzA3LTIuMzA4Wm03LjY5My0xLjUzOWEuNzUuNzUgMCAwIDEgMS4wNiAxLjA2MmwtNi4xNTMgNi4xNTNhLjc1MS43NTEgMCAwIDEtMS4wNjItMS4wNmw2LjE1NS02LjE1NVptLTIuMzA4LTMuODQ1YTUuMTAyIDUuMTAyIDAgMCAxIDcuMjE1IDcuMjE0bC0yLjMwOCAyLjMwOGEuNzUxLjc1MSAwIDAgMS0xLjA2MS0xLjA2bDIuMzA3LTIuMzA4QTMuNjAyIDMuNjAyIDAgMCAwIDEzLjMgNS42MDdsLTIuMzA4IDIuMzA4YS43NS43NSAwIDEgMS0xLjA2LTEuMDZsMi4zMDctMi4zMDhaIi8+PC9zdmc+)
 */
export const IconLink: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        d='M12.77 5.077a4.351 4.351 0 0 1 6.153 6.154l-7.692 7.692a4.352 4.352 0 0 1-6.154-6.154l7.692-7.692Z'
        opacity='.2'
      />
      <path d='M6.854 9.931a.75.75 0 1 1 1.06 1.06L5.608 13.3a3.601 3.601 0 1 0 5.094 5.092l2.307-2.307a.75.75 0 0 1 1.061 1.061l-2.308 2.308a5.102 5.102 0 0 1-7.214-7.215l2.307-2.308Zm7.693-1.539a.75.75 0 0 1 1.06 1.062l-6.153 6.153a.751.751 0 0 1-1.062-1.06l6.155-6.155Zm-2.308-3.845a5.102 5.102 0 0 1 7.215 7.214l-2.308 2.308a.751.751 0 0 1-1.061-1.06l2.307-2.308A3.602 3.602 0 0 0 13.3 5.607l-2.308 2.308a.75.75 0 1 1-1.06-1.06l2.307-2.308Z' />
    </svg>
  )
}
