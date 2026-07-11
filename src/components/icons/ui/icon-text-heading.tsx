import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAzLjc5N1YxMm0wIDB2OC4yMDNNNyAxMmgxMG0wIDB2OC4yMDNNMTcgMTJWMy43OTdtLTExLjQ3IDBoMy4wMW02Ljk1NSAwaDMuMDFNNS41MyAyMC4yMDNoMy4wMW02Ljk1NSAwaDMuMDEiLz48L3N2Zz4=)
 */
export const IconTextHeading: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-text-heading'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7 3.797V12m0 0v8.203M7 12h10m0 0v8.203M17 12V3.797m-11.47 0h3.01m6.955 0h3.01M5.53 20.203h3.01m6.955 0h3.01'
      />
    </svg>
  )
}
