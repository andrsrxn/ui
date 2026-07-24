import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjEzNiA3Ljg1MyA4LjAyMSA0LjRjLS4xOC0uMjk2LS40NjgtLjUyLS44MTEtLjQ3LS41MTguMDc1LTEuMzk4LjQwNS0yLjU3MyAxLjU4LTEuMzE4IDEuMzE4LTEuOSA1LjU4NiAzLjI5MyAxMC43OCA1LjE5NCA1LjE5MyA5LjgxNCAzLjg5NCAxMC44NyAyLjgzOS45ODItLjk4MiAxLjMxOS0xLjcwMiAxLjQyNS0yLjE0Ni4wOC0uMzQtLjE0LS42MzQtLjQzOS0uODE2bC0zLjQ2My0yLjEyYTEuNSAxLjUgMCAwIDAtMS42NzUuMDczbC0xLjA0My43N2ExLjUgMS41IDAgMCAxLTEuOTUyLS4xNDVMOS40MTkgMTIuNTFhMS41IDEuNSAwIDAgMS0uMTMtMS45NzJsLjc1OC0uOTlhMS41IDEuNSAwIDAgMCAuMDg4LTEuNjk1WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE3LjIwNyA5LjYyM1YzLjk2Nm0tMi44MjkgMi44MjhoNS42NTdNOC4wMjIgNC40bDIuMTE0IDMuNDUzYTEuNSAxLjUgMCAwIDEtLjA4OSAxLjY5NWwtLjc1OC45OWExLjUgMS41IDAgMCAwIC4xMyAxLjk3MmwyLjIzNSAyLjIzNWExLjUgMS41IDAgMCAwIDEuOTUyLjE0NmwxLjA0My0uNzdhMS41IDEuNSAwIDAgMSAxLjY3NS0uMDc0bDMuNDYzIDIuMTJjLjI5OC4xODIuNTIuNDc2LjQzOS44MTYtLjEwNi40NDQtLjQ0MyAxLjE2NC0xLjQyNSAyLjE0Ni0xLjA1NSAxLjA1NS01LjY3NiAyLjM1NC0xMC44Ny0yLjg0QzIuNzM3IDExLjA5NiAzLjMyIDYuODI4IDQuNjM4IDUuNTEgNS44MTMgNC4zMzYgNi42OTMgNC4wMDYgNy4yMSAzLjkzYy4zNDMtLjA1LjYzLjE3NS44MTEuNDdaIi8+PC9zdmc+)
 */
export const IconPhoneIncoming: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-phone-incoming'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M10.136 7.853 8.021 4.4c-.18-.296-.468-.52-.811-.47-.518.075-1.398.405-2.573 1.58-1.318 1.318-1.9 5.586 3.293 10.78 5.194 5.193 9.814 3.894 10.87 2.839.982-.982 1.319-1.702 1.425-2.146.08-.34-.14-.634-.439-.816l-3.463-2.12a1.5 1.5 0 0 0-1.675.073l-1.043.77a1.5 1.5 0 0 1-1.952-.145L9.419 12.51a1.5 1.5 0 0 1-.13-1.972l.758-.99a1.5 1.5 0 0 0 .088-1.695Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.207 9.623V3.966m-2.829 2.828h5.657M8.022 4.4l2.114 3.453a1.5 1.5 0 0 1-.089 1.695l-.758.99a1.5 1.5 0 0 0 .13 1.972l2.235 2.235a1.5 1.5 0 0 0 1.952.146l1.043-.77a1.5 1.5 0 0 1 1.675-.074l3.463 2.12c.298.182.52.476.439.816-.106.444-.443 1.164-1.425 2.146-1.055 1.055-5.676 2.354-10.87-2.84C2.737 11.096 3.32 6.828 4.638 5.51 5.813 4.336 6.693 4.006 7.21 3.93c.343-.05.63.175.811.47Z'
      />
    </svg>
  )
}
