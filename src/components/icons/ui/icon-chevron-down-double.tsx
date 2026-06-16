import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTkuNTc3IDEyLjM4OC00LjY2NSA0LjkzNmMtMS4zNjMgMS40NDEtMi4wNDQgMi4xNjItMi45MDUgMi4xNjItLjg2IDAtMS41NDMtLjcyLTIuOTA2LTIuMTZsLTQuNjc4LTQuOTM4bTE1LjE1NC04LTQuNjY1IDQuOTM2Yy0xLjM2MyAxLjQ0MS0yLjA0NCAyLjE2Mi0yLjkwNSAyLjE2Mi0uODYgMC0xLjU0My0uNzItMi45MDYtMi4xNkw0LjQyMyA0LjM4OSIvPjwvc3ZnPg==)
 */
export const IconChevronDownDouble: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
      className={cn('bp-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m19.577 12.388-4.665 4.936c-1.363 1.441-2.044 2.162-2.905 2.162-.86 0-1.543-.72-2.906-2.16l-4.678-4.938m15.154-8-4.665 4.936c-1.363 1.441-2.044 2.162-2.905 2.162-.86 0-1.543-.72-2.906-2.16L4.423 4.389'
      />
    </svg>
  )
}
