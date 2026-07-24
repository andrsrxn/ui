import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjY1IDEwLjczMmEuNS41IDAgMCAxIC41LS41aDEuNDE3Yy44ODggMCAxLjMzMy0uOTU0LjcwNS0xLjUxMmwtNS41NjctNC45NWExLjA4NyAxLjA4NyAwIDAgMC0xLjQxIDBMNS43MjggOC43MmMtLjYyOC41NTgtLjE4MyAxLjUxMi43MDUgMS41MTJoMS40MTZhLjUuNSAwIDAgMSAuNS41djYuNDI1YzAgMS4zODMgMCAyLjA3NC40MSAyLjU1YTEuOSAxLjkgMCAwIDAgLjM3Mi4zMzFjLjUzNi4zNjUgMS4zMTQuMzY1IDIuODY5LjM2NSAxLjU1NSAwIDIuMzMyIDAgMi44NjktLjM2NWExLjkgMS45IDAgMCAwIC4zNzItLjMzYy40MS0uNDc3LjQxLTEuMTY4LjQxLTIuNTUxdi02LjQyNVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNS42NSAxMC43MzJhLjUuNSAwIDAgMSAuNS0uNWgxLjQxN2MuODg4IDAgMS4zMzMtLjk1NC43MDUtMS41MTJsLTUuNTY3LTQuOTVhMS4wODcgMS4wODcgMCAwIDAtMS40MSAwTDUuNzI4IDguNzJjLS42MjguNTU4LS4xODMgMS41MTIuNzA1IDEuNTEyaDEuNDE2YS41LjUgMCAwIDEgLjUuNXY2LjQyNWMwIDEuMzgzIDAgMi4wNzQuNDEgMi41NWExLjkgMS45IDAgMCAwIC4zNzIuMzMxYy41MzYuMzY1IDEuMzE0LjM2NSAyLjg2OS4zNjUgMS41NTUgMCAyLjMzMiAwIDIuODY5LS4zNjVhMS45IDEuOSAwIDAgMCAuMzcyLS4zM2MuNDEtLjQ3Ny40MS0xLjE2OC40MS0yLjU1MXYtNi40MjVaIi8+PC9zdmc+)
 */
export const IconKeyShift: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-key-shift'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M15.65 10.732a.5.5 0 0 1 .5-.5h1.417c.888 0 1.333-.954.705-1.512l-5.567-4.95a1.087 1.087 0 0 0-1.41 0L5.728 8.72c-.628.558-.183 1.512.705 1.512h1.416a.5.5 0 0 1 .5.5v6.425c0 1.383 0 2.074.41 2.55a1.9 1.9 0 0 0 .372.331c.536.365 1.314.365 2.869.365 1.555 0 2.332 0 2.869-.365a1.9 1.9 0 0 0 .372-.33c.41-.477.41-1.168.41-2.551v-6.425Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.65 10.732a.5.5 0 0 1 .5-.5h1.417c.888 0 1.333-.954.705-1.512l-5.567-4.95a1.087 1.087 0 0 0-1.41 0L5.728 8.72c-.628.558-.183 1.512.705 1.512h1.416a.5.5 0 0 1 .5.5v6.425c0 1.383 0 2.074.41 2.55a1.9 1.9 0 0 0 .372.331c.536.365 1.314.365 2.869.365 1.555 0 2.332 0 2.869-.365a1.9 1.9 0 0 0 .372-.33c.41-.477.41-1.168.41-2.551v-6.425Z'
      />
    </svg>
  )
}
