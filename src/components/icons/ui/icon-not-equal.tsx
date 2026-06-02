import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMuMTIgMy4xMmEuNzE3LjcxNyAwIDAgMSAxLjAxMyAwbDQuODIgNC44MmgxMS42NDVhLjcxNi43MTYgMCAwIDEgMCAxLjQzM0gxMC4zODZsNS4yNTUgNS4yNTVoNC45NTdhLjcxNi43MTYgMCAxIDEgMCAxLjQzMmgtMy41MjRsMy44MDYgMy44MDdhLjcxNy43MTcgMCAwIDEtMS4wMTQgMS4wMTNsLTQuODItNC44MkgzLjQwM2EuNzE3LjcxNyAwIDAgMSAwLTEuNDMyaDEwLjIxMkw4LjM2IDkuMzcySDMuNDAyYS43MTcuNzE3IDAgMCAxIDAtMS40MzNoMy41MjVMMy4xMiA0LjEzM2EuNzE3LjcxNyAwIDAgMSAwLTEuMDEzWiIvPjwvc3ZnPg==)
 */
export const IconNotEqual: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M3.12 3.12a.717.717 0 0 1 1.013 0l4.82 4.82h11.645a.716.716 0 0 1 0 1.433H10.386l5.255 5.255h4.957a.716.716 0 1 1 0 1.432h-3.524l3.806 3.807a.717.717 0 0 1-1.014 1.013l-4.82-4.82H3.403a.717.717 0 0 1 0-1.432h10.212L8.36 9.372H3.402a.717.717 0 0 1 0-1.433h3.525L3.12 4.133a.717.717 0 0 1 0-1.013Z' />
    </svg>
  )
}
