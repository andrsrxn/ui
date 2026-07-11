import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy40ODQgMTJoMS45MDRjLjMyMiAwIC40ODIgMCAuNjA4LS4wODMuMTI1LS4wODMuMTg4LS4yMzEuMzEzLS41MjdsMi4yNzMtNS4zNmMuNDg3LTEuMTQ4LjczLTEuNzIyIDEuMDktMS42OTMuMzYuMDMuNTA4LjYzNS44MDIgMS44NDhsMi44NCAxMS42OGMuMjkgMS4xOTUuNDM1IDEuNzkyLjc5MyAxLjgyMy4zNTcuMDMuNjAzLS41MzIgMS4wOTUtMS42NkwxNy41NyAxMi42Yy4xMjctLjI5MS4xOS0uNDM3LjMxNS0uNTE4LjEyNS0uMDgyLjI4NC0uMDgyLjYwMS0uMDgyaDIuMDMiLz48L3N2Zz4=)
 */
export const IconActivity: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-activity'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.484 12h1.904c.322 0 .482 0 .608-.083.125-.083.188-.231.313-.527l2.273-5.36c.487-1.148.73-1.722 1.09-1.693.36.03.508.635.802 1.848l2.84 11.68c.29 1.195.435 1.792.793 1.823.357.03.603-.532 1.095-1.66L17.57 12.6c.127-.291.19-.437.315-.518.125-.082.284-.082.601-.082h2.03'
      />
    </svg>
  )
}
