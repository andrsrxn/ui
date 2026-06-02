import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzI4IDEyLjk2djEuNzdoNC4wMTZsLjA3NC4wMDNhLjcxNS43MTUgMCAwIDEgMCAxLjQyMmwtLjA3NC4wMDNoLTQuMDE2djQuNDE5YS43MTUuNzE1IDAgMCAxLTEuNDMgMHYtNC40MTlINy4yNTdhLjcxNS43MTUgMCAwIDEgMC0xLjQyOUgxMS4zdi0xLjc2OEg1LjI1NWEuNzE1LjcxNSAwIDAgMSAwLTEuNDNoNS4yMThMNC4wNiAzLjg4MmEuNzE1LjcxNSAwIDAgMSAxLjA5Ni0uOTE3bDYuODU2IDguMTc3IDYuODMxLTguMTc2YS43MTUuNzE1IDAgMCAxIDEuMDk4LjkxNWwtNi4zOTEgNy42NWg1LjE5NWEuNzE1LjcxNSAwIDAgMSAwIDEuNDNoLTYuMDE3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)
 */
export const IconCurrencyJpy: Icon = ({ className, ...props }) => {
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
        d='M12.728 12.96v1.77h4.016l.074.003a.715.715 0 0 1 0 1.422l-.074.003h-4.016v4.419a.715.715 0 0 1-1.43 0v-4.419H7.257a.715.715 0 0 1 0-1.429H11.3v-1.768H5.255a.715.715 0 0 1 0-1.43h5.218L4.06 3.882a.715.715 0 0 1 1.096-.917l6.856 8.177 6.831-8.176a.715.715 0 0 1 1.098.915l-6.391 7.65h5.195a.715.715 0 0 1 0 1.43h-6.017Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
