import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDIxLjIzQTkuMjMgOS4yMyAwIDAgMCAyMS4yMyAxMmE5LjIzIDkuMjMgMCAxIDAtMTguNDYgMEE5LjIzIDkuMjMgMCAwIDAgMTIgMjEuMjNaIi8+PC9zdmc+)
 */
export const IconCircleFilled: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M12 21.23A9.23 9.23 0 0 0 21.23 12a9.23 9.23 0 1 0-18.46 0A9.23 9.23 0 0 0 12 21.23Z"/></svg>
  )
}
