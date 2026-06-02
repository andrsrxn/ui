import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0ibTMuNjE2IDEwLjQ3NCAyLjY4Ny01LjM2NmExIDEgMCAwIDEgLjg5NC0uNTUyaDkuNTgxYTEgMSAwIDAgMSAuODkzLjU0OWwyLjcxIDUuMzY3YTEgMSAwIDAgMS0uMTQ2IDEuMTE2bC03LjQ5NyA4LjQyMmExIDEgMCAwIDEtMS40OTUtLjAwMWwtNy40OC04LjQyM2ExIDEgMCAwIDEtLjE0Ny0xLjExMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE2Ljc3OCAzLjgwNmMuNjYgMCAxLjI2NS4zNzEgMS41NjMuOTZsMi43MSA1LjM2OWExLjc1IDEuNzUgMCAwIDEtLjI1NSAxLjk1MmwtNy40OTggOC40MjJhMS43NSAxLjc1IDAgMCAxLTIuNjE2LS4wMDJsLTcuNDgtOC40MjNhMS43NSAxLjc1IDAgMCAxLS4yNTctMS45NDVsMi42ODctNS4zNjdhMS43NTEgMS43NTEgMCAwIDEgMS41NjUtLjk2Nmg5LjU4MVptLTkuNTggMS41YS4yNS4yNSAwIDAgMC0uMjI0LjEzN0w0LjI4NiAxMC44MWEuMjUuMjUgMCAwIDAgLjAzNy4yNzhsNy40ODIgOC40MjNhLjI1LjI1IDAgMCAwIC4zNzMgMGw3LjQ5Ny04LjQyMmEuMjUuMjUgMCAwIDAgLjAzNy0uMjc5bC0yLjcxLTUuMzY3YS4yNS4yNSAwIDAgMC0uMjI0LS4xMzdoLTkuNThaIi8+PC9zdmc+)
 */
export const IconDiamond: Icon = ({ className, ...props }) => {
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
        d='m3.616 10.474 2.687-5.366a1 1 0 0 1 .894-.552h9.581a1 1 0 0 1 .893.549l2.71 5.367a1 1 0 0 1-.146 1.116l-7.497 8.422a1 1 0 0 1-1.495-.001l-7.48-8.423a1 1 0 0 1-.147-1.112Z'
        opacity='.2'
      />
      <path d='M16.778 3.806c.66 0 1.265.371 1.563.96l2.71 5.369a1.75 1.75 0 0 1-.255 1.952l-7.498 8.422a1.75 1.75 0 0 1-2.616-.002l-7.48-8.423a1.75 1.75 0 0 1-.257-1.945l2.687-5.367a1.751 1.751 0 0 1 1.565-.966h9.581Zm-9.58 1.5a.25.25 0 0 0-.224.137L4.286 10.81a.25.25 0 0 0 .037.278l7.482 8.423a.25.25 0 0 0 .373 0l7.497-8.422a.25.25 0 0 0 .037-.279l-2.71-5.367a.25.25 0 0 0-.224-.137h-9.58Z' />
    </svg>
  )
}
