import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2LjIzNiAxNS4yODEgMTIgOC4xMTMgNy43NjQgMTUuMjhoOC40NzJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTguNTYzIDE5LjIxOSAxMC4wMyA0Ljc4bS0yLjI2NiAxMC41LTIuMzI3IDMuOTM5TTEzLjk3IDQuNzhsLTYuMjA1IDEwLjVtOC40NzIgMGg0LjI5NW0tMTcuMDYyIDBoMTIuOTA2Ii8+PC9zdmc+)
 */
export const IconLogoAppStore: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M16.236 15.281 12 8.113 7.764 15.28h8.472Z" opacity=".2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.563 19.219 10.03 4.78m-2.266 10.5-2.327 3.939M13.97 4.78l-6.205 10.5m8.472 0h4.295m-17.062 0h12.906"/></svg>
  )
}
