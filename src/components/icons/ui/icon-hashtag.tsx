import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEzLjgyNSAxNS4wMDJIOC43NzhhMSAxIDAgMCAxLS45MjItMS4zODVsMS42NjktNGExIDEgMCAwIDEgLjkyMi0uNjE1aDQuODQ0YTEgMSAwIDAgMSAuOTM5IDEuMzQ1bC0xLjQ2NiA0YTEgMSAwIDAgMS0uOTM5LjY1NVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE3Ljc5NyAzLjczNmEuNzUuNzUgMCAxIDEgMS40MDQuNTI4TDE3LjcwNyA4LjI1SDIwYS43NS43NSAwIDAgMSAwIDEuNWgtMi44NTVsLTEuNjg2IDQuNUgyMGEuNzUuNzUgMCAwIDEgMCAxLjVoLTUuMTA0bC0xLjY5MyA0LjUxOGEuNzUuNzUgMCAwIDEtMS40MDQtLjUyNmwxLjQ5Ni0zLjk5Mkg3LjlsLTEuNjk4IDQuNTE4YS43NS43NSAwIDAgMS0xLjQwNC0uNTI3bDEuNS0zLjk5MUg0YS43NS43NSAwIDAgMSAwLTEuNWgyLjg2MmwxLjY5Mi00LjVINGEuNzUuNzUgMCAwIDEgMC0xLjVoNS4xMThsMS42OTctNC41MTRhLjc1Ljc1IDAgMCAxIDEuNDA0LjUyOEwxMC43MiA4LjI1aDUuMzg0bDEuNjkyLTQuNTE0Wk04LjQ2NSAxNC4yNWg1LjM5MmwxLjY4Ni00LjVoLTUuMzg3bC0xLjY5MSA0LjVaIi8+PC9zdmc+)
 */
export const IconHashtag: Icon = ({ className, ...props }) => {
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
        d='M13.825 15.002H8.778a1 1 0 0 1-.922-1.385l1.669-4a1 1 0 0 1 .922-.615h4.844a1 1 0 0 1 .939 1.345l-1.466 4a1 1 0 0 1-.939.655Z'
        opacity='.2'
      />
      <path d='M17.797 3.736a.75.75 0 1 1 1.404.528L17.707 8.25H20a.75.75 0 0 1 0 1.5h-2.855l-1.686 4.5H20a.75.75 0 0 1 0 1.5h-5.104l-1.693 4.518a.75.75 0 0 1-1.404-.526l1.496-3.992H7.9l-1.698 4.518a.75.75 0 0 1-1.404-.527l1.5-3.991H4a.75.75 0 0 1 0-1.5h2.862l1.692-4.5H4a.75.75 0 0 1 0-1.5h5.118l1.697-4.514a.75.75 0 0 1 1.404.528L10.72 8.25h5.384l1.692-4.514ZM8.465 14.25h5.392l1.686-4.5h-5.387l-1.691 4.5Z' />
    </svg>
  )
}
