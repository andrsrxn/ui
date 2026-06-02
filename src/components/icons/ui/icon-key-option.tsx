import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTguMDA1IDYuMjVjMS4wMSAwIDEuOTQuNTU1IDIuNDIgMS40NDVsNC4yNTkgNy44OThjLjIxOC40MDQuNjQuNjU3IDEuMS42NTdoNC42MjFhLjc1Ljc1IDAgMCAxIDAgMS41aC00LjYyYTIuNzUxIDIuNzUxIDAgMCAxLTIuNDIyLTEuNDQ1TDkuMTA0IDguNDA3YTEuMjUgMS4yNSAwIDAgMC0xLjEtLjY1N2gtNC40MWEuNzUuNzUgMCAxIDEgMC0xLjVoNC40MVptMTIuNCAwYS43NS43NSAwIDAgMSAwIDEuNWgtNS42NTdhLjc1Ljc1IDAgMCAxIDAtMS41aDUuNjU3WiIvPjwvc3ZnPg==)
 */
export const IconKeyOption: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M8.005 6.25c1.01 0 1.94.555 2.42 1.445l4.259 7.898c.218.404.64.657 1.1.657h4.621a.75.75 0 0 1 0 1.5h-4.62a2.751 2.751 0 0 1-2.422-1.445L9.104 8.407a1.25 1.25 0 0 0-1.1-.657h-4.41a.75.75 0 1 1 0-1.5h4.41Zm12.4 0a.75.75 0 0 1 0 1.5h-5.657a.75.75 0 0 1 0-1.5h5.657Z' />
    </svg>
  )
}
