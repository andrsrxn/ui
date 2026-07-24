import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjAuMjQ1IDEyLjU5VjkuMTE5YTEuNSAxLjUgMCAwIDAtMS41LTEuNWgtMy40MzNNMy43NTUgMTYuOTYzbDQuOTc4LTQuOTc4YTEgMSAwIDAgMSAxLjQyNC4wMWwyLjI1OCAyLjMyNGExIDEgMCAwIDAgMS40MzgtLjAwNGw1Ljk4OC02LjIyMiIvPjwvc3ZnPg==)
 */
export const IconTrendUp: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-trend-up'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon', className)}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.245 12.59V9.119a1.5 1.5 0 0 0-1.5-1.5h-3.433M3.755 16.963l4.978-4.978a1 1 0 0 1 1.424.01l2.258 2.324a1 1 0 0 0 1.438-.004l5.988-6.222'
      />
    </svg>
  )
}
