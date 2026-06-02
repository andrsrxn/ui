import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjI0IDUuMTU1YS43Ni43NiAwIDAgMSAwIDEuNTIxSDguOTlhLjc2Ljc2IDAgMCAxIDAtMS41MjFoMTEuMjVabTAgNi4wODVhLjc2Ljc2IDAgMCAxIDAgMS41Mkg4Ljk5YS43Ni43NiAwIDAgMSAwLTEuNTJoMTEuMjVabTAgNi4wODRhLjc2Ljc2IDAgMCAxIDAgMS41MjFIOC45OWEuNzYuNzYgMCAxIDEgMC0xLjUyMWgxMS4yNVpNNi4yNjMgNS45MTZhMS42MzEgMS42MzEgMCAxIDEtMy4yNjMgMCAxLjYzMSAxLjYzMSAwIDAgMSAzLjI2MyAwWm0wIDYuMDg0QTEuNjMxIDEuNjMxIDAgMSAxIDMgMTJhMS42MzEgMS42MzEgMCAwIDEgMy4yNjMgMFptMCA2LjA4NGExLjYzMSAxLjYzMSAwIDEgMS0zLjI2MyAwIDEuNjMxIDEuNjMxIDAgMCAxIDMuMjYzIDBaIi8+PC9zdmc+)
 */
export const IconListUnordered: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.24 5.155a.76.76 0 0 1 0 1.521H8.99a.76.76 0 0 1 0-1.521h11.25Zm0 6.085a.76.76 0 0 1 0 1.52H8.99a.76.76 0 0 1 0-1.52h11.25Zm0 6.084a.76.76 0 0 1 0 1.521H8.99a.76.76 0 1 1 0-1.521h11.25ZM6.263 5.916a1.631 1.631 0 1 1-3.263 0 1.631 1.631 0 0 1 3.263 0Zm0 6.084A1.631 1.631 0 1 1 3 12a1.631 1.631 0 0 1 3.263 0Zm0 6.084a1.631 1.631 0 1 1-3.263 0 1.631 1.631 0 0 1 3.263 0Z' />
    </svg>
  )
}
