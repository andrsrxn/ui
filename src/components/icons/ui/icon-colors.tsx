import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNTQ0IDguODE5YTQuNTUgNC41NSAwIDAgMS0uMzkgMS44NDcgNC41MzggNC41MzggMCAwIDAtNC42NzEgMi42NjggNC41MjkgNC41MjkgMCAwIDAtLjM5MiAxLjg0N2MwIDEuMDIzLjMzOCAxLjk2OC45MDkgMi43MjdhNC41NDQgNC41NDQgMCAxIDEtNC4xNTMtNy4yNDIgNC41NDQgNC41NDQgMCAxIDEgOC42OTgtMS44NDdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTYuMTUzIDEwLjY2NmE0LjU0NCA0LjU0NCAwIDEgMC00LjY3MSAyLjY2OG0wIDBhNC41MzggNC41MzggMCAwIDEgNC42NzEtMi42NjggNC41NDUgNC41NDUgMCAxIDEtNC42NyAyLjY2OFptLTMuNjM1LTIuNjY4QTQuNTQ1IDQuNTQ1IDAgMSAwIDEyIDE3LjkwOCIvPjwvc3ZnPg==)
 */
export const IconColors: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" fillRule="evenodd" d="M16.544 8.819a4.55 4.55 0 0 1-.39 1.847 4.538 4.538 0 0 0-4.671 2.668 4.529 4.529 0 0 0-.392 1.847c0 1.023.338 1.968.909 2.727a4.544 4.544 0 1 1-4.153-7.242 4.544 4.544 0 1 1 8.698-1.847Z" clipRule="evenodd" opacity=".2"/><path stroke="currentColor" strokeWidth="1.5" d="M16.153 10.666a4.544 4.544 0 1 0-4.671 2.668m0 0a4.538 4.538 0 0 1 4.671-2.668 4.545 4.545 0 1 1-4.67 2.668Zm-3.635-2.668A4.545 4.545 0 1 0 12 17.908"/></svg>
  )
}
