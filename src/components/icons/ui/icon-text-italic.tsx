import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE1Ljg3MiAyLjk1OGEuNzUuNzUgMCAwIDEgMCAxLjVoLTEuNTQ4bC00LjA0MiAxNS4wODRoMS4xNDdhLjc1Ljc1IDAgMCAxIDAgMS41aC00LjI1YS43NS43NSAwIDAgMSAwLTEuNWgxLjU0OUwxMi43NyA0LjQ1OGgtMS4xNDhhLjc1Ljc1IDAgMCAxIDAtMS41aDQuMjVaIi8+PC9zdmc+)
 */
export const IconTextItalic: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M15.872 2.958a.75.75 0 0 1 0 1.5h-1.548l-4.042 15.084h1.147a.75.75 0 0 1 0 1.5h-4.25a.75.75 0 0 1 0-1.5h1.549L12.77 4.458h-1.148a.75.75 0 0 1 0-1.5h4.25Z' />
    </svg>
  )
}
