import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE3LjE1NCAxMC40M2E2Ljg3MyA2Ljg3MyAwIDEgMS0xMy43NDYgMCA2Ljg3MyA2Ljg3MyAwIDAgMSAxMy43NDYgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE2LjY1MyAxMC41NjdhNi4xMjMgNi4xMjMgMCAxIDAtMTIuMjQ2IDAgNi4xMjMgNi4xMjMgMCAwIDAgMTIuMjQ2IDBabTEuNSAwYTcuNTkyIDcuNTkyIDAgMCAxLTEuNjgyIDQuNzc2bDQuNDAyIDQuNDAyYS43NS43NSAwIDAgMS0xLjA2IDEuMDZsLTQuMzkyLTQuMzkxYTcuNjIzIDcuNjIzIDAgMSAxIDIuNzMyLTUuODQ3WiIvPjxwYXRoIGQ9Ik0xMy43OTMgMTEuMzc1SDcuMjA4YS43NS43NSAwIDAgMSAwLTEuNWg2LjU4NWEuNzUuNzUgMCAwIDEgMCAxLjVaIi8+PC9zdmc+)
 */
export const IconSearchMinus: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M17.154 10.43a6.873 6.873 0 1 1-13.746 0 6.873 6.873 0 0 1 13.746 0Z' opacity='.2' />
      <path d='M16.653 10.567a6.123 6.123 0 1 0-12.246 0 6.123 6.123 0 0 0 12.246 0Zm1.5 0a7.592 7.592 0 0 1-1.682 4.776l4.402 4.402a.75.75 0 0 1-1.06 1.06l-4.392-4.391a7.623 7.623 0 1 1 2.732-5.847Z' />
      <path d='M13.793 11.375H7.208a.75.75 0 0 1 0-1.5h6.585a.75.75 0 0 1 0 1.5Z' />
    </svg>
  )
}
