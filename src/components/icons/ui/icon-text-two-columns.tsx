import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEwLjMwMyAxOC41OTJhLjc1Ljc1IDAgMCAxIDAgMS41SDMuNjM5YS43NS43NSAwIDAgMSAwLTEuNWg2LjY2NFptMTAuMDU4IDBhLjc1Ljc1IDAgMCAxIDAgMS41aC02LjU1N2EuNzUuNzUgMCAwIDEgMC0xLjVoNi41NTdabS0xMC4wNTgtNC44OTRhLjc1Ljc1IDAgMSAxIDAgMS41SDMuNjM5YS43NS43NSAwIDAgMSAwLTEuNWg2LjY2NFptMTAuMDU4IDBhLjc1Ljc1IDAgMSAxIDAgMS41aC02LjU1N2EuNzUuNzUgMCAwIDEgMC0xLjVoNi41NTdaTTEwLjMwMyA4LjgwMmEuNzUuNzUgMCAwIDEgMCAxLjVIMy42MzlhLjc1Ljc1IDAgMSAxIDAtMS41aDYuNjY0Wm0xMC4wNTggMGEuNzUuNzUgMCAwIDEgMCAxLjVoLTYuNTU3YS43NS43NSAwIDAgMSAwLTEuNWg2LjU1N1pNMTAuMzAzIDMuOTA4YS43NS43NSAwIDAgMSAwIDEuNUgzLjYzOWEuNzUuNzUgMCAxIDEgMC0xLjVoNi42NjRabTEwLjA1OCAwYS43NS43NSAwIDAgMSAwIDEuNWgtNi41NTdhLjc1Ljc1IDAgMCAxIDAtMS41aDYuNTU3WiIvPjwvc3ZnPg==)
 */
export const IconTextTwoColumns: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M10.303 18.592a.75.75 0 0 1 0 1.5H3.639a.75.75 0 0 1 0-1.5h6.664Zm10.058 0a.75.75 0 0 1 0 1.5h-6.557a.75.75 0 0 1 0-1.5h6.557Zm-10.058-4.894a.75.75 0 1 1 0 1.5H3.639a.75.75 0 0 1 0-1.5h6.664Zm10.058 0a.75.75 0 1 1 0 1.5h-6.557a.75.75 0 0 1 0-1.5h6.557ZM10.303 8.802a.75.75 0 0 1 0 1.5H3.639a.75.75 0 1 1 0-1.5h6.664Zm10.058 0a.75.75 0 0 1 0 1.5h-6.557a.75.75 0 0 1 0-1.5h6.557ZM10.303 3.908a.75.75 0 0 1 0 1.5H3.639a.75.75 0 1 1 0-1.5h6.664Zm10.058 0a.75.75 0 0 1 0 1.5h-6.557a.75.75 0 0 1 0-1.5h6.557Z' />
    </svg>
  )
}
