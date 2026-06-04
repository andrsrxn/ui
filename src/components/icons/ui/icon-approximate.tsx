import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy42NCAxMC4zMjRzMS43OTItMS44NTggNC42NDQtMS44NThjMi44NTIgMCA1LjU0OCAxLjg1OCA4LjM2IDEuODU4IDIuODE0IDAgMy43MTctMS44NTggMy43MTctMS44NThNMy42MzkgMTUuNTM0czEuNzkzLTEuODU4IDQuNjQ1LTEuODU4YzIuODUyIDAgNS41NDggMS44NTggOC4zNiAxLjg1OCAyLjgxNCAwIDMuNzE3LTEuODU4IDMuNzE3LTEuODU4Ii8+PC9zdmc+)
 */
export const IconApproximate: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3.64 10.324s1.792-1.858 4.644-1.858c2.852 0 5.548 1.858 8.36 1.858 2.814 0 3.717-1.858 3.717-1.858M3.639 15.534s1.793-1.858 4.645-1.858c2.852 0 5.548 1.858 8.36 1.858 2.814 0 3.717-1.858 3.717-1.858"/></svg>
  )
}
