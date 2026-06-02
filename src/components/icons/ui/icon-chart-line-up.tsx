import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMuMDI4IDE4LjcyM1YzLjY1NGEuNzUuNzUgMCAwIDEgMS41IDB2MTUuMDY5YzAgLjQxNC4zMzYuNzUuNzUuNzVoMTUuMDc0YS43NS43NSAwIDAgMSAwIDEuNUg1LjI3OGEyLjI1IDIuMjUgMCAwIDEtMi4yNS0yLjI1Wk0xOC43NiA4LjE3OWEuNzUuNzUgMCAxIDEgMS4wODEgMS4wMzlsLTQuMzE0IDQuNDlhMS43NSAxLjc1IDAgMCAxLTIuNTE3LjAwN2wtMS43MTUtMS43NjVhLjI1LjI1IDAgMCAwLS4zNTYtLjAwM0w3LjE4IDE1LjcxYS43NS43NSAwIDAgMS0xLjA2MS0xLjA2bDMuNzYtMy43NjJhMS43NSAxLjc1IDAgMCAxIDIuNDkzLjAxN2wxLjcxNCAxLjc2NWEuMjUuMjUgMCAwIDAgLjM2IDBsNC4zMTUtNC40OVoiLz48L3N2Zz4=)
 */
export const IconChartLineUp: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M3.028 18.723V3.654a.75.75 0 0 1 1.5 0v15.069c0 .414.336.75.75.75h15.074a.75.75 0 0 1 0 1.5H5.278a2.25 2.25 0 0 1-2.25-2.25ZM18.76 8.179a.75.75 0 1 1 1.081 1.039l-4.314 4.49a1.75 1.75 0 0 1-2.517.007l-1.715-1.765a.25.25 0 0 0-.356-.003L7.18 15.71a.75.75 0 0 1-1.061-1.06l3.76-3.762a1.75 1.75 0 0 1 2.493.017l1.714 1.765a.25.25 0 0 0 .36 0l4.315-4.49Z' />
    </svg>
  )
}
