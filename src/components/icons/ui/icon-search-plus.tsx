import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE3LjE1NCAxMC4yOTJhNi44NzMgNi44NzMgMCAxIDEtMTMuNzQ2IDAgNi44NzMgNi44NzMgMCAwIDEgMTMuNzQ2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xNi42NTMgMTAuNTU2YTYuMTIzIDYuMTIzIDAgMSAwLTEyLjI0NiAwIDYuMTIzIDYuMTIzIDAgMCAwIDEyLjI0NiAwWm0xLjUgMGE3LjU5MiA3LjU5MiAwIDAgMS0xLjY4MiA0Ljc3Nmw0LjQwMiA0LjQwMmEuNzUuNzUgMCAwIDEtMS4wNiAxLjA2bC00LjM5Mi00LjM5YTcuNjIzIDcuNjIzIDAgMSAxIDIuNzMyLTUuODQ3WiIvPjxwYXRoIGQ9Ik05Ljc1NiAxMy45MDJ2LTIuNTM4SDcuMjA4YS43NS43NSAwIDAgMSAwLTEuNWgyLjU0OFY3LjMxNmEuNzUuNzUgMCAxIDEgMS41IDB2Mi41NDhoMi41MzdhLjc1Ljc1IDAgMSAxIDAgMS41aC0yLjUzN3YyLjUzN2EuNzUuNzUgMCAwIDEtMS41IDBaIi8+PC9zdmc+)
 */
export const IconSearchPlus: Icon = ({ className, ...props }) => {
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
        d='M17.154 10.292a6.873 6.873 0 1 1-13.746 0 6.873 6.873 0 0 1 13.746 0Z'
        opacity='.2'
      />
      <path d='M16.653 10.556a6.123 6.123 0 1 0-12.246 0 6.123 6.123 0 0 0 12.246 0Zm1.5 0a7.592 7.592 0 0 1-1.682 4.776l4.402 4.402a.75.75 0 0 1-1.06 1.06l-4.392-4.39a7.623 7.623 0 1 1 2.732-5.847Z' />
      <path d='M9.756 13.902v-2.538H7.208a.75.75 0 0 1 0-1.5h2.548V7.316a.75.75 0 1 1 1.5 0v2.548h2.537a.75.75 0 1 1 0 1.5h-2.537v2.537a.75.75 0 0 1-1.5 0Z' />
    </svg>
  )
}
