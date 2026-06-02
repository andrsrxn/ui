import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconLogoBoldMastercard = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label='Mastercard'
    className={cn('size-icon-base shrink-0', className)}
    role='img'
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 1000 618'>
    <path d='m308,0a309,309 0 1,0 2,0z' fill='#EB001B' />

    <path d='m690,0a309,309 0 1,0 2,0z' fill='#F79E1B' />

    <path d='m500,66a309,309 0 0,0 0,486 309,309 0 0,0 0-486' fill='#FF5F00' />
  </svg>
)
