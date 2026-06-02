import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjMzNCAxNy41MjNhLjc1Ljc1IDAgMCAxIDAgMS41SDMuNzIyYS43NS43NSAwIDAgMSAwLTEuNWgxNi42MTJabTAtNi4yM2EuNzUuNzUgMCAwIDEgMCAxLjVIMy43MjJhLjc1Ljc1IDAgMCAxIDAtMS41aDE2LjYxMlpNNy4wODcgMi43OWEuNzUuNzUgMCAwIDEgLjYxNiAxLjM2N2wtMS4xNDQuNTE2Yy0uODk0LjQwMy0xLjQ4Ny42NzEtMS44NjUuOTEyLS4xNzUuMTEtLjI1NC4xODYtLjI4OS4yMjcuMDM1LjA0LjExNC4xMTYuMjg5LjIyNy4zNzguMjQxLjk3LjUxIDEuODY0LjkxM2wxLjE0Ni41MThhLjc1Ljc1IDAgMCAxLS42MTcgMS4zNjdMNS45NDEgOC4zMmMtLjg0OC0uMzgzLTEuNTYxLS43MDMtMi4wNTMtMS4wMTYtLjQ0Ny0uMjg1LS45MzUtLjcwMi0uOTk0LTEuMzU4bC0uMDA2LS4xMzQuMDA2LS4xMzVjLjA2LS42NTYuNTQ3LTEuMDczLjk5NS0xLjM1Ny40OTItLjMxMyAxLjIwNi0uNjMzIDIuMDU0LTEuMDE0bDEuMTQ0LS41MTZabTEzLjI0NyAyLjI3NGEuNzUuNzUgMCAwIDEgMCAxLjVIMTAuOGEuNzUuNzUgMCAwIDEgMC0xLjVoOS41MzRaIi8+PC9zdmc+)
 */
export const IconTextOutdent: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.334 17.523a.75.75 0 0 1 0 1.5H3.722a.75.75 0 0 1 0-1.5h16.612Zm0-6.23a.75.75 0 0 1 0 1.5H3.722a.75.75 0 0 1 0-1.5h16.612ZM7.087 2.79a.75.75 0 0 1 .616 1.367l-1.144.516c-.894.403-1.487.671-1.865.912-.175.11-.254.186-.289.227.035.04.114.116.289.227.378.241.97.51 1.864.913l1.146.518a.75.75 0 0 1-.617 1.367L5.941 8.32c-.848-.383-1.561-.703-2.053-1.016-.447-.285-.935-.702-.994-1.358l-.006-.134.006-.135c.06-.656.547-1.073.995-1.357.492-.313 1.206-.633 2.054-1.014l1.144-.516Zm13.247 2.274a.75.75 0 0 1 0 1.5H10.8a.75.75 0 0 1 0-1.5h9.534Z' />
    </svg>
  )
}
