import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIuNjUzIDEyYTkuMjcgOS4yNyAwIDAgMSAxNS43NzMtNi42MDdsLjAwNS4wMDQgMS4xOTQgMS4xOTVjLjA2NS0uNDgzLjA2OS0xLjE0LjA2OS0yLjEwNVYzLjQ4YS43NS43NSAwIDAgMSAxLjUgMHYxLjAwN2MwIC45MjIuMDAxIDEuNjktLjA4IDIuMjk3LS4wODUuNjI4LS4yNzEgMS4xOTUtLjcyNyAxLjY1LS40NTYuNDU2LTEuMDIzLjY0Mi0xLjY1Mi43MjYtLjYwNi4wOC0xLjM3NC4wNzgtMi4yOTYuMDc3bC0xLjAwMi0uMDAxYS43NS43NSAwIDAgMSAuMDAyLTEuNWgxLjAwMmMuOTY0LjAwMiAxLjY1My0uMDA2IDIuMTM2LS4wN0wxNy4zNyA2LjQ1N2E3Ljc3IDcuNzcgMCAxIDAgLjAwNSAxMS4wOC43NS43NSAwIDAgMSAxLjA1MiAxLjA2OUE5LjI3IDkuMjcgMCAwIDEgMi42NTQgMTJaIi8+PC9zdmc+)
 */
export const IconReload: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M2.653 12a9.27 9.27 0 0 1 15.773-6.607l.005.004 1.194 1.195c.065-.483.069-1.14.069-2.105V3.48a.75.75 0 0 1 1.5 0v1.007c0 .922.001 1.69-.08 2.297-.085.628-.271 1.195-.727 1.65-.456.456-1.023.642-1.652.726-.606.08-1.374.078-2.296.077l-1.002-.001a.75.75 0 0 1 .002-1.5h1.002c.964.002 1.653-.006 2.136-.07L17.37 6.457a7.77 7.77 0 1 0 .005 11.08.75.75 0 0 1 1.052 1.069A9.27 9.27 0 0 1 2.654 12Z' />
    </svg>
  )
}
