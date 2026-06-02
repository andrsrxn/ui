import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE2LjczOCAyMC41MDh2LTEuNzYyaC0xLjc1NGEuNzUuNzUgMCAwIDEgMC0xLjVoMS43NTR2LTEuNzU0YS43NS43NSAwIDAgMSAxLjUgMHYxLjc1NEgyMGEuNzUuNzUgMCAwIDEgMCAxLjVoLTEuNzYydjEuNzYyYS43NS43NSAwIDAgMS0xLjUgMFptLTUuMzQ0LTMuMjU4YS43NS43NSAwIDAgMSAwIDEuNUg0YS43NS43NSAwIDAgMSAwLTEuNWg3LjM5NFptOC42MDYtNmEuNzUuNzUgMCAwIDEgMCAxLjVINGEuNzUuNzUgMCAwIDEgMC0xLjVoMTZabTAtNmEuNzUuNzUgMCAwIDEgMCAxLjVINGEuNzUuNzUgMCAwIDEgMC0xLjVoMTZaIi8+PC9zdmc+)
 */
export const IconListPlus: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M16.738 20.508v-1.762h-1.754a.75.75 0 0 1 0-1.5h1.754v-1.754a.75.75 0 0 1 1.5 0v1.754H20a.75.75 0 0 1 0 1.5h-1.762v1.762a.75.75 0 0 1-1.5 0Zm-5.344-3.258a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h7.394Zm8.606-6a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h16Zm0-6a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h16Z' />
    </svg>
  )
}
