import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandBaseUI = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Base UI'
    className={cn('size-icon-base shrink-0 fill-black dark:fill-white', className)}
    role='img'
    viewBox='0 0 17 24'
    {...props}>
    <path d='M9.5 7.015A.477.477 0 0 0 9 7.5V23a8 8 0 0 0 .5-15.985ZM8 9.8V23c-4.418 0-8-3.94-8-8.8V1c4.418 0 8 3.94 8 8.8Z' />
  </svg>
)
