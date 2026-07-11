import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandRadixUI = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='#121212'
    aria-label='Radix UI'
    className={cn('size-icon-base shrink-0', className)}
    {...props}
    role='img'
    viewBox='4 0 17 25'>
    <path fill='#121212' d='M12 25a8 8 0 1 1 0-16zm0-25H4v8h8zm5 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8' />
  </svg>
)
