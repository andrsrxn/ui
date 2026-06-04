import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtNC4yMzkgMTIuOTg2IDEuOTM2IDIuODcxYzEuNTE2IDIuMjUgMi4yNzUgMy4zNzQgMy4zNDUgMy4zNjkgMS4wNy0uMDA2IDEuODE3LTEuMTM4IDMuMzEtMy40MDNsNi45MzItMTAuNTEiLz48L3N2Zz4=)
 */
export const IconCheck: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m4.239 12.986 1.936 2.871c1.516 2.25 2.275 3.374 3.345 3.369 1.07-.006 1.817-1.138 3.31-3.403l6.932-10.51"/></svg>
  )
}
