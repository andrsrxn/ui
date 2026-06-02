import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTkgNi41YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwWm0wIDExYTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwWk0yMCAxMmEyLjUgMi41IDAgMSAxLTUgMCAyLjUgMi41IDAgMCAxIDUgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTguMjUgMTcuNWExLjc1IDEuNzUgMCAxIDAtMy41IDAgMS43NSAxLjc1IDAgMCAwIDMuNSAwWm0xMS01LjVhMS43NSAxLjc1IDAgMSAwLTMuNSAwIDEuNzUgMS43NSAwIDAgMCAzLjUgMFptLTExLTUuNWExLjc1IDEuNzUgMCAxIDAtMy41IDAgMS43NSAxLjc1IDAgMCAwIDMuNSAwWm0xLjUgMGMwIDEuMjgtLjc0IDIuMzg1LTEuODE0IDIuOTE1bDEuMzk4IDEuMTIxYy41ODIuNDY3Ljc0Mi41ODMuOTE1LjY0NC4xNzMuMDYuMzcuMDcgMS4xMTcuMDdoMi45NzJhMy4yNSAzLjI1IDAgMSAxIDAgMS41aC0yLjk3MmMtLjY0NCAwLTEuMTQ0LjAxLTEuNjE0LS4xNTUtLjQ3LS4xNjUtLjg1NC0uNDg2LTEuMzU2LS44ODlsLTEuMTQ2LS45MTh2My41NWEzLjI1IDMuMjUgMCAxIDEtMS41IDBWOS42NmEzLjI1IDMuMjUgMCAxIDEgNC0zLjE2MVoiLz48L3N2Zz4=)
 */
export const IconGitMerge: Icon = ({ className, ...props }) => {
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
        d='M9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM20 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
        opacity='.2'
      />
      <path d='M8.25 17.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm11-5.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm-11-5.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm1.5 0c0 1.28-.74 2.385-1.814 2.915l1.398 1.121c.582.467.742.583.915.644.173.06.37.07 1.117.07h2.972a3.25 3.25 0 1 1 0 1.5h-2.972c-.644 0-1.144.01-1.614-.155-.47-.165-.854-.486-1.356-.889l-1.146-.918v3.55a3.25 3.25 0 1 1-1.5 0V9.66a3.25 3.25 0 1 1 4-3.161Z' />
    </svg>
  )
}
