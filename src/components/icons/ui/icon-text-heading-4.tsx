import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0ibTE2Ljk1IDE3LjM0MSAxLjc0OC0yLjEyN2EuNS41IDAgMCAxIC44ODYuMzE4djIuMTI3YS41LjUgMCAwIDEtLjUuNWgtMS43NDdhLjUuNSAwIDAgMS0uMzg2LS44MThaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xOC40MTUgMTMuODM1Yy43MjMtLjk2NiAyLjI2LS40NDggMi4yNTEuNzU4bC0uMDIxIDMuMDNoLjA2YS43NS43NSAwIDEgMSAwIDEuNWgtLjA3MmwtLjAwOSAxLjI4NGEuNzUuNzUgMCAwIDEtMS41LS4wMWwuMDA5LTEuMjczSDE2Ljk1Yy0xLjAzIDAtMS42MTctMS4xNzYtMS0ybDIuNDY1LTMuMjlabS01LjY3IDQuNjY1di02LjYyNGgtNy40OVYxOC41YS43NS43NSAwIDAgMS0xLjUgMFYzLjc1YS43NS43NSAwIDAgMSAxLjUgMHY2LjYyNmg3LjQ5VjMuNzVhLjc1Ljc1IDAgMCAxIDEuNSAwVjE4LjVhLjc1Ljc1IDAgMCAxLTEuNSAwWm00LjcwNS0uODc2aDEuNjk1bC4wMTUtMi4yODMtMS43MSAyLjI4M1oiLz48L3N2Zz4=)
 */
export const IconTextHeading4: Icon = ({ className, ...props }) => {
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
        d='m16.95 17.341 1.748-2.127a.5.5 0 0 1 .886.318v2.127a.5.5 0 0 1-.5.5h-1.747a.5.5 0 0 1-.386-.818Z'
        opacity='.2'
      />
      <path d='M18.415 13.835c.723-.966 2.26-.448 2.251.758l-.021 3.03h.06a.75.75 0 1 1 0 1.5h-.072l-.009 1.284a.75.75 0 0 1-1.5-.01l.009-1.273H16.95c-1.03 0-1.617-1.176-1-2l2.465-3.29Zm-5.67 4.665v-6.624h-7.49V18.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 1.5 0v6.626h7.49V3.75a.75.75 0 0 1 1.5 0V18.5a.75.75 0 0 1-1.5 0Zm4.705-.876h1.695l.015-2.283-1.71 2.283Z' />
    </svg>
  )
}
