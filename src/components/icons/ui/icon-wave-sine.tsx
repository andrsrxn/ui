import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy42ODggOC4xMzlzLjY4LTQuMTQgMy42OTUtNC4xNGM3LjIxNCAwIDIuMDIxIDE2IDkuMjM2IDE2IDIuOTYuMDAxIDMuNzEtMy45OSAzLjcxLTMuOTkiLz48L3N2Zz4=)
 */
export const IconWaveSine: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3.688 8.139s.68-4.14 3.695-4.14c7.214 0 2.021 16 9.236 16 2.96.001 3.71-3.99 3.71-3.99"/></svg>
  )
}
