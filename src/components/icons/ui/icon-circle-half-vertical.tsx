import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMy41MmE4LjQ4IDguNDggMCAxIDAgMCAxNi45NlYzLjUyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDIwLjQ4YTguNDggOC40OCAwIDAgMCAwLTE2Ljk2bTAgMTYuOTZhOC40OCA4LjQ4IDAgMSAxIDAtMTYuOTZtMCAxNi45NlYzLjUyIi8+PC9zdmc+)
 */
export const IconCircleHalfVertical: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-circle-half-vertical'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 3.52a8.48 8.48 0 1 0 0 16.96V3.52Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 20.48a8.48 8.48 0 0 0 0-16.96m0 16.96a8.48 8.48 0 1 1 0-16.96m0 16.96V3.52'
      />
    </svg>
  )
}
