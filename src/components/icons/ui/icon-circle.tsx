import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjQ4IDEyYTguNDggOC40OCAwIDEgMS0xNi45NiAwIDguNDggOC40OCAwIDAgMSAxNi45NiAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMC40OCAxMmE4LjQ4IDguNDggMCAxIDEtMTYuOTYgMCA4LjQ4IDguNDggMCAwIDEgMTYuOTYgMFoiLz48L3N2Zz4=)
 */
export const IconCircle: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-circle'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M20.48 12a8.48 8.48 0 1 1-16.96 0 8.48 8.48 0 0 1 16.96 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M20.48 12a8.48 8.48 0 1 1-16.96 0 8.48 8.48 0 0 1 16.96 0Z'
      />
    </svg>
  )
}
