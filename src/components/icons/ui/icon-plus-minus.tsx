import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy45ODQgMjAuMDE2IDIwLjAxNiAzLjk4NE0zLjQ2NiA3LjAwMSAxMC41MzQgN003IDMuNDY2djcuMDY4TTIwLjUzNCAxN2gtNy4wNjgiLz48L3N2Zz4=)
 */
export const IconPlusMinus: Icon = ({ className, ...props }) => {
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
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.984 20.016 20.016 3.984M3.466 7.001 10.534 7M7 3.466v7.068M20.534 17h-7.068'
      />
    </svg>
  )
}
