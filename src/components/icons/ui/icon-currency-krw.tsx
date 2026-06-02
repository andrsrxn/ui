import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4xOTkgMTEuMzRIMy4yNzdhLjY4NS42ODUgMCAxIDAgMCAxLjM3aDIuMzVsMS41MTcgNC44NWMuMzM2IDEuMDc2IDEuODYzIDEuMDY0IDIuMTgzLS4wMTdsMS40My00LjgzM2gyLjk1OWwxLjM3IDQuNzRjLjMxOSAxLjEwMiAxLjg3OSAxLjA5OSAyLjE5NC0uMDAzbDEuMzUyLTQuNzM3aDIuMDlhLjY4NS42ODUgMCAxIDAgMC0xLjM3aC0xLjY5OGwxLjMwOC00LjU4MmEuNjg1LjY4NSAwIDEgMC0xLjMxNy0uMzc2TDE3LjYgMTEuMzQxaC0yLjg1NGwtMS4zOTItNC44MTQtLjAzMy0uMWMtLjM2Ny0uOTYyLTEuNzUtLjk2Ny0yLjEyMy0uMDA3bC0uMDM0LjEtMS40MjggNC44Mkg2LjYzM0w1LjA3OCA2LjM2N2EuNjg1LjY4NSAwIDAgMC0xLjMwNy40MDhsMS40MjggNC41NjdabTUuOTY0IDBoMi4xNTZsLTEuMDY1LTMuNjgzLTEuMDkgMy42ODRabS00LjEwMiAxLjM3SDkuMzNsLTEuMTAzIDMuNzI1LTEuMTY1LTMuNzI1Wm04LjA4IDBoMi4wNjdsLTEuMDI4IDMuNTk4LTEuMDQtMy41OThaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)
 */
export const IconCurrencyKrw: Icon = ({ className, ...props }) => {
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
        fillRule='evenodd'
        d='M5.199 11.34H3.277a.685.685 0 1 0 0 1.37h2.35l1.517 4.85c.336 1.076 1.863 1.064 2.183-.017l1.43-4.833h2.959l1.37 4.74c.319 1.102 1.879 1.099 2.194-.003l1.352-4.737h2.09a.685.685 0 1 0 0-1.37h-1.698l1.308-4.582a.685.685 0 1 0-1.317-.376L17.6 11.341h-2.854l-1.392-4.814-.033-.1c-.367-.962-1.75-.967-2.123-.007l-.034.1-1.428 4.82H6.633L5.078 6.367a.685.685 0 0 0-1.307.408l1.428 4.567Zm5.964 0h2.156l-1.065-3.683-1.09 3.684Zm-4.102 1.37H9.33l-1.103 3.725-1.165-3.725Zm8.08 0h2.067l-1.028 3.598-1.04-3.598Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
