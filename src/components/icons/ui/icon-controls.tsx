import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTYuODUyIDguMTU3YTIuMjEzIDIuMjEzIDAgMSAwIDQuNDI2IDAgMi4yMTMgMi4yMTMgMCAwIDAtNC40MjYgMFptMTAuMzEyIDcuNjc1YTIuMjI5IDIuMjI5IDAgMSAxLTQuNDU3IDAgMi4yMjkgMi4yMjkgMCAwIDEgNC40NTcgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE0LjkyMiAxMi44NmEyLjk3IDIuOTcgMCAwIDEgMi44NzMgMi4yMjNoMi40MzVhLjc1Ljc1IDAgMCAxIDAgMS41aC0yLjQzNWEyLjk3IDIuOTcgMCAwIDEtMi44NzMgMi4yMjEgMi45NyAyLjk3IDAgMCAxLTIuODcyLTIuMjIxSDMuNzdhLjc1Ljc1IDAgMCAxIDAtMS41aDguMjhhMi45NyAyLjk3IDAgMCAxIDIuODcyLTIuMjIzWm0wIDEuNWExLjQ3MyAxLjQ3MyAwIDEgMCAuMDAxIDIuOTQ1IDEuNDczIDEuNDczIDAgMCAwLS4wMDEtMi45NDVaTTkuMDc4IDUuMTg5YTIuOTcgMi45NyAwIDAgMSAyLjg3MyAyLjIyMmg4LjI4YS43NS43NSAwIDAgMSAwIDEuNWgtOC4yOGEyLjk3IDIuOTcgMCAwIDEtMi44NzMgMi4yMjIgMi45NyAyLjk3IDAgMCAxLTIuODczLTIuMjIySDMuNzY5YS43NS43NSAwIDEgMSAwLTEuNWgyLjQzNmEyLjk3IDIuOTcgMCAwIDEgMi44NzMtMi4yMjJabTAgMS41YTEuNDcyIDEuNDcyIDAgMSAwIDAgMi45NDMgMS40NzIgMS40NzIgMCAwIDAgMC0yLjk0M1oiLz48L3N2Zz4=)
 */
export const IconControls: Icon = ({ className, ...props }) => {
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
        d='M6.852 8.157a2.213 2.213 0 1 0 4.426 0 2.213 2.213 0 0 0-4.426 0Zm10.312 7.675a2.229 2.229 0 1 1-4.457 0 2.229 2.229 0 0 1 4.457 0Z'
        opacity='.2'
      />
      <path d='M14.922 12.86a2.97 2.97 0 0 1 2.873 2.223h2.435a.75.75 0 0 1 0 1.5h-2.435a2.97 2.97 0 0 1-2.873 2.221 2.97 2.97 0 0 1-2.872-2.221H3.77a.75.75 0 0 1 0-1.5h8.28a2.97 2.97 0 0 1 2.872-2.223Zm0 1.5a1.473 1.473 0 1 0 .001 2.945 1.473 1.473 0 0 0-.001-2.945ZM9.078 5.189a2.97 2.97 0 0 1 2.873 2.222h8.28a.75.75 0 0 1 0 1.5h-8.28a2.97 2.97 0 0 1-2.873 2.222 2.97 2.97 0 0 1-2.873-2.222H3.769a.75.75 0 1 1 0-1.5h2.436a2.97 2.97 0 0 1 2.873-2.222Zm0 1.5a1.472 1.472 0 1 0 0 2.943 1.472 1.472 0 0 0 0-2.943Z' />
    </svg>
  )
}
