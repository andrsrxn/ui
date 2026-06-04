import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgOGMwLTEuODg2IDAtMi44MjguNTg2LTMuNDE0QzUuMTcyIDQgNi4xMTQgNCA4IDRoNHYxNkg4Yy0xLjg4NiAwLTIuODI4IDAtMy40MTQtLjU4NkM0IDE4LjgyOCA0IDE3Ljg4NiA0IDE2VjhaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDRIOGMtMS44ODYgMC0yLjgyOCAwLTMuNDE0LjU4NkM0IDUuMTcyIDQgNi4xMTQgNCA4djhjMCAxLjg4NiAwIDIuODI4LjU4NiAzLjQxNEM1LjE3MiAyMCA2LjExNCAyMCA4IDIwaDRtMC0xNmg0YzEuODg2IDAgMi44MjggMCAzLjQxNC41ODZDMjAgNS4xNzIgMjAgNi4xMTQgMjAgOHY4YzAgMS44ODYgMCAyLjgyOC0uNTg2IDMuNDE0QzE4LjgyOCAyMCAxNy44ODYgMjAgMTYgMjBoLTRtMC0xNnYxNiIvPjwvc3ZnPg==)
 */
export const IconPanelsLeft: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M4 8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4v16H8c-1.886 0-2.828 0-3.414-.586C4 18.828 4 17.886 4 16V8Z" opacity=".2"/><path stroke="currentColor" strokeWidth="1.5" d="M12 4H8c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v8c0 1.886 0 2.828.586 3.414C5.172 20 6.114 20 8 20h4m0-16h4c1.886 0 2.828 0 3.414.586C20 5.172 20 6.114 20 8v8c0 1.886 0 2.828-.586 3.414C18.828 20 17.886 20 16 20h-4m0-16v16"/></svg>
  )
}
