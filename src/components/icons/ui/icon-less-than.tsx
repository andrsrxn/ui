import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjI5NSA0LjkyOWEuNzUuNzUgMCAwIDAtLjk1Ny0uNDU3bC02LjYxMiAyLjMzNEM5Ljc2OSA3Ljg0OSA3LjQ3NyA4LjY1NiA1Ljk0IDkuNDM1Yy0uNzcuMzktMS40MTUuODAzLTEuODY4IDEuMjgtLjQ3LjQ5Ni0uNzU0IDEuMDg1LS43MzYgMS43NzcuMDE4LjY5MS4zMzMgMS4yNjQuODMgMS43MzUuNDc4LjQ1MiAxLjE0My44MyAxLjkzMyAxLjE3OCAxLjU3Ny42OTUgMy45MDggMS4zOCA2LjkxNiAyLjI2NGw2LjM2MSAxLjg3MWEuNzUuNzUgMCAwIDAgLjQyNC0xLjQzOGwtNi4zNjEtMS44NzFjLTMuMDU0LS44OTgtNS4yNy0xLjU1Mi02LjczNS0yLjE5OS0uNzMxLS4zMjItMS4yMTMtLjYxNy0xLjUwNy0uODk1LS4yNzQtLjI2LS4zNTUtLjQ3NS0uMzYxLS42ODYtLjAwNi0uMjEuMDY0LS40My4zMjQtLjcwNC4yNzgtLjI5My43NDQtLjYxMiAxLjQ1Ny0uOTczIDEuNDMtLjcyNCAzLjYwNi0xLjQ5NSA2LjYwOC0yLjU1NGw2LjYxMy0yLjMzNGEuNzUuNzUgMCAwIDAgLjQ1Ny0uOTU3WiIvPjwvc3ZnPg==)
 */
export const IconLessThan: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.295 4.929a.75.75 0 0 0-.957-.457l-6.612 2.334C9.769 7.849 7.477 8.656 5.94 9.435c-.77.39-1.415.803-1.868 1.28-.47.496-.754 1.085-.736 1.777.018.691.333 1.264.83 1.735.478.452 1.143.83 1.933 1.178 1.577.695 3.908 1.38 6.916 2.264l6.361 1.871a.75.75 0 0 0 .424-1.438l-6.361-1.871c-3.054-.898-5.27-1.552-6.735-2.199-.731-.322-1.213-.617-1.507-.895-.274-.26-.355-.475-.361-.686-.006-.21.064-.43.324-.704.278-.293.744-.612 1.457-.973 1.43-.724 3.606-1.495 6.608-2.554l6.613-2.334a.75.75 0 0 0 .457-.957Z' />
    </svg>
  )
}
