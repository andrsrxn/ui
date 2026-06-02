import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi40NTcgNS4zOTYgMy43NjUgMi43MDVhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw1LjI5IDYuMzVjLTMuNDM1IDMuNDEyLTMuMDQgOS40NTUgMS40MTUgMTIuMjI3IDEuMjQ4Ljc3NiAyLjk3MSAxLjM3IDQuNDk3IDEuMzdoNy42ODRsMS4zNDkgMS4zNDlhLjc1Ljc1IDAgMCAwIDEuMDYtMS4wNmwtLjUwNy0uNTA5YS43MzcuNzM3IDAgMCAwLS41MjQtMS4yNTNoLS43M0w3LjUyNSA2LjQ2NGE2LjM4MiA2LjM4MiAwIDAgMSAzLjMzLS45MzdoOS40MWEuNzM3LjczNyAwIDAgMCAwLTEuNDc0aC05LjQxYTcuODU0IDcuODU0IDAgMCAwLTQuMzk3IDEuMzQzWm0tLjEyNCAxLjk5N2MtMi43OSAyLjc3My0yLjQ2OCA3LjY4IDEuMTUxIDkuOTMyIDEuMDY0LjY2MiAyLjUyMSAxLjE1IDMuNzE4IDEuMTVoNi4yMTFMNi4zMzMgNy4zOTJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)
 */
export const IconNotSubsetProperOf: Icon = ({ className, ...props }) => {
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
        d='M6.457 5.396 3.765 2.705a.75.75 0 0 0-1.06 1.06L5.29 6.35c-3.435 3.412-3.04 9.455 1.415 12.227 1.248.776 2.971 1.37 4.497 1.37h7.684l1.349 1.349a.75.75 0 0 0 1.06-1.06l-.507-.509a.737.737 0 0 0-.524-1.253h-.73L7.525 6.464a6.382 6.382 0 0 1 3.33-.937h9.41a.737.737 0 0 0 0-1.474h-9.41a7.854 7.854 0 0 0-4.397 1.343Zm-.124 1.997c-2.79 2.773-2.468 7.68 1.151 9.932 1.064.662 2.521 1.15 3.718 1.15h6.211L6.333 7.392Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
