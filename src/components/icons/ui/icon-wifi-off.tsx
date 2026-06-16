import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC4yMjggMTUuMjVTOS41MDEgMTMuNjkgMTIgMTMuNjljLjc5IDAgMS40NTcuMTU1IDIgLjM2OE01LjYxIDEyLjMzUzcuNzY2IDkuNTUgMTIgOS41NXM2LjM5IDIuNzggNi4zOSAyLjc4TTMuNDggOC44MDZTNi4zNTUgNS4zMTggMTIgNS4zMThzOC41MiAzLjQ4OCA4LjUyIDMuNDg4TTMuNDk2IDMuNDk2bDE3LjAwOCAxNy4wMDhtLTcuNjgyLTIuMDg3YS44MjIuODIyIDAgMSAxLTEuNjQ0IDAgLjgyMi44MjIgMCAwIDEgMS42NDQgMFoiLz48L3N2Zz4=)
 */
export const IconWifiOff: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.228 15.25S9.501 13.69 12 13.69c.79 0 1.457.155 2 .368M5.61 12.33S7.766 9.55 12 9.55s6.39 2.78 6.39 2.78M3.48 8.806S6.355 5.318 12 5.318s8.52 3.488 8.52 3.488M3.496 3.496l17.008 17.008m-7.682-2.087a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Z"/></svg>
  )
}
