import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTYuMTk3IDRzMy43NjIgMi4wNjkgMy43NjIgOC4wNjljMCA2LTMuNzYyIDcuOTMxLTMuNzYyIDcuOTMxTTcuNzkgNHMtMy43NiAyLjA2OS0zLjc2IDguMDY5YzAgNiAzLjc2MiA3LjkzMSAzLjc2MiA3LjkzMW0uNjU3LTQuNzI4YzMuMTMzLS4zMTcgNC02LjE2MiA3LjEyNy02LjU0NG0wIDYuNTQ0aC0uMDU5Yy0uNTAyIDAtLjc1MyAwLS45NjctLjExLS4yMTUtLjExLS4zNjItLjMxNC0uNjU1LS43MjFsLTMuNTE2LTQuODgyYy0uMjk0LS40MDctLjQ0LS42MS0uNjU1LS43Mi0uMjE1LS4xMS0uNDY2LS4xMS0uOTY4LS4xMWgtLjMwNyIvPjwvc3ZnPg==)
 */
export const IconVariable: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-variable'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.197 4s3.762 2.069 3.762 8.069c0 6-3.762 7.931-3.762 7.931M7.79 4s-3.76 2.069-3.76 8.069c0 6 3.762 7.931 3.762 7.931m.657-4.728c3.133-.317 4-6.162 7.127-6.544m0 6.544h-.059c-.502 0-.753 0-.967-.11-.215-.11-.362-.314-.655-.721l-3.516-4.882c-.294-.407-.44-.61-.655-.72-.215-.11-.466-.11-.968-.11h-.307'
      />
    </svg>
  )
}
