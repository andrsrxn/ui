import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgNS43NzJoMTZ2MTIuNDc0SDRWNS43NzJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTguNjUxIDE1Ljk4LjA4NC4wOGMxLjA2NCAxLjAxNyAxLjU5NiAxLjUyNiAxLjU5NiAyLjE2NiAwIC42NDEtLjUzMSAxLjE1LTEuNTk0IDIuMTY4bC0uMDg2LjA4M20xLjY4LTIuMjNIOGMtMS44ODYgMC0yLjgyOCAwLTMuNDE0LS41ODZDNCAxNy4wNzUgNCAxNi4xMzIgNCAxNC4yNDZ2LTMuMTQzbS0uMzMtNS4zMzFIMTZjMS44ODYgMCAyLjgyOCAwIDMuNDE0LjU4NUMyMCA2Ljk0MyAyMCA3Ljg4NiAyMCA5Ljc3MnYzLjE0Mk01LjM0OSAzLjUyNGwtLjA4NC4wOEM0LjIwMSA0LjYyIDMuNjcgNS4xMjggMy42NjkgNS43N2MwIC42NC41MzEgMS4xNSAxLjU5NCAyLjE2OGwuMDg2LjA4MiIvPjwvc3ZnPg==)
 */
export const IconRotate: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-rotate'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path fill='currentColor' d='M4 5.772h16v12.474H4V5.772Z' opacity='.2' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m18.651 15.98.084.08c1.064 1.017 1.596 1.526 1.596 2.166 0 .641-.531 1.15-1.594 2.168l-.086.083m1.68-2.23H8c-1.886 0-2.828 0-3.414-.586C4 17.075 4 16.132 4 14.246v-3.143m-.33-5.331H16c1.886 0 2.828 0 3.414.585C20 6.943 20 7.886 20 9.772v3.142M5.349 3.524l-.084.08C4.201 4.62 3.67 5.128 3.669 5.77c0 .64.531 1.15 1.594 2.168l.086.082'
      />
    </svg>
  )
}
