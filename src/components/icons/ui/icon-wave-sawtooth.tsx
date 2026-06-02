import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjkyNSAxMy40OTJhLjc1Ljc1IDAgMSAxIC44NzMgMS4yMmwtNi43OCA0Ljg1M2MtMS4xNTcuODI5LTIuNzY3LjAwMS0yLjc2OC0xLjQyM1Y1Ljg1OGEuMjUuMjUgMCAwIDAtLjM3OS0uMjE1TDQuMDg4IDkuNzNhLjc1Ljc1IDAgMCAxLS43NzMtMS4yODVsNi43ODItNC4wODZjMS4xNjYtLjcwMyAyLjY1My4xMzcgMi42NTMgMS40OTl2MTIuMjg0YzAgLjIwMy4yMy4zMjIuMzk2LjIwM2w2Ljc4LTQuODUzWiIvPjwvc3ZnPg==)
 */
export const IconWaveSawtooth: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M19.925 13.492a.75.75 0 1 1 .873 1.22l-6.78 4.853c-1.157.829-2.767.001-2.768-1.423V5.858a.25.25 0 0 0-.379-.215L4.088 9.73a.75.75 0 0 1-.773-1.285l6.782-4.086c1.166-.703 2.653.137 2.653 1.499v12.284c0 .203.23.322.396.203l6.78-4.853Z' />
    </svg>
  )
}
