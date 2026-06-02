import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTkuMzQ4IDQuNDNhLjc1Ljc1IDAgMCAxIDEuMDYgMS4wNjFMNi4xOTQgOS43MDZjLS42ODIuNjgyLTEuMTQgMS4xNDItMS40MzUgMS41M2wtLjAxMS4wMTRIMjAuMTdhLjc1Ljc1IDAgMCAxIDAgMS41SDQuNzM5bC4wMi4wMjdjLjI5Ni4zODcuNzU0Ljg0NiAxLjQzNyAxLjUyOGw0LjIxMiA0LjIwM2EuNzUuNzUgMCAwIDEtMS4wNiAxLjA2MmwtNC4yMTEtNC4yMDRjLS42NTMtLjY1MS0xLjE5OC0xLjE5Mi0xLjU3LTEuNjc4LS4zODUtLjUwNC0uNjU1LTEuMDM2LS42NTUtMS42ODEgMC0uNjQ0LjI2OS0xLjE3Ny42NTMtMS42OC4zNzItLjQ4Ny45MTYtMS4wMyAxLjU2OC0xLjY4MUw5LjM0OCA0LjQzWiIvPjwvc3ZnPg==)
 */
export const IconArrowLeft: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M9.348 4.43a.75.75 0 0 1 1.06 1.061L6.194 9.706c-.682.682-1.14 1.142-1.435 1.53l-.011.014H20.17a.75.75 0 0 1 0 1.5H4.739l.02.027c.296.387.754.846 1.437 1.528l4.212 4.203a.75.75 0 0 1-1.06 1.062l-4.211-4.204c-.653-.651-1.198-1.192-1.57-1.678-.385-.504-.655-1.036-.655-1.681 0-.644.269-1.177.653-1.68.372-.487.916-1.03 1.568-1.681L9.348 4.43Z' />
    </svg>
  )
}
