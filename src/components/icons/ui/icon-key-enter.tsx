import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTkuNDg1IDguNTcydi40NzVjMCAxLjg4NiAwIDIuODI5LS41ODYgMy40MTUtLjU4NS41ODUtMS41MjguNTg1LTMuNDE0LjU4NUgzLjk4TTYuNzEgOS40OWwtLjcyNy43MjZjLTEuMzM2IDEuMzM0LTIuMDA0IDItMi4wMDQgMi44MyAwIC44MjguNjY2IDEuNDk1IDIuMDAxIDIuODNsLjczLjczIi8+PC9zdmc+)
 */
export const IconKeyEnter: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-key-enter'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19.485 8.572v.475c0 1.886 0 2.829-.586 3.415-.585.585-1.528.585-3.414.585H3.98M6.71 9.49l-.727.726c-1.336 1.334-2.004 2-2.004 2.83 0 .828.666 1.495 2.001 2.83l.73.73'
      />
    </svg>
  )
}
