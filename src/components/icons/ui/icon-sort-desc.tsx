import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE2LjMyNSA5Ljk2OWEuNzU4Ljc1OCAwIDEgMSAxLjUxNyAwdjguMzM1Yy4wMzctLjAzNi4wNzgtLjA3Mi4xMTktLjExMmwxLjc2LTEuNjg4YS43NTkuNzU5IDAgMCAxIDEuMDQ5IDEuMDk1bC0xLjc2IDEuNjg4Yy0uMzE1LjMwMy0uNjA2LjU4Mi0uODcyLjc3Ny0uMjgzLjIwOC0uNjI0LjM4NS0xLjA1MS4zODYtLjQyOCAwLS43NjgtLjE3Ny0xLjA1Mi0uMzg1LS4yNjYtLjE5NS0uNTU2LS40NzQtLjg3Mi0uNzc3TDEzLjM5OCAxNy42YS43NTkuNzU5IDAgMCAxIDEuMDQ4LTEuMDk2bDEuNzY2IDEuNjkuMTEzLjEwNlY5Ljk2OVptLTYuNDQ4IDcuMzNhLjc1OC43NTggMCAwIDEgMCAxLjUxN0gzLjgxYS43NTguNzU4IDAgMCAxIDAtMS41MTdoNi4wNjdabTIuMDIzLTYuMDY2YS43NTguNzU4IDAgMCAxIDAgMS41MTZIMy44MWEuNzU4Ljc1OCAwIDAgMSAwLTEuNTE2aDguMDlabTUuMTg0LTYuMDY3YS43NTguNzU4IDAgMCAxIDAgMS41MTZIMy44MWEuNzU4Ljc1OCAwIDEgMSAwLTEuNTE2aDEzLjI3NFoiLz48L3N2Zz4=)
 */
export const IconSortDesc: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M16.325 9.969a.758.758 0 1 1 1.517 0v8.335c.037-.036.078-.072.119-.112l1.76-1.688a.759.759 0 0 1 1.049 1.095l-1.76 1.688c-.315.303-.606.582-.872.777-.283.208-.624.385-1.051.386-.428 0-.768-.177-1.052-.385-.266-.195-.556-.474-.872-.777L13.398 17.6a.759.759 0 0 1 1.048-1.096l1.766 1.69.113.106V9.969Zm-6.448 7.33a.758.758 0 0 1 0 1.517H3.81a.758.758 0 0 1 0-1.517h6.067Zm2.023-6.066a.758.758 0 0 1 0 1.516H3.81a.758.758 0 0 1 0-1.516h8.09Zm5.184-6.067a.758.758 0 0 1 0 1.516H3.81a.758.758 0 1 1 0-1.516h13.274Z' />
    </svg>
  )
}
