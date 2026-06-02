import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEyLjc0NSAxOC41di02LjYyNGgtNy40OVYxOC41YS43NS43NSAwIDAgMS0xLjUgMFYzLjc1YS43NS43NSAwIDAgMSAxLjUgMHY2LjYyNmg3LjQ5VjMuNzVhLjc1Ljc1IDAgMCAxIDEuNSAwVjE4LjVhLjc1Ljc1IDAgMCAxLTEuNSAwWiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjQ1NiAxMi45ODRjLS4yMTUgMC0uNDEuMDktLjU0Ni4yMzVhLjgwNi44MDYgMCAwIDEgMS4wOTEgMCAuNzQ4Ljc0OCAwIDAgMC0uNTQ1LS4yMzVabS43NS45MjJhLjcuNyAwIDAgMC0uMjA1LS42ODcuNzQ3Ljc0NyAwIDAgMSAuMjA1LjUxNXYuMTcyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTIwLjIwNiAyMC4zNjR2LTYuNjNjMC0uMi0uMDc4LS4zOC0uMjA1LS41MTVhLjgwNi44MDYgMCAwIDAtMS4wOTEgMGwtMi44MzMgMi42N2EuNjk4LjY5OCAwIDAgMCAwIDEuMDI5LjgwNi44MDYgMCAwIDAgMS4wOTIgMGwxLjUzNy0xLjQ0OXY0Ljg5NWEuNzUuNzUgMCAwIDAgMS41IDBaIi8+PC9zdmc+)
 */
export const IconTextHeading1: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M12.745 18.5v-6.624h-7.49V18.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 1.5 0v6.626h7.49V3.75a.75.75 0 0 1 1.5 0V18.5a.75.75 0 0 1-1.5 0Z' />
      <path
        fillRule='evenodd'
        d='M19.456 12.984c-.215 0-.41.09-.546.235a.806.806 0 0 1 1.091 0 .748.748 0 0 0-.545-.235Zm.75.922a.7.7 0 0 0-.205-.687.747.747 0 0 1 .205.515v.172Z'
        clipRule='evenodd'
      />
      <path d='M20.206 20.364v-6.63c0-.2-.078-.38-.205-.515a.806.806 0 0 0-1.091 0l-2.833 2.67a.698.698 0 0 0 0 1.029.806.806 0 0 0 1.092 0l1.537-1.449v4.895a.75.75 0 0 0 1.5 0Z' />
    </svg>
  )
}
