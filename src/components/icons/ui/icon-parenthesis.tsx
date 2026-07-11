import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTUuNjA0IDMuNzU0czMuODc5IDIuMTMyIDMuODc5IDguMzE3YzAgNi4xODUtMy44NzkgOC4xNzUtMy44NzkgOC4xNzVNOC40MTggMy43NTRTNC41NCA1Ljg4NiA0LjU0IDEyLjA3YzAgNi4xODUgMy44OCA4LjE3NSAzLjg4IDguMTc1Ii8+PC9zdmc+)
 */
export const IconParenthesis: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-parenthesis'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.604 3.754s3.879 2.132 3.879 8.317c0 6.185-3.879 8.175-3.879 8.175M8.418 3.754S4.54 5.886 4.54 12.07c0 6.185 3.88 8.175 3.88 8.175'
      />
    </svg>
  )
}
