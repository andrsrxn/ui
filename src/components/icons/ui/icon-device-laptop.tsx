import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE5LjcxMyAxNS45ODdjLjUxMSAxLjAxNy43NjcgMS41MjUuNjI1IDEuOTI2YTEgMSAwIDAgMS0uMjIzLjM2MWMtLjI5NS4zMDctLjg2NC4zMDctMi4wMDIuMzA3SDUuODc3Yy0xLjE0NiAwLTEuNzE5IDAtMi4wMTQtLjMxYTEgMSAwIDAgMS0uMjIyLS4zNjJjLS4xNC0uNDAzLjEyLS45MTQuNjQzLTEuOTM0LjIxMy0uNDE4LjMyLS42MjcuNDk0LS43NjJhLjk5Ny45OTcgMCAwIDEgLjE5Ni0uMTJjLjItLjA5My40MzQtLjA5My45MDMtLjA5M2gxMi4yMzZjLjQ3MyAwIC43MSAwIC45MS4wOTRhMSAxIDAgMCAxIC4xOTguMTIxYy4xNzQuMTM4LjI4LjM1LjQ5Mi43NzJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE5LjE1NSAxNC45ODRINC43OW0xNC4zNjUgMFY5LjQyYzAtMS44ODUgMC0yLjgyOC0uNTg2LTMuNDE0LS41ODUtLjU4Ni0xLjUyOC0uNTg2LTMuNDE0LS41ODZIOC43OWMtMS44ODYgMC0yLjgyOSAwLTMuNDE0LjU4Ni0uNTg2LjU4Ni0uNTg2IDEuNTI5LS41ODYgMy40MTR2NS41NjVtMTQuMzY1IDAgLjMzNi41MzljLjg0MyAxLjM1MiAxLjI2NSAyLjAyOC45NzkgMi41NDMtLjI4Ni41MTUtMS4wODMuNTE1LTIuNjc2LjUxNUg2LjE2Yy0xLjU3NiAwLTIuMzY0IDAtMi42NS0uNTEtLjI4Ny0uNTEuMTIyLTEuMTgzLjk0LTIuNTNsLjM0LS41NTciLz48L3N2Zz4=)
 */
export const IconDeviceLaptop: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
      className={cn('bp-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M19.713 15.987c.511 1.017.767 1.525.625 1.926a1 1 0 0 1-.223.361c-.295.307-.864.307-2.002.307H5.877c-1.146 0-1.719 0-2.014-.31a1 1 0 0 1-.222-.362c-.14-.403.12-.914.643-1.934.213-.418.32-.627.494-.762a.997.997 0 0 1 .196-.12c.2-.093.434-.093.903-.093h12.236c.473 0 .71 0 .91.094a1 1 0 0 1 .198.121c.174.138.28.35.492.772Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M19.155 14.984H4.79m14.365 0V9.42c0-1.885 0-2.828-.586-3.414-.585-.586-1.528-.586-3.414-.586H8.79c-1.886 0-2.829 0-3.414.586-.586.586-.586 1.529-.586 3.414v5.565m14.365 0 .336.539c.843 1.352 1.265 2.028.979 2.543-.286.515-1.083.515-2.676.515H6.16c-1.576 0-2.364 0-2.65-.51-.287-.51.122-1.183.94-2.53l.34-.557'
      />
    </svg>
  )
}
