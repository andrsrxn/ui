import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjMwMiAxNS45MzhhMy40MzYgMy40MzYgMCAxIDEtNi44NyAwIDMuNDM2IDMuNDM2IDAgMCAxIDYuODcgMFptLTkuNzMzIDBhMy40MzUgMy40MzUgMCAxIDEtNi44NzEgMCAzLjQzNSAzLjQzNSAwIDAgMSA2Ljg3IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTMuNDMxIDE1LjgzMnMuMTUtNC4zODMgMS4wNzQtNi43MjJjMS43NjktNC40ODQgNC40My00LjQ4NCA0LjQzLTQuNDg0TTMuNjk4IDE1LjgzMnMuMTUtNC4zODMgMS4wNzMtNi43MjJjMS43Ny00LjQ4NCA0LjQzLTQuNDg0IDQuNDMtNC40ODRtMTEuMTAxIDExLjMxMmEzLjQzNiAzLjQzNiAwIDEgMS02Ljg3IDAgMy40MzYgMy40MzYgMCAwIDEgNi44NyAwWm0tOS43MzMgMGEzLjQzNSAzLjQzNSAwIDEgMS02Ljg3MSAwIDMuNDM1IDMuNDM1IDAgMCAxIDYuODcgMFoiLz48L3N2Zz4=)
 */
export const IconQuotesDown: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-quotes-down'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M20.302 15.938a3.436 3.436 0 1 1-6.87 0 3.436 3.436 0 0 1 6.87 0Zm-9.733 0a3.435 3.435 0 1 1-6.871 0 3.435 3.435 0 0 1 6.87 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M13.431 15.832s.15-4.383 1.074-6.722c1.769-4.484 4.43-4.484 4.43-4.484M3.698 15.832s.15-4.383 1.073-6.722c1.77-4.484 4.43-4.484 4.43-4.484m11.101 11.312a3.436 3.436 0 1 1-6.87 0 3.436 3.436 0 0 1 6.87 0Zm-9.733 0a3.435 3.435 0 1 1-6.871 0 3.435 3.435 0 0 1 6.87 0Z'
      />
    </svg>
  )
}
