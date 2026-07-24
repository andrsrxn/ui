import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYuNzcgMTEuNTU3aDEwLjQ2djMuNzY2YTUuMjMgNS4yMyAwIDEgMS0xMC40NiAwdi0zLjc2NlptNC4yNTctNS4zMDEuNTE2LS4yN2ExIDEgMCAwIDEgLjkxNy0uMDA3bC41NTIuMjhhMSAxIDAgMCAxIC41NDguODkydjEuMzAyYTEgMSAwIDAgMS0uNDYuODQybC0uNTUxLjM1M2ExIDEgMCAwIDEtMS4wOTItLjAwOGwtLjUxOC0uMzQzYTEgMSAwIDAgMS0uNDQ3LS44MzRWNy4xNDJhMSAxIDAgMCAxIC41MzUtLjg4NloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTEuOTUxIDUuNzc0aC4wMjhjLjkxMSAwIDEuNjUuNzQgMS42NSAxLjY1VjguNDNhMS42NSAxLjY1IDAgMCAxLTEuNjUgMS42NWgtLjAyOG0wLTQuMzA1YTEuNjUgMS42NSAwIDAgMC0xLjYyMyAxLjY1VjguNDNhMS42NSAxLjY1IDAgMCAwIDEuNjIzIDEuNjVtMC00LjMwNUwxMS45NTggNG0tLjAwNyA2LjA4LjAwNyAxLjk3Mm0wIDBIN200Ljk1OCAwaDUuMjczbS01LjI1MiA4LjUzYTUuMjMgNS4yMyAwIDAgMS01LjIzMS01LjIzMlY4LjcwNmE1LjIzIDUuMjMgMCAwIDEgMTAuNDYyIDB2Ni42NDZhNS4yMzEgNS4yMzEgMCAwIDEtNS4yMzEgNS4yM1oiLz48L3N2Zz4=)
 */
export const IconMouseMiddle: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-mouse-middle'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M6.77 11.557h10.46v3.766a5.23 5.23 0 1 1-10.46 0v-3.766Zm4.257-5.301.516-.27a1 1 0 0 1 .917-.007l.552.28a1 1 0 0 1 .548.892v1.302a1 1 0 0 1-.46.842l-.551.353a1 1 0 0 1-1.092-.008l-.518-.343a1 1 0 0 1-.447-.834V7.142a1 1 0 0 1 .535-.886Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M11.951 5.774h.028c.911 0 1.65.74 1.65 1.65V8.43a1.65 1.65 0 0 1-1.65 1.65h-.028m0-4.305a1.65 1.65 0 0 0-1.623 1.65V8.43a1.65 1.65 0 0 0 1.623 1.65m0-4.305L11.958 4m-.007 6.08.007 1.972m0 0H7m4.958 0h5.273m-5.252 8.53a5.23 5.23 0 0 1-5.231-5.232V8.706a5.23 5.23 0 0 1 10.462 0v6.646a5.231 5.231 0 0 1-5.231 5.23Z'
      />
    </svg>
  )
}
