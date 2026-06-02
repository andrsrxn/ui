import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjM1OCAxMmE4LjM1OCA4LjM1OCAwIDEgMS0xNi43MTYgMCA4LjM1OCA4LjM1OCAwIDAgMSAxNi43MTYgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE5LjYwOSAxMkE3LjYwOSA3LjYwOSAwIDEgMCA0LjM5IDEyYTcuNjA5IDcuNjA5IDAgMCAwIDE1LjIxOCAwWm0xLjUgMEE5LjEwOSA5LjEwOSAwIDEgMSAyLjg5IDEyYTkuMTA5IDkuMTA5IDAgMCAxIDE4LjIxOCAwWiIvPjxwYXRoIGQ9Ik0xMC41MzYgOS40OWExLjI3MyAxLjI3MyAwIDEgMS0yLjU0NSAwIDEuMjczIDEuMjczIDAgMCAxIDIuNTQ1IDBabTUuNDY0IDBhMS4yNzMgMS4yNzMgMCAxIDEtMi41NDYgMCAxLjI3MyAxLjI3MyAwIDAgMSAyLjU0NSAwWiIvPjwvc3ZnPg==)
 */
export const IconSmileyBlank: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0Z' opacity='.2' />
      <path d='M19.609 12A7.609 7.609 0 1 0 4.39 12a7.609 7.609 0 0 0 15.218 0Zm1.5 0A9.109 9.109 0 1 1 2.89 12a9.109 9.109 0 0 1 18.218 0Z' />
      <path d='M10.536 9.49a1.273 1.273 0 1 1-2.545 0 1.273 1.273 0 0 1 2.545 0Zm5.464 0a1.273 1.273 0 1 1-2.546 0 1.273 1.273 0 0 1 2.545 0Z' />
    </svg>
  )
}
