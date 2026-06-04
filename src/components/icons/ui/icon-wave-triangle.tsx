import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMy42NTQgOC4wOTMuOTM5LTEuMDU5YzEuMjY0LTEuNDI3IDEuODk2LTIuMTQgMi42NjEtMi4wNjIuNzY2LjA3OSAxLjI0LjkwNiAyLjE4NyAyLjU2bDUuMTYzIDkuMDEzYy45MyAxLjYyMyAxLjM5NSAyLjQzNCAyLjE1IDIuNTIuNzU1LjA4NSAxLjM5LS42MDMgMi42NTgtMS45NzdsLjk1MS0xLjAzMSIvPjwvc3ZnPg==)
 */
export const IconWaveTriangle: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m3.654 8.093.939-1.059c1.264-1.427 1.896-2.14 2.661-2.062.766.079 1.24.906 2.187 2.56l5.163 9.013c.93 1.623 1.395 2.434 2.15 2.52.755.085 1.39-.603 2.658-1.977l.951-1.031"/></svg>
  )
}
