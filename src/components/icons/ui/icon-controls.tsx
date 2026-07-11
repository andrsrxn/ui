import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYuODUyIDguMTU3YTIuMjEzIDIuMjEzIDAgMSAwIDQuNDI2IDAgMi4yMTMgMi4yMTMgMCAwIDAtNC40MjYgMFptMTAuMzEyIDcuNjc1YTIuMjI5IDIuMjI5IDAgMSAxLTQuNDU3IDAgMi4yMjkgMi4yMjkgMCAwIDEgNC40NTcgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMS4zIDguMTYxYTIuMjIyIDIuMjIyIDAgMSAwLTQuNDQ0IDBtNC40NDQgMGEyLjIyMiAyLjIyMiAwIDEgMS00LjQ0NCAwbTQuNDQ0IDBoOC45M20tMTMuMzc0IDBIMy43NjltOC45MzEgNy42NzFhMi4yMjIgMi4yMjIgMCAxIDEgNC40NDQgMG0tNC40NDQgMGEyLjIyMiAyLjIyMiAwIDAgMCA0LjQ0NCAwbS00LjQ0NCAwSDMuNzdtMTMuMzc0IDBoMy4wODciLz48L3N2Zz4=)
 */
export const IconControls: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-controls'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M6.852 8.157a2.213 2.213 0 1 0 4.426 0 2.213 2.213 0 0 0-4.426 0Zm10.312 7.675a2.229 2.229 0 1 1-4.457 0 2.229 2.229 0 0 1 4.457 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.3 8.161a2.222 2.222 0 1 0-4.444 0m4.444 0a2.222 2.222 0 1 1-4.444 0m4.444 0h8.93m-13.374 0H3.769m8.931 7.671a2.222 2.222 0 1 1 4.444 0m-4.444 0a2.222 2.222 0 0 0 4.444 0m-4.444 0H3.77m13.374 0h3.087'
      />
    </svg>
  )
}
