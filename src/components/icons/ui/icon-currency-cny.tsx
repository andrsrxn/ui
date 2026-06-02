import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE3LjIyNSA3LjMzMkg2Ljc2N2EuNjkyLjY5MiAwIDEgMSAwLTEuMzg0aDEwLjQ1OGEuNjkyLjY5MiAwIDEgMSAwIDEuMzg0Wm0tNi40NjggNC40MzhoMi4yNnYzLjc3bC4wMDEuMDEzYy4wMTYuNDI1LjE2NiAxLjAzNC41OCAxLjU1Mi40MzcuNTQ4IDEuMTMyLjk0OCAyLjExNi45NDhoMS40NjRjMS4xNDcgMCAyLjA3Ni0uOTMgMi4wNzYtMi4wNzdWMTQuODJhLjY5Mi42OTIgMCAxIDAtMS4zODUgMHYxLjE1NWMwIC4zODItLjMxLjY5Mi0uNjkxLjY5MmgtMS40NjRjLS41NjYgMC0uODYyLS4yMS0xLjAzNC0uNDI2YTEuMzQ3IDEuMzQ3IDAgMCAxLS4yNzgtLjczMnYtMy43NGg1LjkwNmEuNjkyLjY5MiAwIDEgMCAwLTEuMzg0SDMuNjg0YS42OTIuNjkyIDAgMCAwIDAgMS4zODRoNS42ODJjLS4zMzYgMy4yNzUtMy4wMjggNC42MTItNC40MzMgNC44NzRhLjY5My42OTMgMCAwIDAgLjI1NCAxLjM2MWMxLjc2LS4zMjggNS4yMjUtMi4wMjggNS41Ny02LjIzNVoiLz48L3N2Zz4=)
 */
export const IconCurrencyCny: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M17.225 7.332H6.767a.692.692 0 1 1 0-1.384h10.458a.692.692 0 1 1 0 1.384Zm-6.468 4.438h2.26v3.77l.001.013c.016.425.166 1.034.58 1.552.437.548 1.132.948 2.116.948h1.464c1.147 0 2.076-.93 2.076-2.077V14.82a.692.692 0 1 0-1.385 0v1.155c0 .382-.31.692-.691.692h-1.464c-.566 0-.862-.21-1.034-.426a1.347 1.347 0 0 1-.278-.732v-3.74h5.906a.692.692 0 1 0 0-1.384H3.684a.692.692 0 0 0 0 1.384h5.682c-.336 3.275-3.028 4.612-4.433 4.874a.693.693 0 0 0 .254 1.361c1.76-.328 5.225-2.028 5.57-6.235Z' />
    </svg>
  )
}
