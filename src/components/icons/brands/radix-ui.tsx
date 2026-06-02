import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconLogoBoldRadixUI = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label='Radix UI'
    className={cn('size-icon-base shrink-0', className)}
    role='img'
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    fill='#121212'
    viewBox='4 0 17 25'>
    <path
      d='M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
      fill='#121212'
    />
  </svg>
)
