import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMTk4IDE5LjgyN0MxNC45NSAxNy4zMiAxOCAxMi41MTQgMTggOS40NTdjMC0zLjYzMy0yLjY4Ni01LjczNy02LTUuNzM3UzYgNS43ODggNiA5LjQ1N2MwIDMuMTI1IDMuMDQxIDcuODkgNC43OTMgMTAuMzc2YTEuNDcxIDEuNDcxIDAgMCAwIDIuNDA1LS4wMDZabTEuNjItMTAuNDA2YzAgMS40ODgtMS4yNjEgMi42OTUtMi44MTggMi42OTUtMS41NTcgMC0yLjgxOS0xLjIwNy0yLjgxOS0yLjY5NSAwLTEuNDg5IDEuNDYtMi42OTUgMi44MTktMi42OTUgMS4zNiAwIDIuODE5IDEuMjA2IDIuODE5IDIuNjk1WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE4IDkuNDU3YzAgMy4wOTctMy4xMyA3Ljk4OS00Ljg3IDEwLjQ2NmExLjM3NiAxLjM3NiAwIDAgMS0yLjI3LjAwNkM5LjEyIDE3LjQ3IDYgMTIuNjIzIDYgOS40NTdjMC0zLjY3IDIuNjg2LTUuNzM3IDYtNS43MzdzNiAyLjEwNCA2IDUuNzM3WiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE0LjcxMiA5LjQzN2EyLjcxMiAyLjcxMiAwIDAgMS01LjQyNCAwYzAtMS40OTcuOTk4LTIuNzExIDIuNzEyLTIuNzExIDEuNzE0IDAgMi43MTIgMS4yMTQgMi43MTIgMi43MTFaIi8+PC9zdmc+)
 */
export const IconMapPin: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-map-pin'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M13.198 19.827C14.95 17.32 18 12.514 18 9.457c0-3.633-2.686-5.737-6-5.737S6 5.788 6 9.457c0 3.125 3.041 7.89 4.793 10.376a1.471 1.471 0 0 0 2.405-.006Zm1.62-10.406c0 1.488-1.261 2.695-2.818 2.695-1.557 0-2.819-1.207-2.819-2.695 0-1.489 1.46-2.695 2.819-2.695 1.36 0 2.819 1.206 2.819 2.695Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M18 9.457c0 3.097-3.13 7.989-4.87 10.466a1.376 1.376 0 0 1-2.27.006C9.12 17.47 6 12.623 6 9.457c0-3.67 2.686-5.737 6-5.737s6 2.104 6 5.737Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M14.712 9.437a2.712 2.712 0 0 1-5.424 0c0-1.497.998-2.711 2.712-2.711 1.714 0 2.712 1.214 2.712 2.711Z'
      />
    </svg>
  )
}
