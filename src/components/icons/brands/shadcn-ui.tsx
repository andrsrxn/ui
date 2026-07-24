import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandShadcnUI = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='shadcn/ui'
    className={cn('size-icon-base shrink-0', className)}
    role='img'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 256'
    fill='none'
    {...props}>
    <path fill='none' d='M0 0h256v256H0z' />
    <path
      fill='none'
      className='stroke-black dark:stroke-white'
      strokeWidth='25'
      strokeLinecap='round'
      d='M208 128l-80 80M192 40L40 192'
    />
  </svg>
)
