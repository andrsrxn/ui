import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMuODMgNC45MjlhLjc1Ljc1IDAgMCAxIC45NTctLjQ1N2w2LjYxMiAyLjMzNGMyLjk1NyAxLjA0MyA1LjI0OSAxLjg1IDYuNzg3IDIuNjI5Ljc3LjM5IDEuNDE0LjgwMyAxLjg2NyAxLjI4LjQ3LjQ5Ni43NTQgMS4wODUuNzM2IDEuNzc2LS4wMTguNjkyLS4zMzMgMS4yNjUtLjgzIDEuNzM2LS40NzguNDUyLTEuMTQzLjgzLTEuOTMzIDEuMTc4LTEuNTc3LjY5NS0zLjkwOCAxLjM4LTYuOTE2IDIuMjY0TDQuNzUgMTkuNTRhLjc1Ljc1IDAgMCAxLS40MjQtMS40MzhsNi4zNjItMS44NzFjMy4wNTMtLjg5OCA1LjI2OC0xLjU1MiA2LjczNC0yLjE5OS43MzItLjMyMiAxLjIxMy0uNjE3IDEuNTA3LS44OTUuMjc0LS4yNi4zNTUtLjQ3NS4zNjEtLjY4Ni4wMDYtLjIxLS4wNjQtLjQzLS4zMjQtLjcwNC0uMjc4LS4yOTMtLjc0NC0uNjEyLTEuNDU3LS45NzMtMS40My0uNzI0LTMuNjA2LTEuNDk1LTYuNjA4LTIuNTU0TDQuMjg3IDUuODg2YS43NS43NSAwIDAgMS0uNDU3LS45NTdaIi8+PC9zdmc+)
 */
export const IconGreaterThan: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M3.83 4.929a.75.75 0 0 1 .957-.457l6.612 2.334c2.957 1.043 5.249 1.85 6.787 2.629.77.39 1.414.803 1.867 1.28.47.496.754 1.085.736 1.776-.018.692-.333 1.265-.83 1.736-.478.452-1.143.83-1.933 1.178-1.577.695-3.908 1.38-6.916 2.264L4.75 19.54a.75.75 0 0 1-.424-1.438l6.362-1.871c3.053-.898 5.268-1.552 6.734-2.199.732-.322 1.213-.617 1.507-.895.274-.26.355-.475.361-.686.006-.21-.064-.43-.324-.704-.278-.293-.744-.612-1.457-.973-1.43-.724-3.606-1.495-6.608-2.554L4.287 5.886a.75.75 0 0 1-.457-.957Z' />
    </svg>
  )
}
