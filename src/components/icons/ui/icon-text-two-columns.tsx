import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNCA0Ljk3NWg2LjM3Nm0zLjM1IDBIMjBNNCA5LjY1OGg2LjM3Nm0zLjM1IDBIMjBNNCAxNC4zNDJoNi4zNzZtMy4zNSAwSDIwTTQgMTkuMDI1aDYuMzc2bTMuMzUgMEgyMCIvPjwvc3ZnPg==)
 */
export const IconTextTwoColumns: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 4.975h6.376m3.35 0H20M4 9.658h6.376m3.35 0H20M4 14.342h6.376m3.35 0H20M4 19.025h6.376m3.35 0H20"/></svg>
  )
}
