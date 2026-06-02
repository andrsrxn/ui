import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwLjc4MyA5LjM3N2EuNzUuNzUgMCAwIDAtMS4wNjEtMS4wNmwtNS4zNCA1LjMzOGMtLjcwMy43MDMtMS4xNzcgMS4xNzYtMS41NzkgMS40ODMtLjM4NC4yOTMtLjYxMi4zNjItLjgxLjM2Mi0uMTk3IDAtLjQyNC0uMDctLjgwOC0uMzYzLS40MDEtLjMwNy0uODc2LS43OC0xLjU3OC0xLjQ4NEw0LjI4IDguMzE2YS43NS43NSAwIDAgMC0xLjA2MiAxLjA2bDUuMzI1IDUuMzM3Yy42NzMuNjc0IDEuMjMgMS4yMzQgMS43MyAxLjYxNi41MTcuMzk1IDEuMDYxLjY3IDEuNzE5LjY3MS42NTcgMCAxLjIwMS0uMjc1IDEuNzItLjY3LjUtLjM4MiAxLjA1OC0uOTQxIDEuNzMtMS42MTRsNS4zNC01LjMzOVoiLz48L3N2Zz4=)
 */
export const IconChevronDown: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M20.783 9.377a.75.75 0 0 0-1.061-1.06l-5.34 5.338c-.703.703-1.177 1.176-1.579 1.483-.384.293-.612.362-.81.362-.197 0-.424-.07-.808-.363-.401-.307-.876-.78-1.578-1.484L4.28 8.316a.75.75 0 0 0-1.062 1.06l5.325 5.337c.673.674 1.23 1.234 1.73 1.616.517.395 1.061.67 1.719.671.657 0 1.201-.275 1.72-.67.5-.382 1.058-.941 1.73-1.614l5.34-5.339Z' />
    </svg>
  )
}
