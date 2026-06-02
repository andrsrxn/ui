import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjQ1OCAxMy4xNDdhNy40NTggNy40NTggMCAxIDEtMTQuOTE2IDAgNy40NTggNy40NTggMCAwIDEgMTQuOTE2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xOC43MDggMTMuMTQ3YTYuNzA5IDYuNzA5IDAgMSAwLTEzLjQxOCAwIDYuNzA5IDYuNzA5IDAgMCAwIDEzLjQxOCAwWm0tOC4zOS0xLjEwNFY5LjE2YS43NS43NSAwIDAgMSAxLjUgMHYyLjg4MmMwIC42OS41NiAxLjI1IDEuMjUgMS4yNWgyLjkyYS43NS43NSAwIDAgMSAwIDEuNWgtMi45MmEyLjc1IDIuNzUgMCAwIDEtMi43NS0yLjc1Wm01Ljc5Mi05LjI2YS43NS43NSAwIDAgMSAwIDEuNUg3Ljg5YS43NS43NSAwIDAgMSAwLTEuNWg4LjIyWm00LjA5OCAxMC4zNjRhOC4yMDggOC4yMDggMCAxIDEtMTYuNDE3IDAgOC4yMDggOC4yMDggMCAwIDEgMTYuNDE3IDBaIi8+PC9zdmc+)
 */
export const IconAlarm: Icon = ({ className, ...props }) => {
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
        d='M19.458 13.147a7.458 7.458 0 1 1-14.916 0 7.458 7.458 0 0 1 14.916 0Z'
        opacity='.2'
      />
      <path d='M18.708 13.147a6.709 6.709 0 1 0-13.418 0 6.709 6.709 0 0 0 13.418 0Zm-8.39-1.104V9.16a.75.75 0 0 1 1.5 0v2.882c0 .69.56 1.25 1.25 1.25h2.92a.75.75 0 0 1 0 1.5h-2.92a2.75 2.75 0 0 1-2.75-2.75Zm5.792-9.26a.75.75 0 0 1 0 1.5H7.89a.75.75 0 0 1 0-1.5h8.22Zm4.098 10.364a8.208 8.208 0 1 1-16.417 0 8.208 8.208 0 0 1 16.417 0Z' />
    </svg>
  )
}
