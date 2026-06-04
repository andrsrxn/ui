import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNCA0djE0LjYxMWExLjUgMS41IDAgMCAwIDEuNSAxLjVIMjBNNi44NyA4LjU4N2wzLjc2MiAzLjc2MWExIDEgMCAwIDAgMS40MjQtLjAxbDEuNzE1LTEuNzY0YTEgMSAwIDAgMSAxLjQzOC4wMDRsNC4zMTUgNC40OSIvPjwvc3ZnPg==)
 */
export const IconChartLineDown: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 4v14.611a1.5 1.5 0 0 0 1.5 1.5H20M6.87 8.587l3.762 3.761a1 1 0 0 0 1.424-.01l1.715-1.764a1 1 0 0 1 1.438.004l4.315 4.49"/></svg>
  )
}
