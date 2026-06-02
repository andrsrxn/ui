import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjQxNiAxMmE4LjQxNiA4LjQxNiAwIDEgMS0xNi44MzIgMCA4LjQxNiA4LjQxNiAwIDAgMSAxNi44MzIgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE5LjY2NiAxMmE3LjY2NyA3LjY2NyAwIDEgMC0xNS4zMzMgMCA3LjY2NyA3LjY2NyAwIDAgMCAxNS4zMzMgMFptLTkuNDY4LTEuNDE1di0zLjA3YS43NS43NSAwIDAgMSAxLjUgMHYzLjA3YzAgLjYwNiAwIDEuMDA1LjAzMiAxLjMxMy4wMy4yOS4wODIuNDM3LjE1LjU0OC4wNjYuMTEuMTcyLjIyNS40MTYuMzg2LjI2LjE3LjYxMy4zNTUgMS4xNS42MzVsMi4zMDcgMS4yMDNBLjc1Ljc1IDAgMCAxIDE1LjA2IDE2bC0yLjMwOS0xLjIwM2MtLjUxLS4yNjYtLjk0Mi0uNDktMS4yOC0uNzEzLS4zNTEtLjIzMS0uNjUyLS40OTItLjg3NS0uODYtLjIyMy0uMzY3LS4zMTUtLjc1NS0uMzU4LTEuMTc0LS4wNDEtLjQwMi0uMDQtLjg5LS4wNC0xLjQ2NVpNMjEuMTY2IDEyYTkuMTY3IDkuMTY3IDAgMSAxLTE4LjMzNCAwIDkuMTY3IDkuMTY3IDAgMCAxIDE4LjMzNCAwWiIvPjwvc3ZnPg==)
 */
export const IconClock: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.416 12a8.416 8.416 0 1 1-16.832 0 8.416 8.416 0 0 1 16.832 0Z' opacity='.2' />
      <path d='M19.666 12a7.667 7.667 0 1 0-15.333 0 7.667 7.667 0 0 0 15.333 0Zm-9.468-1.415v-3.07a.75.75 0 0 1 1.5 0v3.07c0 .606 0 1.005.032 1.313.03.29.082.437.15.548.066.11.172.225.416.386.26.17.613.355 1.15.635l2.307 1.203A.75.75 0 0 1 15.06 16l-2.309-1.203c-.51-.266-.942-.49-1.28-.713-.351-.231-.652-.492-.875-.86-.223-.367-.315-.755-.358-1.174-.041-.402-.04-.89-.04-1.465ZM21.166 12a9.167 9.167 0 1 1-18.334 0 9.167 9.167 0 0 1 18.334 0Z' />
    </svg>
  )
}
