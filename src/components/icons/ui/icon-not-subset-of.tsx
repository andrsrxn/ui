import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4wMjQgNC45NjMgMy43NjUgMi43MDVhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw1LjAyNyA2LjA5Yy0yLjIxNSAzLjEzNy0xLjU4NSA3LjgxMyAyLjA0NCAxMC4wN2wuMjI4LjE0MmE3LjIwOSA3LjIwOSAwIDAgMCAzLjgwOCAxLjA4OGg1LjIybDIuMDk0IDIuMDk0SDQuNzc0YS43NS43NSAwIDAgMCAwIDEuNUgxOS45MmwuMzE0LjMxM2EuNzUuNzUgMCAwIDAgMS4wNi0xLjA2bC0yLjg0NS0yLjg0N2guNjg2YS43NS43NSAwIDAgMCAwLTEuNUgxNi45NUw3LjA4NyA2LjAyNmE1LjY2IDUuNjYgMCAwIDEgMS4xNTUtLjc5MSA1LjU1OCA1LjU1OCAwIDAgMSAyLjU1OC0uNjI0aDguMzM2YS43NS43NSAwIDAgMCAwLTEuNUgxMC44Yy0xLjEzIDAtMi4yNDQuMjcyLTMuMjQ4Ljc5MmE3LjE3NiA3LjE3NiAwIDAgMC0xLjUyOCAxLjA2Wm0uMDg3IDIuMjA4IDguNzE4IDguNzE4aC0zLjcyMWE1LjcxIDUuNzEgMCAwIDEtMy4wMTYtLjg2MmwtLjIyOC0uMTRjLTIuNzc2LTEuNzI4LTMuMzIzLTUuMjUtMS43NTMtNy43MTZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)
 */
export const IconNotSubsetOf: Icon = ({ className, ...props }) => {
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
        fillRule='evenodd'
        d='M6.024 4.963 3.765 2.705a.75.75 0 0 0-1.06 1.06L5.027 6.09c-2.215 3.137-1.585 7.813 2.044 10.07l.228.142a7.209 7.209 0 0 0 3.808 1.088h5.22l2.094 2.094H4.774a.75.75 0 0 0 0 1.5H19.92l.314.313a.75.75 0 0 0 1.06-1.06l-2.845-2.847h.686a.75.75 0 0 0 0-1.5H16.95L7.087 6.026a5.66 5.66 0 0 1 1.155-.791 5.558 5.558 0 0 1 2.558-.624h8.336a.75.75 0 0 0 0-1.5H10.8c-1.13 0-2.244.272-3.248.792a7.176 7.176 0 0 0-1.528 1.06Zm.087 2.208 8.718 8.718h-3.721a5.71 5.71 0 0 1-3.016-.862l-.228-.14c-2.776-1.728-3.323-5.25-1.753-7.716Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
