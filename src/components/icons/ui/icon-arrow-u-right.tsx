import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIuOTExIDEzLjQ5NGE1LjE2MyA1LjE2MyAwIDAgMSA1LjE2NC01LjE2MmgxMS4zMThjLS4yOTYtLjM4My0uNzQ4LS44MzktMS40MTYtMS41MDdsLS44NzctLjg3N2EuNzUuNzUgMCAxIDEgMS4wNi0xLjA2bC44NzcuODc2Yy42NTMuNjUyIDEuMTk3IDEuMTk0IDEuNTY4IDEuNjguMzg0LjUwNS42NTQgMS4wMzguNjU0IDEuNjgyIDAgLjY0NS0uMjcxIDEuMTc3LS42NTYgMS42OC0uMzcyLjQ4Ny0uOTE2IDEuMDI4LTEuNTY5IDEuNjhsLS44NzQuODcyYS43NS43NSAwIDAgMS0xLjA2LTEuMDYybC44NzUtLjg3M2MuNjgyLS42OCAxLjE0LTEuMTQgMS40MzYtMS41MjdsLjA0Ny0uMDY0SDguMDc1YTMuNjYzIDMuNjYzIDAgMSAwIDAgNy4zMjVoMTAuMTZhLjc1Ljc1IDAgMCAxIDAgMS41SDguMDc1YTUuMTYzIDUuMTYzIDAgMCAxLTUuMTY0LTUuMTYzWiIvPjwvc3ZnPg==)
 */
export const IconArrowURight: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M2.911 13.494a5.163 5.163 0 0 1 5.164-5.162h11.318c-.296-.383-.748-.839-1.416-1.507l-.877-.877a.75.75 0 1 1 1.06-1.06l.877.876c.653.652 1.197 1.194 1.568 1.68.384.505.654 1.038.654 1.682 0 .645-.271 1.177-.656 1.68-.372.487-.916 1.028-1.569 1.68l-.874.872a.75.75 0 0 1-1.06-1.062l.875-.873c.682-.68 1.14-1.14 1.436-1.527l.047-.064H8.075a3.663 3.663 0 1 0 0 7.325h10.16a.75.75 0 0 1 0 1.5H8.075a5.163 5.163 0 0 1-5.164-5.163Z' />
    </svg>
  )
}
