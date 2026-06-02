import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconLogoBoldVercel = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label='Vercel'
    role='img'
    viewBox='0 0 256 222'
    className={cn('size-icon-base shrink-0', className)}
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    {...props}>
    <path fill='#000' d='m128 0 128 221.705H0z' />
  </svg>
)
