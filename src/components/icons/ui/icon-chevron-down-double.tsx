import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTkuNTc2IDEyLjM4OC00LjY2NCA0LjkzNmMtMS4zNjMgMS40NDEtMi4wNDQgMi4xNjItMi45MDUgMi4xNjItLjg2IDAtMS41NDMtLjcyLTIuOTA2LTIuMTZsLTQuNjc4LTQuOTM4bTE1LjE1My04LTQuNjY0IDQuOTM2Yy0xLjM2MyAxLjQ0MS0yLjA0NCAyLjE2Mi0yLjkwNSAyLjE2Mi0uODYgMC0xLjU0My0uNzItMi45MDYtMi4xNkw0LjQyMyA0LjM4OSIvPjwvc3ZnPg==)
 */
export const IconChevronDownDouble: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m19.576 12.388-4.664 4.936c-1.363 1.441-2.044 2.162-2.905 2.162-.86 0-1.543-.72-2.906-2.16l-4.678-4.938m15.153-8-4.664 4.936c-1.363 1.441-2.044 2.162-2.905 2.162-.86 0-1.543-.72-2.906-2.16L4.423 4.389"/></svg>
  )
}
