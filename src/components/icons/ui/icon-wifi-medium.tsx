import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC4yMjggMTUuMjVTOS41MDEgMTMuNjkgMTIgMTMuNjljMi40OTkgMCAzLjc3MiAxLjU2IDMuNzcyIDEuNTZNNS42MSAxMi4zM1M3Ljc2NiA5LjU1IDEyIDkuNTVzNi4zOSAyLjc4IDYuMzkgMi43OG0tNS41NjggNi4wODdhLjgyMi44MjIgMCAxIDEtMS42NDQgMCAuODIyLjgyMiAwIDAgMSAxLjY0NCAwWiIvPjwvc3ZnPg==)
 */
export const IconWifiMedium: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.228 15.25S9.501 13.69 12 13.69c2.499 0 3.772 1.56 3.772 1.56M5.61 12.33S7.766 9.55 12 9.55s6.39 2.78 6.39 2.78m-5.568 6.087a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Z"/></svg>
  )
}
