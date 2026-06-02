import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE0LjgxNyAxOS41N2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2MWw0LjIxNC00LjIxNWMuNjgyLS42ODIgMS4xNC0xLjE0MiAxLjQzNS0xLjUzbC4wMS0uMDE0SDMuOTk1YS43NS43NSAwIDAgMSAwLTEuNWgxNS40MzJsLS4wMi0uMDI3Yy0uMjk2LS4zODctLjc1NS0uODQ2LTEuNDM3LTEuNTI4bC00LjIxMi00LjIwM2EuNzUuNzUgMCAwIDEgMS4wNi0xLjA2Mmw0LjIxMSA0LjIwNGMuNjUzLjY1MSAxLjE5OCAxLjE5MiAxLjU3IDEuNjc4LjM4NS41MDQuNjU0IDEuMDM2LjY1NSAxLjY4IDAgLjY0NS0uMjcgMS4xNzgtLjY1NCAxLjY4Mi0uMzcuNDg2LS45MTUgMS4wMjgtMS41NjcgMS42OGwtNC4yMTUgNC4yMTVaIi8+PC9zdmc+)
 */
export const IconArrowRight: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M14.817 19.57a.75.75 0 0 1-1.06-1.061l4.214-4.215c.682-.682 1.14-1.142 1.435-1.53l.01-.014H3.995a.75.75 0 0 1 0-1.5h15.432l-.02-.027c-.296-.387-.755-.846-1.437-1.528l-4.212-4.203a.75.75 0 0 1 1.06-1.062l4.211 4.204c.653.651 1.198 1.192 1.57 1.678.385.504.654 1.036.655 1.68 0 .645-.27 1.178-.654 1.682-.37.486-.915 1.028-1.567 1.68l-4.215 4.215Z' />
    </svg>
  )
}
