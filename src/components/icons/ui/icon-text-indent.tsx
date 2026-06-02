import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjMyNCAxNy41MzhhLjc1Ljc1IDAgMCAxIDAgMS41SDMuNjc2YS43NS43NSAwIDAgMSAwLTEuNWgxNi42NDhabTAtNi4yNDJhLjc1Ljc1IDAgMCAxIDAgMS41SDMuNjc2YS43NS43NSAwIDAgMSAwLTEuNWgxNi42NDhaTTIuOTkzIDMuMTVhLjc1Ljc1IDAgMCAxIC45OS0uMzc1bDEuMTU3LjUyYy44NDguMzgyIDEuNTYyLjcgMi4wNTQgMS4wMTQuNDc3LjMwMyAxIC43NTggMSAxLjQ5MnMtLjUyMiAxLjE4OC0xIDEuNDkyYy0uNDkxLjMxMy0xLjIwNS42MzMtMi4wNTIgMS4wMTZsLTEuMTU3LjUyMmEuNzUuNzUgMCAwIDEtLjYxNy0xLjM2N2wxLjE1Ny0uNTIzYy44OTMtLjQwMyAxLjQ4Ni0uNjcyIDEuODY0LS45MTMuMTc0LS4xMS4yNTItLjE4Ni4yODctLjIyN2ExLjI5OCAxLjI5OCAwIDAgMC0uMjg3LS4yMjdjLS4zNzktLjI0LS45NzEtLjUxLTEuODY1LS45MTJsLTEuMTU1LS41MmEuNzUuNzUgMCAwIDEtLjM3Ni0uOTkyWm0xNy4zMyAxLjkwM2EuNzUuNzUgMCAwIDEgMCAxLjVIMTAuNzdhLjc1Ljc1IDAgMCAxIDAtMS41aDkuNTU1WiIvPjwvc3ZnPg==)
 */
export const IconTextIndent: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.324 17.538a.75.75 0 0 1 0 1.5H3.676a.75.75 0 0 1 0-1.5h16.648Zm0-6.242a.75.75 0 0 1 0 1.5H3.676a.75.75 0 0 1 0-1.5h16.648ZM2.993 3.15a.75.75 0 0 1 .99-.375l1.157.52c.848.382 1.562.7 2.054 1.014.477.303 1 .758 1 1.492s-.522 1.188-1 1.492c-.491.313-1.205.633-2.052 1.016l-1.157.522a.75.75 0 0 1-.617-1.367l1.157-.523c.893-.403 1.486-.672 1.864-.913.174-.11.252-.186.287-.227a1.298 1.298 0 0 0-.287-.227c-.379-.24-.971-.51-1.865-.912l-1.155-.52a.75.75 0 0 1-.376-.992Zm17.33 1.903a.75.75 0 0 1 0 1.5H10.77a.75.75 0 0 1 0-1.5h9.555Z' />
    </svg>
  )
}
