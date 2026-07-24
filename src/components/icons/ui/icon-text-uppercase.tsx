import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjE1OSAxMi4yODcgOC42OSA3LjczMmMtLjI5OC0uOTI0LTEuNjA2LS45MjQtMS45MDQgMEw1LjMyIDEyLjI4N2ExIDEgMCAwIDAgLjk1MiAxLjMwNmgyLjkzNWExIDEgMCAwIDAgLjk1Mi0xLjMwNlptOC41MjEgMC0xLjQ2OC00LjU1NGMtLjI5Ny0uOTI0LTEuNjA1LS45MjQtMS45MDMgMGwtMS40NjggNC41NTRhMSAxIDAgMCAwIC45NTIgMS4zMDZoMi45MzVhMSAxIDAgMCAwIC45NTItMS4zMDZaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMjAuNTIxIDE4LTEuNDItNC40MDctMS4zMTctNC4wODhjLS42MjctMS45NDUtLjk0LTIuOTE3LTEuNTIzLTIuOTE3cy0uODk2Ljk3Mi0xLjUyMyAyLjkxN2wtMS4zMTggNC4wODhMMTIgMThsLTEuNDItNC40MDctMS4zMTgtNC4wODhjLS42MjctMS45NDUtLjk0LTIuOTE3LTEuNTIzLTIuOTE3LS41ODIgMC0uODk2Ljk3Mi0xLjUyMyAyLjkxN0w0LjkgMTMuNTkzbTUuNjggMEg0LjlNMy40NzkgMThsMS40Mi00LjQwN20xNC4yMDIgMGgtNS42OCIvPjwvc3ZnPg==)
 */
export const IconTextUppercase: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-text-uppercase'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M10.159 12.287 8.69 7.732c-.298-.924-1.606-.924-1.904 0L5.32 12.287a1 1 0 0 0 .952 1.306h2.935a1 1 0 0 0 .952-1.306Zm8.521 0-1.468-4.554c-.297-.924-1.605-.924-1.903 0l-1.468 4.554a1 1 0 0 0 .952 1.306h2.935a1 1 0 0 0 .952-1.306Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m20.521 18-1.42-4.407-1.317-4.088c-.627-1.945-.94-2.917-1.523-2.917s-.896.972-1.523 2.917l-1.318 4.088L12 18l-1.42-4.407-1.318-4.088c-.627-1.945-.94-2.917-1.523-2.917-.582 0-.896.972-1.523 2.917L4.9 13.593m5.68 0H4.9M3.479 18l1.42-4.407m14.202 0h-5.68'
      />
    </svg>
  )
}
