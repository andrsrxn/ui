import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE3LjMzNyAxMC41NDZhNi44NzMgNi44NzMgMCAxIDEtMTMuNzQ2IDAgNi44NzMgNi44NzMgMCAwIDEgMTMuNzQ2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTUuMzc2IDE1LjM1M2E2Ljg3MyA2Ljg3MyAwIDEgMC05LjgyNC05LjYxNSA2Ljg3MyA2Ljg3MyAwIDAgMCA5LjgyNCA5LjYxNVptMCAwIDQuOSA0LjkiLz48L3N2Zz4=)
 */
export const IconSearch: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M17.337 10.546a6.873 6.873 0 1 1-13.746 0 6.873 6.873 0 0 1 13.746 0Z" opacity=".2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15.376 15.353a6.873 6.873 0 1 0-9.824-9.615 6.873 6.873 0 0 0 9.824 9.615Zm0 0 4.9 4.9"/></svg>
  )
}
