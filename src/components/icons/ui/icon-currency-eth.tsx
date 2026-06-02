import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTExLjc2IDE1LjQ4NSA3LjE5IDEzLjAzYy0uNDY4LS4yNTEtLjk1My4zMDMtLjY0Mi43MzNsNS4wNDMgNi45NzhhLjUuNSAwIDAgMCAuODE0LS4wMDVsNC45MDctNi45NjNjLjMwNS0uNDMzLS4xODYtLjk4Mi0uNjUtLjcyNmwtNC40MjMgMi40MzdhLjUuNSAwIDAgMS0uNDc4LjAwMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTEzLjM4NCAzLjQwM2ExLjYyNCAxLjYyNCAwIDAgMC0yLjY1NS0uMDExTDUuMzE0IDExYy0uNC41Ni0uNDAxIDEuMzEyLS4wMDYgMS44NzZsNS40MTUgNy43MWMuNjUuOTI1IDIuMDI1LjkxOSAyLjY2Ny0uMDEzbDUuMzE4LTcuNzFhMS42MjUgMS42MjUgMCAwIDAtLjAwNy0xLjg1MmwtNS4zMTctNy42MDhaTTYuNzIyIDExLjQxbDQuNTgyLTYuNDI1djkuMzE0TDYuNzIyIDExLjQxWm01Ljk3NS02LjU2IDQuNTggNi41NTUtLjAxLjAwNy00LjU3IDIuOTAyVjQuODVabS4xODkgMTAuOTk0IDMuNjktMi4zNDQtMy44OCA1LjYyNXYtMy4xNzhjLjA2NS0uMDMuMTI5LS4wNjQuMTktLjEwM1ptLTEuNTgyIDMuMTQ1LTMuODM2LTUuNDYyIDMuNjggMi4zMmMuMDUxLjAzMi4xMDMuMDYuMTU2LjA4N3YzLjA1NVoiLz48L3N2Zz4=)
 */
export const IconCurrencyEth: Icon = ({ className, ...props }) => {
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
        d='M11.76 15.485 7.19 13.03c-.468-.251-.953.303-.642.733l5.043 6.978a.5.5 0 0 0 .814-.005l4.907-6.963c.305-.433-.186-.982-.65-.726l-4.423 2.437a.5.5 0 0 1-.478.002Z'
        opacity='.2'
      />
      <path d='M13.384 3.403a1.624 1.624 0 0 0-2.655-.011L5.314 11c-.4.56-.401 1.312-.006 1.876l5.415 7.71c.65.925 2.025.919 2.667-.013l5.318-7.71a1.625 1.625 0 0 0-.007-1.852l-5.317-7.608ZM6.722 11.41l4.582-6.425v9.314L6.722 11.41Zm5.975-6.56 4.58 6.555-.01.007-4.57 2.902V4.85Zm.189 10.994 3.69-2.344-3.88 5.625v-3.178c.065-.03.129-.064.19-.103Zm-1.582 3.145-3.836-5.462 3.68 2.32c.051.032.103.06.156.087v3.055Z' />
    </svg>
  )
}
