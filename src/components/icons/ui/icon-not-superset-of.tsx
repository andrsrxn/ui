import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTcuOTc2IDQuOTYzIDIuMjU5LTIuMjU4YS43NS43NSAwIDEgMSAxLjA2IDEuMDZMMTguOTczIDYuMDljMi4yMTUgMy4xMzcgMS41ODUgNy44MTMtMi4wNDUgMTAuMDdsLS4yMjcuMTQyYTcuMjA5IDcuMjA5IDAgMCAxLTMuODA4IDEuMDg4aC01LjIybC0yLjA5NCAyLjA5NGgxMy42NDhhLjc1Ljc1IDAgMCAxIDAgMS41SDQuMDhsLS4zMTQuMzEzYS43NS43NSAwIDAgMS0xLjA2LTEuMDZsMi44NDUtMi44NDdoLS42ODZhLjc1Ljc1IDAgMCAxIDAtMS41SDcuMDVsOS44NjMtOS44NjNhNS42NTggNS42NTggMCAwIDAtMS4xNTUtLjc5MSA1LjU1OCA1LjU1OCAwIDAgMC0yLjU1OC0uNjI0SDQuODY0YS43NS43NSAwIDEgMSAwLTEuNUgxMy4yYzEuMTMgMCAyLjI0NC4yNzIgMy4yNDguNzkyYTcuMTc1IDcuMTc1IDAgMCAxIDEuNTI4IDEuMDZabS0uMDg3IDIuMjA4TDkuMTcxIDE1Ljg5aDMuNzIxYzEuMDY2IDAgMi4xMS0uMjk5IDMuMDE2LS44NjJsLjIyOC0uMTRjMi43NzYtMS43MjggMy4zMjMtNS4yNSAxLjc1My03LjcxNloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)
 */
export const IconNotSupersetOf: Icon = ({ className, ...props }) => {
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
        d='m17.976 4.963 2.259-2.258a.75.75 0 1 1 1.06 1.06L18.973 6.09c2.215 3.137 1.585 7.813-2.045 10.07l-.227.142a7.209 7.209 0 0 1-3.808 1.088h-5.22l-2.094 2.094h13.648a.75.75 0 0 1 0 1.5H4.08l-.314.313a.75.75 0 0 1-1.06-1.06l2.845-2.847h-.686a.75.75 0 0 1 0-1.5H7.05l9.863-9.863a5.658 5.658 0 0 0-1.155-.791 5.558 5.558 0 0 0-2.558-.624H4.864a.75.75 0 1 1 0-1.5H13.2c1.13 0 2.244.272 3.248.792a7.175 7.175 0 0 1 1.528 1.06Zm-.087 2.208L9.171 15.89h3.721c1.066 0 2.11-.299 3.016-.862l.228-.14c2.776-1.728 3.323-5.25 1.753-7.716Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
