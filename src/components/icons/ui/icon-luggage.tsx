import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUuOTA4IDcuMzAyYzAtMS42ODIgMC0yLjUyMy40MzMtMy4wNDYuNDMzLS41MjMgMS4xMy0uNTIzIDIuNTI0LS41MjNoNi4yN2MxLjM5NCAwIDIuMDkxIDAgMi41MjQuNTIzLjQzMy41MjMuNDMzIDEuMzY0LjQzMyAzLjA0NnY3LjU2OWMwIDEuNjgyIDAgMi41MjMtLjQzMyAzLjA0Ni0uNDMzLjUyMy0xLjEzLjUyMy0yLjUyMy41MjNIOC44NjRjLTEuMzk0IDAtMi4wOTEgMC0yLjUyNC0uNTIzLS40MzMtLjUyMy0uNDMzLTEuMzY0LS40MzMtMy4wNDZWNy4zMDJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS43NjMgMTUuMjI0VjYuOTVtLTEuNCAxMy41NzF2LTIuMDhtNS44NzQtMy4yMTZWNi45NW0xLjQgMTMuNTcxdi0yLjA4bS01LjcyOSAwaDQuMTg0YzEuODg2IDAgMi44MjggMCAzLjQxNC0uNTg2LjU4Ni0uNTg2LjU4Ni0xLjUyOS41ODYtMy40MTRWNy43MzNjMC0xLjg4NSAwLTIuODI4LS41ODYtMy40MTQtLjU4Ni0uNTg2LTEuNTI4LS41ODYtMy40MTQtLjU4Nkg5LjkwOGMtMS44ODYgMC0yLjgyOCAwLTMuNDE0LjU4Ni0uNTg2LjU4Ni0uNTg2IDEuNTI5LS41ODYgMy40MTR2Ni43MDdjMCAxLjg4NSAwIDIuODI4LjU4NiAzLjQxNC41ODYuNTg2IDEuNTI4LjU4NiAzLjQxNC41ODZaIi8+PC9zdmc+)
 */
export const IconLuggage: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-luggage'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M5.908 7.302c0-1.682 0-2.523.433-3.046.433-.523 1.13-.523 2.524-.523h6.27c1.394 0 2.091 0 2.524.523.433.523.433 1.364.433 3.046v7.569c0 1.682 0 2.523-.433 3.046-.433.523-1.13.523-2.523.523H8.864c-1.394 0-2.091 0-2.524-.523-.433-.523-.433-1.364-.433-3.046V7.302Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.763 15.224V6.95m-1.4 13.571v-2.08m5.874-3.216V6.95m1.4 13.571v-2.08m-5.729 0h4.184c1.886 0 2.828 0 3.414-.586.586-.586.586-1.529.586-3.414V7.733c0-1.885 0-2.828-.586-3.414-.586-.586-1.528-.586-3.414-.586H9.908c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.529-.586 3.414v6.707c0 1.885 0 2.828.586 3.414.586.586 1.528.586 3.414.586Z'
      />
    </svg>
  )
}
