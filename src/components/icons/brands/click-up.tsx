import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandClickUp = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Click Up'
    className={cn('size-icon-base shrink-0', className)}
    {...props}
    role='img'
    viewBox='0 0 32 38'>
    <linearGradient
      id='clikup-a'
      x1='0'
      x2='31.236'
      y1='40.244'
      y2='40.244'
      gradientUnits='userSpaceOnUse'>
      <stop offset='0' stopColor='#7612fa' />
      <stop offset='1' stopColor='#40ddff' />
    </linearGradient>
    <linearGradient
      id='clikup-b'
      x1='.681'
      x2='30.61'
      y1='21.988'
      y2='21.988'
      gradientUnits='userSpaceOnUse'>
      <stop offset='0' stopColor='#fa12e3' />
      <stop offset='1' stopColor='gold' />
    </linearGradient>
    <path
      fill='url(#clikup-a)'
      d='m0 29.087 5.764-4.46c3.062 4.037 6.316 5.898 9.937 5.898 3.603 0 6.764-1.839 9.689-5.844l5.846 4.352c-4.22 5.776-9.463 8.827-15.535 8.827C9.65 37.86 4.355 34.828 0 29.087'
    />
    <path
      fill='url(#clikup-b)'
      d='m15.683 9.703-10.26 8.93-4.742-5.556L15.705 0 30.61 13.087l-4.764 5.536z'
    />
  </svg>
)
