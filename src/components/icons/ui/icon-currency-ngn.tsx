import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjgzIDEwLjUgNiA0LjMxMlYxMy41aDcuMTdMMTggMTkuNjg4VjEwLjVoLTcuMTdaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy43NSAxMy41aDE2LjVtLTE2LjUtM2gxNi41TTYgMTkuNjg4VjQuMzEzbDEyIDE1LjM3NVY0LjMxMyIvPjwvc3ZnPg==)
 */
export const IconCurrencyNgn: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M10.83 10.5 6 4.312V13.5h7.17L18 19.688V10.5h-7.17Z" opacity=".2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 13.5h16.5m-16.5-3h16.5M6 19.688V4.313l12 15.375V4.313"/></svg>
  )
}
