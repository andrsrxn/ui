import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTguMzg3IDE5di04LjMzNGMwLTEuMDEtLjI0Mi0yLjAwNi0uNzA3LTIuOTAzLTIuMjUtNC4zNC04LjM3LTQuNTc5LTEwLjk1Mi0uNDI4bC0uMTQxLjIyN2E2LjQ1OCA2LjQ1OCAwIDAgMC0uOTc1IDMuNDExVjE5Ii8+PC9zdmc+)
 */
export const IconIntersection: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-intersection'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M18.387 19v-8.334c0-1.01-.242-2.006-.707-2.903-2.25-4.34-8.37-4.579-10.952-.428l-.141.227a6.458 6.458 0 0 0-.975 3.411V19'
      />
    </svg>
  )
}
