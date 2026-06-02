import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTkgNi41YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwWm0wIDExYTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwWm0xMSAwYTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNOC4yNSA2LjVhMS43NSAxLjc1IDAgMSAwLTMuNSAwIDEuNzUgMS43NSAwIDAgMCAzLjUgMFptMS41IDBhMy4yNSAzLjI1IDAgMSAxLTYuNSAwIDMuMjUgMy4yNSAwIDAgMSA2LjUgMFptLTEuNSAxMWExLjc1IDEuNzUgMCAxIDAtMy41IDAgMS43NSAxLjc1IDAgMCAwIDMuNSAwWm0xLjUgMGEzLjI1IDMuMjUgMCAxIDEtNi41IDAgMy4yNSAzLjI1IDAgMCAxIDYuNSAwWm05LjUgMGExLjc1IDEuNzUgMCAxIDAtMy41IDAgMS43NSAxLjc1IDAgMCAwIDMuNSAwWm0xLjUgMGEzLjI1IDMuMjUgMCAxIDEtNi41IDAgMy4yNSAzLjI1IDAgMCAxIDYuNSAwWiIvPjxwYXRoIGQ9Ik01Ljc1IDlhLjc1Ljc1IDAgMCAxIDEuNSAwdjZhLjc1Ljc1IDAgMCAxLTEuNSAwVjlabTExLjc1LjgxMmExLjE2OCAxLjE2OCAwIDEgMSAwIDIuMzM3IDEuMTY4IDEuMTY4IDAgMCAxIDAtMi4zMzdaTTE3LjUgNWExLjE2OCAxLjE2OCAwIDEgMSAwIDIuMzM3QTEuMTY4IDEuMTY4IDAgMCAxIDE3LjUgNVoiLz48L3N2Zz4=)
 */
export const IconGitPrDraft: Icon = ({ className, ...props }) => {
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
        d='M9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm11 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
        opacity='.2'
      />
      <path d='M8.25 6.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm1.5 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm-1.5 11a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm1.5 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm9.5 0a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm1.5 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z' />
      <path d='M5.75 9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0V9Zm11.75.812a1.168 1.168 0 1 1 0 2.337 1.168 1.168 0 0 1 0-2.337ZM17.5 5a1.168 1.168 0 1 1 0 2.337A1.168 1.168 0 0 1 17.5 5Z' />
    </svg>
  )
}
