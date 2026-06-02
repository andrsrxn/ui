import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTExLjIzOCAyMC41OXYtNi43N2wtNC43ODIgNC43ODNhLjc1Ljc1IDAgMCAxLTEuMDYtMS4wNmw0Ljc5MS00Ljc5M2gtNi43OGEuNzUuNzUgMCAwIDEgMC0xLjVoNi43NzdMNS4zOTUgNi40NjFhLjc1Ljc1IDAgMCAxIDEuMDYtMS4wNmw0Ljc4MyA0Ljc4MlYzLjQyYS43NS43NSAwIDAgMSAxLjUgMHY2Ljc4bDQuNzk5LTQuOGEuNzUuNzUgMCAwIDEgMS4wNiAxLjA2MWwtNC43ODkgNC43OWg2Ljc3YS43NS43NSAwIDAgMSAwIDEuNWgtNi43NzNsNC43OTIgNC43OTFhLjc1Ljc1IDAgMCAxLTEuMDYgMS4wNmwtNC43OTktNC43OTh2Ni43ODZhLjc1Ljc1IDAgMCAxLTEuNSAwWiIvPjwvc3ZnPg==)
 */
export const IconAsterisk: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M11.238 20.59v-6.77l-4.782 4.783a.75.75 0 0 1-1.06-1.06l4.791-4.793h-6.78a.75.75 0 0 1 0-1.5h6.777L5.395 6.461a.75.75 0 0 1 1.06-1.06l4.783 4.782V3.42a.75.75 0 0 1 1.5 0v6.78l4.799-4.8a.75.75 0 0 1 1.06 1.061l-4.789 4.79h6.77a.75.75 0 0 1 0 1.5h-6.773l4.792 4.791a.75.75 0 0 1-1.06 1.06l-4.799-4.798v6.786a.75.75 0 0 1-1.5 0Z' />
    </svg>
  )
}
