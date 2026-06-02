import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC40NjggMTQuNzhoMi40NGMuNDM0IDIuMDcgMS40NTYgMy41NTUgMi42OTYgNC41NyAxLjYyNCAxLjMyOCAzLjU3NSAxLjgxMSA0LjkzNiAxLjgxMiAyLjE2IDAgNC4xNTgtMS4xMTIgNC45MDgtMS42NzRhLjcwNS43MDUgMCAwIDAtLjg0Ni0xLjEyN2MtLjYxMy40Ni0yLjMxNyAxLjM5MS00LjA2MiAxLjM5MS0xLjA3OSAwLTIuNzAzLS4zOTctNC4wNDQtMS40OTQtLjkyNy0uNzU4LTEuNzQzLTEuODctMi4xNDItMy40NzhoNS44MjNhLjcwNS43MDUgMCAxIDAgMC0xLjQxaC02LjA1YTEwLjY2NCAxMC42NjQgMCAwIDEtLjAzMy0uODU5YzAtLjMzMy4wMTMtLjY1NS4wMzctLjk2Nmg2LjA0NmEuNzA1LjcwNSAwIDEgMCAwLTEuNDFIOC4zMzZjLjg5LTQuMTE3IDQuMDQzLTUuODg3IDYuMjA0LTUuODg3IDIuMTE5IDAgMy41NCAxLjEyNyAzLjkzOSAxLjYxNGEuNzA1LjcwNSAwIDAgMCAxLjA5LS44OTJjLS42MjMtLjc2Mi0yLjQyNS0yLjEzMi01LjAyOS0yLjEzMi0yLjkyNyAwLTYuNzEgMi4zNjQtNy42NDEgNy4yOTdINC40NjhhLjcwNS43MDUgMCAwIDAgMCAxLjQxaDIuMjVhMTMuNjg2IDEzLjY4NiAwIDAgMC0uMDA0IDEuODI1SDQuNDY4YS43MDUuNzA1IDAgMSAwIDAgMS40MVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)
 */
export const IconCurrencyEur: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fillRule='evenodd'
        d='M4.468 14.78h2.44c.434 2.07 1.456 3.555 2.696 4.57 1.624 1.328 3.575 1.811 4.936 1.812 2.16 0 4.158-1.112 4.908-1.674a.705.705 0 0 0-.846-1.127c-.613.46-2.317 1.391-4.062 1.391-1.079 0-2.703-.397-4.044-1.494-.927-.758-1.743-1.87-2.142-3.478h5.823a.705.705 0 1 0 0-1.41h-6.05a10.664 10.664 0 0 1-.033-.859c0-.333.013-.655.037-.966h6.046a.705.705 0 1 0 0-1.41H8.336c.89-4.117 4.043-5.887 6.204-5.887 2.119 0 3.54 1.127 3.939 1.614a.705.705 0 0 0 1.09-.892c-.623-.762-2.425-2.132-5.029-2.132-2.927 0-6.71 2.364-7.641 7.297H4.468a.705.705 0 0 0 0 1.41h2.25a13.686 13.686 0 0 0-.004 1.825H4.468a.705.705 0 1 0 0 1.41Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
