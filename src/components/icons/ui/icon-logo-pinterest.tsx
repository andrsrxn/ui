import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE5LjA3MyAxMC4yODhjMCAzLjc0LTIuNTEzIDYuNzczLTcuMjcgNi43NzMtMi4wMzYtMS45NzItMS44Mi4xNC0yLjU3Ni0uMTA4LTIuODExLTEuMjY0LTQuNjkyLTMuNzEzLTQuNjkyLTYuNjY1IDAtMy43NDEgMy4yNTQtNi43NzQgNy4yNjktNi43NzQgNC4wMTQgMCA3LjI2OSAzLjAzMyA3LjI2OSA2Ljc3NFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTEwLjU4NSA4LjI5NUEuNzI3LjcyNyAwIDAgMSAxMiA4LjYzbC0xLjQ5MSA2LjMzNWMuMDkzLjEzLjI0NC4zMS40NjUuNDkyLjQ0Mi4zNjMgMS4yLjc2NiAyLjQ0Ljc2NiAyLjQgMCA0LjkzLTIuMTA3IDQuOTMtNS42MzhhNi4zNDUgNi4zNDUgMCAxIDAtMTEuODQxIDMuMTczLjcyOC43MjggMCAwIDEtMS4yNjEuNzI3IDcuODAxIDcuODAxIDAgMCAxIDguMjc5LTExLjU0OCA3LjggNy44IDAgMCAxIDYuMjc4IDcuNjQ4bC0uMDA5LjM5N2MtLjE4NiA0LjA1Ny0zLjIyIDYuNjk2LTYuMzc3IDYuNjk2LTEuNTQgMC0yLjYwMy0uNDk4LTMuMjk2LTEuMDQ2bC0uOTQ2IDQuMDIxYS43MjguNzI4IDAgMCAxLTEuNDE3LS4zMzJsMi44My0xMi4wMjVaIi8+PC9zdmc+)
 */
export const IconLogoPinterest: Icon = ({ className, ...props }) => {
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
        d='M19.073 10.288c0 3.74-2.513 6.773-7.27 6.773-2.036-1.972-1.82.14-2.576-.108-2.811-1.264-4.692-3.713-4.692-6.665 0-3.741 3.254-6.774 7.269-6.774 4.014 0 7.269 3.033 7.269 6.774Z'
        opacity='.2'
      />
      <path d='M10.585 8.295A.727.727 0 0 1 12 8.63l-1.491 6.335c.093.13.244.31.465.492.442.363 1.2.766 2.44.766 2.4 0 4.93-2.107 4.93-5.638a6.345 6.345 0 1 0-11.841 3.173.728.728 0 0 1-1.261.727 7.801 7.801 0 0 1 8.279-11.548 7.8 7.8 0 0 1 6.278 7.648l-.009.397c-.186 4.057-3.22 6.696-6.377 6.696-1.54 0-2.603-.498-3.296-1.046l-.946 4.021a.728.728 0 0 1-1.417-.332l2.83-12.025Z' />
    </svg>
  )
}
