import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE3LjY3IDE1Ljg3NmMxLjgxLTEuNjUgMy4zNDMtMy43NjUgMy4zNDMtNi45NDggMC0xLjExOC0uNDUyLTIuMzY1LTEuMjY2LTMuMzM4LS44MjYtLjk4Ny0yLjA1OS0xLjcyOS0zLjYxNi0xLjcyOS0xLjI0OCAwLTIuMzA3LjUxLTMuMTAyIDEuMTAzLS40MDEuMy0uNzQ2LjYzLTEuMDMuOTQ3YTcuMDA0IDcuMDA0IDAgMCAwLTEuMDI4LS45NDdDMTAuMTc2IDQuMzcgOS4xMTcgMy44NiA3Ljg3IDMuODZjLTEuNTU3IDAtMi43OS43NDItMy42MTYgMS43MjktLjgxNC45NzMtMS4yNjYgMi4yMi0xLjI2NiAzLjMzOCAwIDMuMTgyIDEuNTM0IDUuMjk3IDMuMzQzIDYuOTQ4Ljc5NC43MjUgMS42NTkgMS4zNzYgMi40NjcgMS45ODRsLjI5OC4yMjVjLjkwNy42ODUgMS43MiAxLjMxOSAyLjM1OSAxLjk5OGEuNzUuNzUgMCAwIDAgMS4wOTIgMGMuNjQtLjY4IDEuNDUyLTEuMzEzIDIuMzU5LTEuOTk4LjA5OC0uMDc0LjE5Ny0uMTUuMjk4LS4yMjUuODA4LS42MDggMS42NzMtMS4yNiAyLjQ2Ny0xLjk4NFoiLz48L3N2Zz4=)
 */
export const IconHeartFilled: Icon = ({ className, ...props }) => {
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
        d='M17.67 15.876c1.81-1.65 3.343-3.765 3.343-6.948 0-1.118-.452-2.365-1.266-3.338-.826-.987-2.059-1.729-3.616-1.729-1.248 0-2.307.51-3.102 1.103-.401.3-.746.63-1.03.947a7.004 7.004 0 0 0-1.028-.947C10.176 4.37 9.117 3.86 7.87 3.86c-1.557 0-2.79.742-3.616 1.729-.814.973-1.266 2.22-1.266 3.338 0 3.182 1.534 5.297 3.343 6.948.794.725 1.659 1.376 2.467 1.984l.298.225c.907.685 1.72 1.319 2.359 1.998a.75.75 0 0 0 1.092 0c.64-.68 1.452-1.313 2.359-1.998.098-.074.197-.15.298-.225.808-.608 1.673-1.26 2.467-1.984Z'
      />
    </svg>
  )
}
