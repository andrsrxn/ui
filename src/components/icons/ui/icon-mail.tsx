import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi45MDkgOC42MTdDNS40OSA3LjQzNyA0Ljc4MSA2Ljg0NiA0LjIwNSA3LjExNmMtLjU3NS4yNy0uNTc1IDEuMTkyLS41NzUgMy4wMzh2NS45NzdjMCAuOTQyIDAgMS40MTQuMjkzIDEuNzA3LjI5My4yOTMuNzY0LjI5MyAxLjcwNy4yOTNoMTIuNzRjLjk0MyAwIDEuNDE0IDAgMS43MDctLjI5My4yOTMtLjI5My4yOTMtLjc2NS4yOTMtMS43MDdWMTAuMTVjMC0xLjg0NCAwLTIuNzY3LS41NzUtMy4wMzYtLjU3NS0uMjctMS4yODQuMzE5LTIuNzAzIDEuNDk3bC0zLjgyIDMuMTc0Yy0uNjExLjUwOC0uOTE3Ljc2Mi0xLjI3OS43NjItLjM2MSAwLS42NjctLjI1NS0xLjI3OC0uNzYzTDYuOTA5IDguNjE3WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE5Ljc4NCA2LjQ3NGMtLjU4NS0uNTg2LTEuNTI4LS41ODYtMy40MTQtLjU4Nkg3LjYzYy0xLjg4NiAwLTIuODI5IDAtMy40MTQuNTg2bTE1LjU2OCAwYy41ODYuNTg2LjU4NiAxLjUyOC41ODYgMy40MTR2NC4yNDJjMCAxLjg4NiAwIDIuODI5LS41ODYgMy40MTUtLjU4NS41ODUtMS41MjguNTg1LTMuNDE0LjU4NUg3LjYzYy0xLjg4NiAwLTIuODI5IDAtMy40MTQtLjU4NS0uNTg2LS41ODYtLjU4Ni0xLjUyOS0uNTg2LTMuNDE1VjkuODg5YzAtMS44ODYgMC0yLjgyOC41ODYtMy40MTRtMTUuNTY4IDAtNS4yMTMgNC4yNjZjLTEuMjI1IDEuMDIyLTEuODM3IDEuNTMyLTIuNTYyIDEuNTMyLS43MjQgMC0xLjMzNy0uNTEtMi41NjItMS41MzJMNC4yMTYgNi40NzQiLz48L3N2Zz4=)
 */
export const IconMail: Icon = ({ className, ...props }) => {
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
        fillRule='evenodd'
        d='M6.909 8.617C5.49 7.437 4.781 6.846 4.205 7.116c-.575.27-.575 1.192-.575 3.038v5.977c0 .942 0 1.414.293 1.707.293.293.764.293 1.707.293h12.74c.943 0 1.414 0 1.707-.293.293-.293.293-.765.293-1.707V10.15c0-1.844 0-2.767-.575-3.036-.575-.27-1.284.319-2.703 1.497l-3.82 3.174c-.611.508-.917.762-1.279.762-.361 0-.667-.255-1.278-.763L6.909 8.617Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M19.784 6.474c-.585-.586-1.528-.586-3.414-.586H7.63c-1.886 0-2.829 0-3.414.586m15.568 0c.586.586.586 1.528.586 3.414v4.242c0 1.886 0 2.829-.586 3.415-.585.585-1.528.585-3.414.585H7.63c-1.886 0-2.829 0-3.414-.585-.586-.586-.586-1.529-.586-3.415V9.889c0-1.886 0-2.828.586-3.414m15.568 0-5.213 4.266c-1.225 1.022-1.837 1.532-2.562 1.532-.724 0-1.337-.51-2.562-1.532L4.216 6.474'
      />
    </svg>
  )
}
