import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTQuNDMgMTQuODIzYS43NS43NSAwIDAgMSAxLjA2MS0xLjA2bDQuMjE1IDQuMjEzYy42ODIuNjgyIDEuMTQyIDEuMTQgMS41MyAxLjQzNmwuMDE0LjAxVjRhLjc1Ljc1IDAgMCAxIDEuNSAwdjE1LjQzYy4wMDktLjAwNi4wMTgtLjAxMi4wMjctLjAyLjM4Ny0uMjk2Ljg0Ni0uNzU0IDEuNTI4LTEuNDM3bDQuMjAzLTQuMjEyYS43NS43NSAwIDAgMSAxLjA2MiAxLjA2bC00LjIwNCA0LjIxMmMtLjY1MS42NTMtMS4xOTIgMS4xOTctMS42NzggMS41Ny0uNTA0LjM4NC0xLjAzNi42NTQtMS42ODEuNjU1LS42NDQgMC0xLjE3Ny0uMjctMS42OC0uNjU0LS40ODctLjM3MS0xLjAzLS45MTUtMS42ODEtMS41NjdMNC40MyAxNC44MjNaIi8+PC9zdmc+)
 */
export const IconArrowUp: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M4.43 14.823a.75.75 0 0 1 1.061-1.06l4.215 4.213c.682.682 1.142 1.14 1.53 1.436l.014.01V4a.75.75 0 0 1 1.5 0v15.43c.009-.006.018-.012.027-.02.387-.296.846-.754 1.528-1.437l4.203-4.212a.75.75 0 0 1 1.062 1.06l-4.204 4.212c-.651.653-1.192 1.197-1.678 1.57-.504.384-1.036.654-1.681.655-.644 0-1.177-.27-1.68-.654-.487-.371-1.03-.915-1.681-1.567L4.43 14.823Z' />
    </svg>
  )
}
