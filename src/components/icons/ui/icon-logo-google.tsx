import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PGcgb3BhY2l0eT0iLjIiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjUyNyAxMi40MjJhOC41MTIgOC41MTIgMCAwIDEtLjM4IDIuMTM3bC4zOC0yLjEzN1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjY1NSAxNWE1LjUzNyA1LjUzNyAwIDEgMS0uNTY0LTYuNzMybDIuNDA3LTEuODA1YTguNTM3IDguNTM3IDAgMSAwIDEuNjUgOC4wOTZsLjM4LTIuMTM3SDEyVjE1aDQuNjU1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxwYXRoIGQ9Ik03LjU1OCA0LjE5QTguOTg0IDguOTg0IDAgMCAxIDE4LjkzIDYuMjg0YS43MjYuNzI2IDAgMCAxLS4wOTcgMS4wMjFsLTIuMjU4IDEuODYzYS43MjUuNzI1IDAgMCAxLTEuMDIyLS4wOTggNC42MDYgNC42MDYgMCAxIDAtLjU3OSA2LjQ0N0gxMmEuNzI2LjcyNiAwIDAgMS0uNzI2LS43MjVWMTJjMC0uNDAxLjMyNS0uNzI2LjcyNi0uNzI2aDguMjU5YS43MjYuNzI2IDAgMCAxIC43MjUuNzI1QTguOTg0IDguOTg0IDAgMSAxIDcuNTU4IDQuMTlabTUuODA2LjQwMWE3LjUzNSA3LjUzNSAwIDAgMC04LjQyOCA0Ljc5NCA3LjUzMyA3LjUzMyAwIDEgMCAxNC41NiAzLjM0aC02Ljc3djEuMzRoMy44MTZhLjcyNS43MjUgMCAwIDEgLjYxOCAxLjEwNSA2LjA1MyA2LjA1MyAwIDAgMS04LjIwNiAyLjA2NSA2LjA1OCA2LjA1OCAwIDAgMSA0LjE0Mi0xMS4xOTMgNi4wNTYgNi4wNTYgMCAwIDEgMy4wOCAxLjU3MmwxLjE0NS0uOTQ0YTcuNTMxIDcuNTMxIDAgMCAwLTMuOTU3LTIuMDc5WiIvPjwvc3ZnPg==)
 */
export const IconLogoGoogle: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <g opacity='.2'>
        <path
          fillRule='evenodd'
          d='M20.527 12.422a8.512 8.512 0 0 1-.38 2.137l.38-2.137Z'
          clipRule='evenodd'
        />
        <path
          fillRule='evenodd'
          d='M16.655 15a5.537 5.537 0 1 1-.564-6.732l2.407-1.805a8.537 8.537 0 1 0 1.65 8.096l.38-2.137H12V15h4.655Z'
          clipRule='evenodd'
        />
      </g>
      <path d='M7.558 4.19A8.984 8.984 0 0 1 18.93 6.284a.726.726 0 0 1-.097 1.021l-2.258 1.863a.725.725 0 0 1-1.022-.098 4.606 4.606 0 1 0-.579 6.447H12a.726.726 0 0 1-.726-.725V12c0-.401.325-.726.726-.726h8.259a.726.726 0 0 1 .725.725A8.984 8.984 0 1 1 7.558 4.19Zm5.806.401a7.535 7.535 0 0 0-8.428 4.794 7.533 7.533 0 1 0 14.56 3.34h-6.77v1.34h3.816a.725.725 0 0 1 .618 1.105 6.053 6.053 0 0 1-8.206 2.065 6.058 6.058 0 0 1 4.142-11.193 6.056 6.056 0 0 1 3.08 1.572l1.145-.944a7.531 7.531 0 0 0-3.957-2.079Z' />
    </svg>
  )
}
