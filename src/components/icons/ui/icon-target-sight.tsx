import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0LjYwNSAxMmEyLjYwNSAyLjYwNSAwIDEgMS01LjIxIDAgMi42MDUgMi42MDUgMCAwIDEgNS4yMSAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTExLjk5NSA2LjU5NVYyLjg1Nm0wIDE4LjI4OHYtMy43NG0tNS40LTUuMzk5SDIuODU2bTE4LjI4OCAwaC0zLjc0bTEuODctLjAwNWE3LjI3NCA3LjI3NCAwIDEgMS0xNC41NDggMCA3LjI3NCA3LjI3NCAwIDAgMSAxNC41NDggMFptLTQuNjY5IDBhMi42MDUgMi42MDUgMCAxIDEtNS4yMSAwIDIuNjA1IDIuNjA1IDAgMCAxIDUuMjEgMFoiLz48L3N2Zz4=)
 */
export const IconTargetSight: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M14.605 12a2.605 2.605 0 1 1-5.21 0 2.605 2.605 0 0 1 5.21 0Z" opacity=".2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11.995 6.595V2.856m0 18.288v-3.74m-5.4-5.399H2.856m18.288 0h-3.74m1.87-.005a7.274 7.274 0 1 1-14.548 0 7.274 7.274 0 0 1 14.548 0Zm-4.669 0a2.605 2.605 0 1 1-5.21 0 2.605 2.605 0 0 1 5.21 0Z"/></svg>
  )
}
