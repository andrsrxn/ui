import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTE2Ljk1IDE3LjM0MSAxLjc0OC0yLjEyN2EuNS41IDAgMCAxIC44ODYuMzE4djIuMTI3YS41LjUgMCAwIDEtLjUuNWgtMS43NDdhLjUuNSAwIDAgMS0uMzg2LS44MThaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNC41MDUgMy43NXY3LjM3NW0wIDBWMTguNW0wLTcuMzc1aDguOTltMCAwVjE4LjVtMC03LjM3NVYzLjc1MW02LjM3OSAxNi42NS4wMTUtMi4wMjdtMCAwIC4wMjctMy43ODZhLjUuNSAwIDAgMC0uOS0uMzAzbC0yLjQ2NSAzLjI4OWEuNS41IDAgMCAwIC40LjhoMi45MzhabTAgMGguODE3Ii8+PC9zdmc+)
 */
export const IconTextHeading4: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="m16.95 17.341 1.748-2.127a.5.5 0 0 1 .886.318v2.127a.5.5 0 0 1-.5.5h-1.747a.5.5 0 0 1-.386-.818Z" opacity=".2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4.505 3.75v7.375m0 0V18.5m0-7.375h8.99m0 0V18.5m0-7.375V3.751m6.379 16.65.015-2.027m0 0 .027-3.786a.5.5 0 0 0-.9-.303l-2.465 3.289a.5.5 0 0 0 .4.8h2.938Zm0 0h.817"/></svg>
  )
}
