import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTcgNi45NzFDMTcgNS4zIDE0LjM4NCAzLjg2IDEyIDMuODZjLTIuNTYxIDAtNSAxLjE0Ni01IDQuMDI3IDAgNS45NTIgMTAgMS45MDcgMTAgOC41NjMgMCAyLjYzMy0yLjEzNSAzLjgxLTUgMy44MXMtNS0xLjc2My01LTMuODFNNCAxMmgxNiIvPjwvc3ZnPg==)
 */
export const IconTextUnderline: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M17 6.971C17 5.3 14.384 3.86 12 3.86c-2.561 0-5 1.146-5 4.027 0 5.952 10 1.907 10 8.563 0 2.633-2.135 3.81-5 3.81s-5-1.763-5-3.81M4 12h16"/></svg>
  )
}
