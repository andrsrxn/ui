import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTQuODU3IDEzLjY5NmExLjQ3MyAxLjQ3MyAwIDEgMSAwIDIuOTQ3IDEuNDczIDEuNDczIDAgMCAxIDAtMi45NDdabTcuMTQzIDBhMS40NzMgMS40NzMgMCAxIDEgMCAyLjk0NyAxLjQ3MyAxLjQ3MyAwIDAgMSAwLTIuOTQ3Wm03LjE0MyAwYTEuNDczIDEuNDczIDAgMSAxIDAgMi45NDcgMS40NzMgMS40NzMgMCAwIDEgMC0yLjk0N1pNNC44NTcgNy4zNTdhMS40NzMgMS40NzMgMCAxIDEgMCAyLjk0NyAxLjQ3MyAxLjQ3MyAwIDAgMSAwLTIuOTQ3Wm03LjE0MyAwYTEuNDczIDEuNDczIDAgMSAxIDAgMi45NDcgMS40NzMgMS40NzMgMCAwIDEgMC0yLjk0N1ptNy4xNDMgMGExLjQ3MyAxLjQ3MyAwIDEgMSAwIDIuOTQ3IDEuNDczIDEuNDczIDAgMCAxIDAtMi45NDdaIi8+PC9zdmc+)
 */
export const IconGripHorizontal: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M4.857 13.696a1.473 1.473 0 1 1 0 2.947 1.473 1.473 0 0 1 0-2.947Zm7.143 0a1.473 1.473 0 1 1 0 2.947 1.473 1.473 0 0 1 0-2.947Zm7.143 0a1.473 1.473 0 1 1 0 2.947 1.473 1.473 0 0 1 0-2.947ZM4.857 7.357a1.473 1.473 0 1 1 0 2.947 1.473 1.473 0 0 1 0-2.947Zm7.143 0a1.473 1.473 0 1 1 0 2.947 1.473 1.473 0 0 1 0-2.947Zm7.143 0a1.473 1.473 0 1 1 0 2.947 1.473 1.473 0 0 1 0-2.947Z' />
    </svg>
  )
}
