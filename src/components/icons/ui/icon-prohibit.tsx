import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjE3NyAxMmE4LjE3NyA4LjE3NyAwIDEgMS0xNi4zNTQgMCA4LjE3NyA4LjE3NyAwIDAgMSAxNi4zNTQgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE5LjQyNyAxMkE3LjQyNyA3LjQyNyAwIDAgMCA3LjMwNiA2LjI0NWwxMC40NDggMTAuNDQ4QTcuMzk0IDcuMzk0IDAgMCAwIDE5LjQyNyAxMlpNNC41NzMgMTJhNy40MjcgNy40MjcgMCAwIDAgMTIuMTIgNS43NTRMNi4yNDUgNy4zMDZBNy4zOTYgNy4zOTYgMCAwIDAgNC41NzMgMTJabTE2LjM1NCAwYTguODg5IDguODg5IDAgMCAxLTIuMTA5IDUuNzU4bDEuNzI4IDEuNzI3YS43NS43NSAwIDEgMS0xLjA2IDEuMDZsLTEuNzI4LTEuNzI3QTguOTI3IDguOTI3IDAgMCAxIDUuMTggNi4yNDFMMy40NTQgNC41MTVhLjc1Ljc1IDAgMSAxIDEuMDYtMS4wNjFsMS43MjcgMS43MjdBOC45MjcgOC45MjcgMCAwIDEgMjAuOTI3IDEyWiIvPjwvc3ZnPg==)
 */
export const IconProhibit: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.177 12a8.177 8.177 0 1 1-16.354 0 8.177 8.177 0 0 1 16.354 0Z' opacity='.2' />
      <path d='M19.427 12A7.427 7.427 0 0 0 7.306 6.245l10.448 10.448A7.394 7.394 0 0 0 19.427 12ZM4.573 12a7.427 7.427 0 0 0 12.12 5.754L6.245 7.306A7.396 7.396 0 0 0 4.573 12Zm16.354 0a8.889 8.889 0 0 1-2.109 5.758l1.728 1.727a.75.75 0 1 1-1.06 1.06l-1.728-1.727A8.927 8.927 0 0 1 5.18 6.241L3.454 4.515a.75.75 0 1 1 1.06-1.061l1.727 1.727A8.927 8.927 0 0 1 20.927 12Z' />
    </svg>
  )
}
