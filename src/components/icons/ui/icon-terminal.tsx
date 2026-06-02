import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjMzMSAxNi42NDZhLjc1Ljc1IDAgMCAxIDAgMS41aC05LjY2N2EuNzUuNzUgMCAwIDEgMC0xLjVoOS42NjdaTTMuMTIxIDUuNTE2YS43NS43NSAwIDAgMSAxLjA2LS4wMzVMNy4xMjQgOC4yNGMuNzEzLjY2OCAxLjMwNiAxLjIyMSAxLjcxIDEuNzIuNDE4LjUxNy43MTQgMS4wNjcuNzE0IDEuNzQycy0uMjk0IDEuMjI2LS43MTIgMS43NDNjLS40MDQuNS0uOTk1IDEuMDU0LTEuNzA4IDEuNzIzbC0yLjk0NiAyLjc2NmEuNzUuNzUgMCAwIDEtMS4wMjctMS4wOTNMNi4xIDE0LjA3NWMuNzQ0LS42OTkgMS4yNDQtMS4xNzIgMS41NjgtMS41NzIuMzEtLjM4NC4zOC0uNjA4LjM4LS44IDAtLjE5LS4wNy0uNDE0LS4zOC0uNzk3LS4zMjQtLjQtLjgyNS0uODczLTEuNTctMS41NzFsLTIuOTQzLTIuNzZhLjc1Ljc1IDAgMCAxLS4wMzUtMS4wNTlaIi8+PC9zdmc+)
 */
export const IconTerminal: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.331 16.646a.75.75 0 0 1 0 1.5h-9.667a.75.75 0 0 1 0-1.5h9.667ZM3.121 5.516a.75.75 0 0 1 1.06-.035L7.124 8.24c.713.668 1.306 1.221 1.71 1.72.418.517.714 1.067.714 1.742s-.294 1.226-.712 1.743c-.404.5-.995 1.054-1.708 1.723l-2.946 2.766a.75.75 0 0 1-1.027-1.093L6.1 14.075c.744-.699 1.244-1.172 1.568-1.572.31-.384.38-.608.38-.8 0-.19-.07-.414-.38-.797-.324-.4-.825-.873-1.57-1.571l-2.943-2.76a.75.75 0 0 1-.035-1.059Z' />
    </svg>
  )
}
