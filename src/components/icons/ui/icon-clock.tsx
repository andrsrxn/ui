import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjM5OCAxMmE4LjM5OCA4LjM5OCAwIDEgMS0xNi43OTYgMCA4LjM5OCA4LjM5OCAwIDAgMSAxNi43OTYgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMC45NSA3LjUyNXYzLjA1OGMwIDEuMTgxIDAgMS43NzIuMjkgMi4yNXMuODE0Ljc1IDEuODYxIDEuMjk3bDIuMjk4IDEuMTk4TTIwLjM5OCAxMmE4LjM5OCA4LjM5OCAwIDEgMS0xNi43OTYgMCA4LjM5OCA4LjM5OCAwIDAgMSAxNi43OTYgMFoiLz48L3N2Zz4=)
 */
export const IconClock: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
      className={cn('bp-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M20.398 12a8.398 8.398 0 1 1-16.796 0 8.398 8.398 0 0 1 16.796 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.95 7.525v3.058c0 1.181 0 1.772.29 2.25s.814.75 1.861 1.297l2.298 1.198M20.398 12a8.398 8.398 0 1 1-16.796 0 8.398 8.398 0 0 1 16.796 0Z'
      />
    </svg>
  )
}
