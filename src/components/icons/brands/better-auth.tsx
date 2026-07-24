import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandBetterAuth = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Better Auth'
    className={cn('size-icon-base shrink-0 fill-black dark:fill-white', className)}
    role='img'
    fill='none'
    viewBox='0 0 500 500'
    {...props}>
    <path className='fill-black dark:fill-white' d='M0 0h500v500H0z' />
    <path
      className='fill-white dark:fill-black'
      d='M69 121h86.988v259H69zM337.575 121H430v259h-92.425z'
    />
    <path
      className='fill-white dark:fill-black'
      d='M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z'
    />
    <path className='fill-white dark:fill-black' d='M252.762 204.455v92.089h-96.774v-92.089z' />
  </svg>
)
