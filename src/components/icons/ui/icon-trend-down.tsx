import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy43NTUgMTEuNDF2My40NzJhMS41IDEuNSAwIDAgMCAxLjUgMS41aDMuNDMzbTExLjU1Ny05LjM0NS00Ljk3OCA0Ljk3OGExIDEgMCAwIDEtMS40MjQtLjAxbC0yLjI1OC0yLjMyNGExIDEgMCAwIDAtMS40MzguMDA0TDQuMTUyIDE1LjkiLz48L3N2Zz4=)
 */
export const IconTrendDown: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3.755 11.41v3.472a1.5 1.5 0 0 0 1.5 1.5h3.433m11.557-9.345-4.978 4.978a1 1 0 0 1-1.424-.01l-2.258-2.324a1 1 0 0 0-1.438.004L4.152 15.9"/></svg>
  )
}
