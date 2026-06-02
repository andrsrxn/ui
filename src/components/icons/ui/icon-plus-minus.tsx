import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjQ4NSAzLjcxM2EuNzUuNzUgMCAxIDEgMS4wNiAxLjA2TDQuNTE2IDIwLjgwNmEuNzUuNzUgMCAxIDEtMS4wNjEtMS4wNmwxNi4wMy0xNi4wMzNabTEuMDUgMTIuNzk2YS43NS43NSAwIDAgMSAwIDEuNWgtNy4wN2EuNzUuNzUgMCAxIDEgMC0xLjVoNy4wN1pNNi4yNSAxMC43OTNWOC4wMWwtMi43ODQuMDAxYS43NS43NSAwIDEgMSAwLTEuNWgyLjc4M1YzLjcyNGEuNzUuNzUgMCAxIDEgMS41IDB2Mi43ODNoMi43ODVhLjc1Ljc1IDAgMSAxIDAgMS41SDcuNzV2Mi43ODZhLjc1Ljc1IDAgMSAxLTEuNSAwWiIvPjwvc3ZnPg==)
 */
export const IconPlusMinus: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.485 3.713a.75.75 0 1 1 1.06 1.06L4.516 20.806a.75.75 0 1 1-1.061-1.06l16.03-16.033Zm1.05 12.796a.75.75 0 0 1 0 1.5h-7.07a.75.75 0 1 1 0-1.5h7.07ZM6.25 10.793V8.01l-2.784.001a.75.75 0 1 1 0-1.5h2.783V3.724a.75.75 0 1 1 1.5 0v2.783h2.785a.75.75 0 1 1 0 1.5H7.75v2.786a.75.75 0 1 1-1.5 0Z' />
    </svg>
  )
}
