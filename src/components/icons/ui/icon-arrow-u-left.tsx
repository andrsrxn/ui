import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIxLjA0NiAxMy40OTRhNS4xNjMgNS4xNjMgMCAwIDAtNS4xNjMtNS4xNjJINC41NjVjLjI5Ni0uMzgzLjc0Ny0uODM5IDEuNDE2LTEuNTA3bC44NzctLjg3N2EuNzUuNzUgMCAxIDAtMS4wNi0xLjA2bC0uODc4Ljg3NmMtLjY1Mi42NTItMS4xOTYgMS4xOTQtMS41NjcgMS42OC0uMzg1LjUwNS0uNjU1IDEuMDM4LS42NTQgMS42ODIgMCAuNjQ1LjI3IDEuMTc3LjY1NiAxLjY4LjM3Mi40ODcuOTE1IDEuMDI4IDEuNTY4IDEuNjhsLjg3NS44NzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNjJsLS44NzUtLjg3M2MtLjY4My0uNjgtMS4xNC0xLjE0LTEuNDM3LTEuNTI3TDQuNSA5LjgzMmgxMS4zODRhMy42NjMgMy42NjMgMCAxIDEgMCA3LjMyNUg1LjcyM2EuNzUuNzUgMCAwIDAgMCAxLjVoMTAuMTZhNS4xNjMgNS4xNjMgMCAwIDAgNS4xNjMtNS4xNjNaIi8+PC9zdmc+)
 */
export const IconArrowULeft: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M21.046 13.494a5.163 5.163 0 0 0-5.163-5.162H4.565c.296-.383.747-.839 1.416-1.507l.877-.877a.75.75 0 1 0-1.06-1.06l-.878.876c-.652.652-1.196 1.194-1.567 1.68-.385.505-.655 1.038-.654 1.682 0 .645.27 1.177.656 1.68.372.487.915 1.028 1.568 1.68l.875.872a.75.75 0 1 0 1.06-1.062l-.875-.873c-.683-.68-1.14-1.14-1.437-1.527L4.5 9.832h11.384a3.663 3.663 0 1 1 0 7.325H5.723a.75.75 0 0 0 0 1.5h10.16a5.163 5.163 0 0 0 5.163-5.163Z' />
    </svg>
  )
}
