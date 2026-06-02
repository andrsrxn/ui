import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconLogoBoldElevenlabs = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label='Elevenlabs'
    className={cn('size-icon shrink-0 rounded-full bg-white', className)}
    role='img'
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 876 876'>
    <path d='M468 292H528V584H468V292Z' fill='black' />
    <path d='M348 292H408V584H348V292Z' fill='black' />
  </svg>
)
