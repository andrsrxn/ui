import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandElevenlabs = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Elevenlabs'
    className={cn('size-icon-base shrink-0 rounded-full border bg-black dark:bg-white', className)}
    role='img'
    viewBox='0 0 876 876'
    {...props}>
    <path d='M468 292H528V584H468V292Z' className='fill-white dark:fill-black' />
    <path d='M348 292H408V584H348V292Z' className='fill-white dark:fill-black' />
  </svg>
)
