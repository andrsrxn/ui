import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy41ODMgNi45MjVTNS4zODggNSA4LjI1OSA1YzIuODcyIDAgNS41ODUgMS45MjUgOC40MTcgMS45MjVTMjAuNDE3IDUgMjAuNDE3IDVNMy41ODMgMTIuOTYzczEuODA1LTEuOTI1IDQuNjc2LTEuOTI1YzIuODcyIDAgNS41ODUgMS45MjUgOC40MTcgMS45MjVzMy43NDEtMS45MjUgMy43NDEtMS45MjVNMy41ODMgMTlzMS44MDUtMS45MjUgNC42NzYtMS45MjVjMi44NzIgMCA1LjU4NSAxLjkyNSA4LjQxNyAxLjkyNXMzLjc0MS0xLjkyNSAzLjc0MS0xLjkyNSIvPjwvc3ZnPg==)
 */
export const IconWaves: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3.583 6.925S5.388 5 8.259 5c2.872 0 5.585 1.925 8.417 1.925S20.417 5 20.417 5M3.583 12.963s1.805-1.925 4.676-1.925c2.872 0 5.585 1.925 8.417 1.925s3.741-1.925 3.741-1.925M3.583 19s1.805-1.925 4.676-1.925c2.872 0 5.585 1.925 8.417 1.925s3.741-1.925 3.741-1.925"/></svg>
  )
}
