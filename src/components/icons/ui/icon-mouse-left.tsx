import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjAyMSA2LjE0N0gxMmMtLjY5IDAtMS4yNTEuNTYtMS4yNTEgMS4yNTF2Ljc2MWMwIC42OTEuNTYgMS4yNTIgMS4yNTEgMS4yNTJoLjAyMW0wLTMuMjY0Yy42ODEuMDExIDEuMjMuNTY3IDEuMjMgMS4yNTF2Ljc2MWMwIC42ODQtLjU0OSAxLjI0LTEuMjMgMS4yNTFtMC0zLjI2M1Y0bTAgNS40MXYyLjE0N20wIDBoNS4xbS01LjEgMEg2Ljc0OE0xMiAyMC41ODFhNS4yMzEgNS4yMzEgMCAwIDAgNS4yMy01LjIzVjguNzA0YTUuMjMgNS4yMyAwIDAgMC0xMC40NiAwdjYuNjQ2QTUuMjMgNS4yMyAwIDAgMCAxMiAyMC41OFoiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDUuMzRjMC0uODU2LS45MDItMS40MTItMS42NjgtMS4wMjhMOC4yMSA1LjM4YTIuNjE1IDIuNjE1IDAgMCAwLTEuNDQgMi4zMzd2Ny42MDdhNS4yMyA1LjIzIDAgMCAwIDUuMjMgNS4yM2guNzMzYTQuNDk4IDQuNDk4IDAgMCAwIDQuNDk4LTQuNDk3di0xLjg4M2EyLjYxNiAyLjYxNiAwIDAgMC0yLjYxNi0yLjYxNkgxMy4xOGExLjE4IDEuMTggMCAwIDEtMS4xOC0xLjE4VjkuNzFhLjUxLjUxIDAgMCAwLS41MS0uNTExLjUxLjUxIDAgMCAxLS41MTEtLjUxVjcuMDAxYS41MS41MSAwIDAgMSAuNTEtLjUxLjUxLjUxIDAgMCAwIC41MTEtLjUxVjUuMzRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PC9zdmc+)
 */
export const IconMouseLeft: Icon = ({ className, ...props }) => {
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
        strokeWidth='1.5'
        d='M12.021 6.147H12c-.69 0-1.251.56-1.251 1.251v.761c0 .691.56 1.252 1.251 1.252h.021m0-3.264c.681.011 1.23.567 1.23 1.251v.761c0 .684-.549 1.24-1.23 1.251m0-3.263V4m0 5.41v2.147m0 0h5.1m-5.1 0H6.748M12 20.581a5.231 5.231 0 0 0 5.23-5.23V8.704a5.23 5.23 0 0 0-10.46 0v6.646A5.23 5.23 0 0 0 12 20.58Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 5.34c0-.856-.902-1.412-1.668-1.028L8.21 5.38a2.615 2.615 0 0 0-1.44 2.337v7.607a5.23 5.23 0 0 0 5.23 5.23h.733a4.498 4.498 0 0 0 4.498-4.497v-1.883a2.616 2.616 0 0 0-2.616-2.616H13.18a1.18 1.18 0 0 1-1.18-1.18V9.71a.51.51 0 0 0-.51-.511.51.51 0 0 1-.511-.51V7.001a.51.51 0 0 1 .51-.51.51.51 0 0 0 .511-.51V5.34Z'
        clipRule='evenodd'
        opacity='.2'
      />
    </svg>
  )
}
