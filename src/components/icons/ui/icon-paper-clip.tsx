import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0ibTcuNjggMTMuNzk2IDcuMjctNy4yN2EuNzUuNzUgMCAwIDEgMS4wNjEgMS4wNmwtNy4yNyA3LjI3YS43NS43NSAwIDAgMCAxLjA2MSAxLjA2Mmw3LjU4NC03LjU4NGEyLjI1MSAyLjI1MSAwIDAgMC0zLjE4My0zLjE4NGwtNy44NyA3Ljg3MWEzLjc1MiAzLjc1MiAwIDAgMCA1LjMwNSA1LjMwNmw0LjcyOS00LjcyOWEuNzUuNzUgMCAwIDEgMS4wNiAxLjA2MUwxMi43IDE5LjM4OGE1LjI1MiA1LjI1MiAwIDAgMS03LjQyNy03LjQyOGw3Ljg3LTcuODdhMy43NTEgMy43NTEgMCAwIDEgNS4zMDUgNS4zMDRsLTcuNTg0IDcuNTg1YTIuMjUgMi4yNSAwIDEgMS0zLjE4My0zLjE4M1oiLz48L3N2Zz4=)
 */
export const IconPaperClip: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='m7.68 13.796 7.27-7.27a.75.75 0 0 1 1.061 1.06l-7.27 7.27a.75.75 0 0 0 1.061 1.062l7.584-7.584a2.251 2.251 0 0 0-3.183-3.184l-7.87 7.871a3.752 3.752 0 0 0 5.305 5.306l4.729-4.729a.75.75 0 0 1 1.06 1.061L12.7 19.388a5.252 5.252 0 0 1-7.427-7.428l7.87-7.87a3.751 3.751 0 0 1 5.305 5.304l-7.584 7.585a2.25 2.25 0 1 1-3.183-3.183Z' />
    </svg>
  )
}
