import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMuNzM2IDE5Ljk0N2EuNzM3LjczNyAwIDAgMSAwLTEuNDczaDkuMDYyYzEuMTk3IDAgMi42NTQtLjQ4NyAzLjcxOC0xLjE0OSA0LjItMi42MTMgMy45NTktOC44MDUtLjQzMy0xMS4wODNhNi4zODIgNi4zODIgMCAwIDAtMi45MzgtLjcxNkgzLjczNmEuNzM3LjczNyAwIDAgMSAwLTEuNDczaDkuNDFjMS4yNTggMCAyLjQ5Ny4zMDIgMy42MTQuODgxIDUuNDA3IDIuODAzIDUuNzA1IDEwLjQyNi41MzUgMTMuNjQzLTEuMjQ4Ljc3Ni0yLjk3MSAxLjM3LTQuNDk3IDEuMzdIMy43MzZaIi8+PC9zdmc+)
 */
export const IconSupersetProperOf: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M3.736 19.947a.737.737 0 0 1 0-1.473h9.062c1.197 0 2.654-.487 3.718-1.149 4.2-2.613 3.959-8.805-.433-11.083a6.382 6.382 0 0 0-2.938-.716H3.736a.737.737 0 0 1 0-1.473h9.41c1.258 0 2.497.302 3.614.881 5.407 2.803 5.705 10.426.535 13.643-1.248.776-2.971 1.37-4.497 1.37H3.736Z' />
    </svg>
  )
}
