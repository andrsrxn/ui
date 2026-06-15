import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTUuNDgxIDcuMDU2LTcuMjcgNy4yN2ExLjUgMS41IDAgMSAwIDIuMTIyIDIuMTIybDcuNTg0LTcuNTgzYTMuMDAxIDMuMDAxIDAgMSAwLTQuMjQ1LTQuMjQ1bC03Ljg3IDcuODcxYTQuNTAyIDQuNTAyIDAgMSAwIDYuMzY2IDYuMzY3bDQuNzI5LTQuNzMiLz48L3N2Zz4=)
 */
export const IconPaperClip: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m15.481 7.056-7.27 7.27a1.5 1.5 0 1 0 2.122 2.122l7.584-7.583a3.001 3.001 0 1 0-4.245-4.245l-7.87 7.871a4.502 4.502 0 1 0 6.366 6.367l4.729-4.73"/></svg>
  )
}
