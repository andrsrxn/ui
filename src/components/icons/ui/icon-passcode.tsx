import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNTkgOS43MWMwLTEuMDIgMC0xLjUyOC41OTgtMS44NDUuNTk3LS4zMTYgMS41Ni0uMzE2IDMuNDg0LS4zMTZoOC42NTZjMS45MjUgMCAyLjg4NyAwIDMuNDg0LjMxNi41OTguMzE3LjU5OC44MjYuNTk4IDEuODQ0djQuNTgyYzAgMS4wMTggMCAxLjUyNy0uNTk4IDEuODQ0LS41OTcuMzE2LTEuNTYuMzE2LTMuNDg0LjMxNkg3LjY3MmMtMS45MjUgMC0yLjg4NyAwLTMuNDg0LS4zMTYtLjU5OC0uMzE3LS41OTgtLjgyNi0uNTk4LTEuODQ0VjkuNzA5WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik04LjE1OCAxMi4wOGEuNDkxLjQ5MSAwIDEgMS0uOTgyIDAgLjQ5MS40OTEgMCAwIDEgLjk4MiAwWm00LjQyMi4wMDhhLjQ5MS40OTEgMCAxIDEtLjk4MyAwIC40OTEuNDkxIDAgMCAxIC45ODIgMFptNC40Mi4wMDlhLjQ5MS40OTEgMCAxIDEtLjk4MyAwIC40OTEuNDkxIDAgMCAxIC45ODMgMFoiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTMuNTkgMTEuNTQ5YzAtMS44ODYgMC0yLjgyOS41ODYtMy40MTQuNTg2LS41ODYgMS41MjgtLjU4NiAzLjQxNC0uNTg2aDguODJjMS44ODYgMCAyLjgyOCAwIDMuNDE0LjU4Ni41ODYuNTg1LjU4NiAxLjUyOC41ODYgMy40MTR2LjkwMmMwIDEuODg2IDAgMi44MjktLjU4NiAzLjQxNC0uNTg2LjU4Ni0xLjUyOC41ODYtMy40MTQuNTg2SDcuNTljLTEuODg2IDAtMi44MjggMC0zLjQxNC0uNTg2LS41ODYtLjU4NS0uNTg2LTEuNTI4LS41ODYtMy40MTR2LS45MDJaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik04LjE1OCAxMi4wOGEuNDkxLjQ5MSAwIDEgMS0uOTgyIDAgLjQ5MS40OTEgMCAwIDEgLjk4MiAwWm00LjQyMi4wMDhhLjQ5MS40OTEgMCAxIDEtLjk4MyAwIC40OTEuNDkxIDAgMCAxIC45ODIgMFptNC40Mi4wMDlhLjQ5MS40OTEgMCAxIDEtLjk4MyAwIC40OTEuNDkxIDAgMCAxIC45ODMgMFoiLz48L3N2Zz4=)
 */
export const IconPasscode: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-passcode'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M3.59 9.71c0-1.02 0-1.528.598-1.845.597-.316 1.56-.316 3.484-.316h8.656c1.925 0 2.887 0 3.484.316.598.317.598.826.598 1.844v4.582c0 1.018 0 1.527-.598 1.844-.597.316-1.56.316-3.484.316H7.672c-1.925 0-2.887 0-3.484-.316-.598-.317-.598-.826-.598-1.844V9.709Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M8.158 12.08a.491.491 0 1 1-.982 0 .491.491 0 0 1 .982 0Zm4.422.008a.491.491 0 1 1-.983 0 .491.491 0 0 1 .982 0Zm4.42.009a.491.491 0 1 1-.983 0 .491.491 0 0 1 .983 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.59 11.549c0-1.886 0-2.829.586-3.414.586-.586 1.528-.586 3.414-.586h8.82c1.886 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v.902c0 1.886 0 2.829-.586 3.414-.586.586-1.528.586-3.414.586H7.59c-1.886 0-2.828 0-3.414-.586-.586-.585-.586-1.528-.586-3.414v-.902Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.158 12.08a.491.491 0 1 1-.982 0 .491.491 0 0 1 .982 0Zm4.422.008a.491.491 0 1 1-.983 0 .491.491 0 0 1 .982 0Zm4.42.009a.491.491 0 1 1-.983 0 .491.491 0 0 1 .983 0Z'
      />
    </svg>
  )
}
