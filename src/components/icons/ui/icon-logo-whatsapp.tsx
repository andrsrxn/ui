import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDMuNzU1YTguMjQ2IDguMjQ2IDAgMCAwLTcuMTM4IDEyLjM3NEwzLjc5IDE5LjM0YS42ODcuNjg3IDAgMCAwIC44NjkuODdsMy4yMTEtMS4wNzJBOC4yNDYgOC4yNDYgMCAxIDAgMTIgMy43NTVabTIuMDYxIDEzLjA1NWE2Ljg3MSA2Ljg3MSAwIDAgMS02Ljg3LTYuODcxQTIuNzQ5IDIuNzQ5IDAgMCAxIDkuOTM4IDcuMTlsMS4zNzQgMi43NDktMS4wNTggMS41ODZhNC4xNCA0LjE0IDAgMCAwIDIuMjIgMi4yMmwxLjU4Ni0xLjA1OCAyLjc0OSAxLjM3NWEyLjc0OSAyLjc0OSAwIDAgMS0yLjc0OSAyLjc0OFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03LjE5IDkuOTM5QTIuNzQ5IDIuNzQ5IDAgMCAxIDkuOTQgNy4xOWwxLjM3NCAyLjc0OS0xLjA1OCAxLjU4NmE0LjE0IDQuMTQgMCAwIDAgMi4yMiAyLjIybDEuNTg2LTEuMDU4IDIuNzQ5IDEuMzc1YTIuNzQ4IDIuNzQ4IDAgMCAxLTIuNzQ5IDIuNzQ4IDYuODcxIDYuODcxIDAgMCAxLTYuODctNi44NzFaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03Ljg3MSAxOS4xMzlhOC4yNDYgOC4yNDYgMCAxIDAtMy4wMDYtMy4wMDdMMy43OTEgMTkuMzRhLjY4Ny42ODcgMCAwIDAgLjg2OS44N2wzLjIxMS0xLjA3MloiLz48L3N2Zz4=)
 */
export const IconLogoWhatsapp: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-logo-whatsapp'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M12 3.755a8.246 8.246 0 0 0-7.138 12.374L3.79 19.34a.687.687 0 0 0 .869.87l3.211-1.072A8.246 8.246 0 1 0 12 3.755Zm2.061 13.055a6.871 6.871 0 0 1-6.87-6.871A2.749 2.749 0 0 1 9.938 7.19l1.374 2.749-1.058 1.586a4.14 4.14 0 0 0 2.22 2.22l1.586-1.058 2.749 1.375a2.749 2.749 0 0 1-2.749 2.748Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.19 9.939A2.749 2.749 0 0 1 9.94 7.19l1.374 2.749-1.058 1.586a4.14 4.14 0 0 0 2.22 2.22l1.586-1.058 2.749 1.375a2.748 2.748 0 0 1-2.749 2.748 6.871 6.871 0 0 1-6.87-6.871Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.871 19.139a8.246 8.246 0 1 0-3.006-3.007L3.791 19.34a.687.687 0 0 0 .869.87l3.211-1.072Z'
      />
    </svg>
  )
}
