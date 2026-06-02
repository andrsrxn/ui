import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMy4zNzNBOC42MjcgOC42MjcgMCAwIDAgNS45IDE4LjFMMTIgMTJWMy4zNzNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTExLjI1IDEwLjM0M1Y0LjE1OWE3Ljg3NyA3Ljg3NyAwIDAgMC01LjMyNSAxMi44NTVsNC4zNzMtNC4zNzJjLjYyMS0uNjIyLjc3NS0uNzk1Ljg1Ny0uOTkyLjA4Mi0uMTk4LjA5NS0uNDMuMDk1LTEuMzA3Wk0yMS4zNzcgMTJhOS4zNzcgOS4zNzcgMCAxIDEtMTguNzU0IDAgOS4zNzcgOS4zNzcgMCAwIDEgMTguNzU0IDBabS04LjYyNy0xLjY1N2MwIC43NTYuMDE0IDEuMzQzLS4yMDkgMS44OC0uMjIzLjUzOC0uNjQ4Ljk0NC0xLjE4MyAxLjQ4bC00LjM3MyA0LjM3MUE3Ljg3NyA3Ljg3NyAwIDEgMCAxMi43NSA0LjE2djYuMTg0WiIvPjwvc3ZnPg==)
 */
export const IconChartPie: Icon = ({ className, ...props }) => {
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
        d='M12 3.373A8.627 8.627 0 0 0 5.9 18.1L12 12V3.373Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path d='M11.25 10.343V4.159a7.877 7.877 0 0 0-5.325 12.855l4.373-4.372c.621-.622.775-.795.857-.992.082-.198.095-.43.095-1.307ZM21.377 12a9.377 9.377 0 1 1-18.754 0 9.377 9.377 0 0 1 18.754 0Zm-8.627-1.657c0 .756.014 1.343-.209 1.88-.223.538-.648.944-1.183 1.48l-4.373 4.371A7.877 7.877 0 1 0 12.75 4.16v6.184Z' />
    </svg>
  )
}
