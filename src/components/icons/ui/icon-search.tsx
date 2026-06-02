import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE3LjE1NCAxMC40MDJhNi44NzMgNi44NzMgMCAxIDEtMTMuNzQ2IDAgNi44NzMgNi44NzMgMCAwIDEgMTMuNzQ2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xNi42NTMgMTAuNTRhNi4xMjMgNi4xMjMgMCAxIDAtMTIuMjQ2IDAgNi4xMjMgNi4xMjMgMCAwIDAgMTIuMjQ2IDBabTEuNSAwYTcuNTkyIDcuNTkyIDAgMCAxLTEuNjgyIDQuNzc1bDQuNDAyIDQuNDAzYS43NS43NSAwIDAgMS0xLjA2IDEuMDZsLTQuMzkyLTQuMzkxYTcuNjIzIDcuNjIzIDAgMSAxIDIuNzMyLTUuODQ3WiIvPjwvc3ZnPg==)
 */
export const IconSearch: Icon = ({ className, ...props }) => {
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
        d='M17.154 10.402a6.873 6.873 0 1 1-13.746 0 6.873 6.873 0 0 1 13.746 0Z'
        opacity='.2'
      />
      <path d='M16.653 10.54a6.123 6.123 0 1 0-12.246 0 6.123 6.123 0 0 0 12.246 0Zm1.5 0a7.592 7.592 0 0 1-1.682 4.775l4.402 4.403a.75.75 0 0 1-1.06 1.06l-4.392-4.391a7.623 7.623 0 1 1 2.732-5.847Z' />
    </svg>
  )
}
