import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandStatista = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Statista'
    className={cn('size-icon-base shrink-0', className)}
    {...props}
    role='img'
    viewBox='0 0 150 150'>
    <path
      fill='#133051'
      d='M132.57 14.07H17.86c-2.39 0-4.32 1.94-4.32 4.32v78.33c21.68 0 34.91-4.52 48.91-26.77 19.85-32.57 45.22-43.56 74.45-42.47-.47-3.76 2.04-13.52-4.32-13.41ZM17.97 138.05h114.71c2.39 0 4.32-1.94 4.32-4.32V55.4c-21.68 0-34.91 4.52-48.91 26.77-19.85 32.57-45.22 43.56-74.45 42.47.47 3.76-2.04 13.52 4.32 13.41Z'
    />
  </svg>
)
