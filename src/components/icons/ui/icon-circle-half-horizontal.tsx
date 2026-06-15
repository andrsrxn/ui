import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41MiAxMmE4LjQ4IDguNDggMCAwIDAgMTYuOTYgMEgzLjUyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwLjQ4IDEyYTguNDggOC40OCAwIDEgMC0xNi45NiAwbTE2Ljk2IDBhOC40OCA4LjQ4IDAgMCAxLTE2Ljk2IDBtMTYuOTYgMEgzLjUyIi8+PC9zdmc+)
 */
export const IconCircleHalfHorizontal: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" fillRule="evenodd" d="M3.52 12a8.48 8.48 0 0 0 16.96 0H3.52Z" clipRule="evenodd" opacity=".2"/><path stroke="currentColor" strokeWidth="1.5" d="M20.48 12a8.48 8.48 0 1 0-16.96 0m16.96 0a8.48 8.48 0 0 1-16.96 0m16.96 0H3.52"/></svg>
  )
}
