import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandElevenlabs = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Elevenlabs'
    className={cn('size-icon shrink-0 rounded-full bg-white', className)}
    {...props}
    role='img'
    viewBox='0 0 876 876'>
    <path fill='#000' d='M468 292h60v292h-60zm-120 0h60v292h-60z' />
  </svg>
)
