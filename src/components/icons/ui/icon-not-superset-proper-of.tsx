import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTcuNTQzIDUuMzk2IDIuNjkyLTIuNjkxYS43NS43NSAwIDEgMSAxLjA2IDEuMDZMMTguNzEgNi4zNWMzLjQzNCAzLjQxMiAzLjA0IDkuNDU1LTEuNDE1IDEyLjIyNy0xLjI0OC43NzYtMi45NzEgMS4zNy00LjQ5NyAxLjM3SDUuMTE0bC0xLjM1IDEuMzQ5YS43NS43NSAwIDAgMS0xLjA2LTEuMDZsLjUwOC0uNTA5YS43MzcuNzM3IDAgMCAxIC41MjQtMS4yNTNoLjczbDEyLjAxLTEyLjAxYTYuMzgyIDYuMzgyIDAgMCAwLTMuMzMtLjkzN2gtOS40MWEuNzM3LjczNyAwIDAgMSAwLTEuNDc0aDkuNDFhNy44NTUgNy44NTUgMCAwIDEgNC4zOTcgMS4zNDNabS4xMjQgMS45OTdjMi43OSAyLjc3MyAyLjQ2OCA3LjY4LTEuMTUxIDkuOTMyLTEuMDY0LjY2Mi0yLjUyMSAxLjE1LTMuNzE4IDEuMTVINi41ODdsMTEuMDgtMTEuMDgyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)
 */
export const IconNotSupersetProperOf: Icon = ({ className, ...props }) => {
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
        d='m17.543 5.396 2.692-2.691a.75.75 0 1 1 1.06 1.06L18.71 6.35c3.434 3.412 3.04 9.455-1.415 12.227-1.248.776-2.971 1.37-4.497 1.37H5.114l-1.35 1.349a.75.75 0 0 1-1.06-1.06l.508-.509a.737.737 0 0 1 .524-1.253h.73l12.01-12.01a6.382 6.382 0 0 0-3.33-.937h-9.41a.737.737 0 0 1 0-1.474h9.41a7.855 7.855 0 0 1 4.397 1.343Zm.124 1.997c2.79 2.773 2.468 7.68-1.151 9.932-1.064.662-2.521 1.15-3.718 1.15H6.587l11.08-11.082Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
