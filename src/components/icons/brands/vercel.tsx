import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandVercel = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Vercel'
    className={cn('size-icon-base shrink-0', className)}
    {...props}
    preserveAspectRatio='xMidYMid'
    role='img'
    viewBox='0 0 256 222'>
    <path fill='#000' d='m128 0 128 221.705H0z' />
  </svg>
)
