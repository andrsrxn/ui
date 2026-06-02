import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTYuNDUgMTkuMDA1VjQuOTk1YS43NS43NSAwIDEgMSAxLjUgMHYxNC4wMWEuNzUuNzUgMCAwIDEtMS41IDBabTkuNiAwVjQuOTk1YS43NS43NSAwIDAgMSAxLjUgMHYxNC4wMWEuNzUuNzUgMCAwIDEtMS41IDBabS02LjQtMlY2Ljk5NWEuNzUuNzUgMCAwIDEgMS41IDB2MTAuMDFhLjc1Ljc1IDAgMCAxLTEuNSAwWm05LjYtMXYtOC4wMWEuNzUuNzUgMCAwIDEgMS41IDB2OC4wMWEuNzUuNzUgMCAwIDEtMS41IDBabS0xNi0xdi02LjAxYS43NS43NSAwIDEgMSAxLjUgMHY2LjAxYS43NS43NSAwIDAgMS0xLjUgMFptOS42IDB2LTYuMDFhLjc1Ljc1IDAgMCAxIDEuNSAwdjYuMDFhLjc1Ljc1IDAgMCAxLTEuNSAwWiIvPjwvc3ZnPg==)
 */
export const IconSoundeWave: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M6.45 19.005V4.995a.75.75 0 1 1 1.5 0v14.01a.75.75 0 0 1-1.5 0Zm9.6 0V4.995a.75.75 0 0 1 1.5 0v14.01a.75.75 0 0 1-1.5 0Zm-6.4-2V6.995a.75.75 0 0 1 1.5 0v10.01a.75.75 0 0 1-1.5 0Zm9.6-1v-8.01a.75.75 0 0 1 1.5 0v8.01a.75.75 0 0 1-1.5 0Zm-16-1v-6.01a.75.75 0 1 1 1.5 0v6.01a.75.75 0 0 1-1.5 0Zm9.6 0v-6.01a.75.75 0 0 1 1.5 0v6.01a.75.75 0 0 1-1.5 0Z' />
    </svg>
  )
}
