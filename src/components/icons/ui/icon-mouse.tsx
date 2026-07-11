import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYuNzcgMTEuNTU3aDEwLjQ2djMuNzY2YTUuMjMgNS4yMyAwIDEgMS0xMC40NiAwdi0zLjc2NloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTEuOTU4IDYuMTQ3aC4wMmMuNjkyIDAgMS4yNTIuNTYgMS4yNTIgMS4yNTF2Ljc2MWMwIC42OTEtLjU2IDEuMjUyLTEuMjUxIDEuMjUyaC0uMDIxbTAtMy4yNjRhMS4yNTEgMS4yNTEgMCAwIDAtMS4yMyAxLjI1MXYuNzYxYzAgLjY4NC41NDkgMS4yNCAxLjIzIDEuMjUxbTAtMy4yNjNWNG0wIDUuNDF2Mi4xNDdtMCAwaC01LjFtNS4xIDBoNS4yNzNtLTUuMjUyIDkuMDI0YTUuMjMgNS4yMyAwIDAgMS01LjIzLTUuMjNWOC43MDRhNS4yMyA1LjIzIDAgMSAxIDEwLjQ2IDB2Ni42NDZhNS4yMzEgNS4yMzEgMCAwIDEtNS4yMyA1LjIzWiIvPjwvc3ZnPg==)
 */
export const IconMouse: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-mouse'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M6.77 11.557h10.46v3.766a5.23 5.23 0 1 1-10.46 0v-3.766Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M11.958 6.147h.02c.692 0 1.252.56 1.252 1.251v.761c0 .691-.56 1.252-1.251 1.252h-.021m0-3.264a1.251 1.251 0 0 0-1.23 1.251v.761c0 .684.549 1.24 1.23 1.251m0-3.263V4m0 5.41v2.147m0 0h-5.1m5.1 0h5.273m-5.252 9.024a5.23 5.23 0 0 1-5.23-5.23V8.704a5.23 5.23 0 1 1 10.46 0v6.646a5.231 5.231 0 0 1-5.23 5.23Z'
      />
    </svg>
  )
}
