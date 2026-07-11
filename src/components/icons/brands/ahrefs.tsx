import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandAhrefs = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Ahrefs'
    className={cn('size-icon-base shrink-0', className)}
    {...props}
    role='img'
    viewBox='0 0 1200 1200'>
    <path fill='#054ada' d='M0 0h1200v1200H0z' />
    <path
      fill='#fff'
      d='M652.502 285.818H320.704v138.859h331.798v75.98l-132.982 13.1c-190.917 18.341-251.482 64.191-251.482 204.359v36.679c0 107.421 77.684 163.75 173.8 163.75 43.45 0 90.849-10.479 138.251-35.37l72.416-36.68v64.192h139.566v-486.01zm0 424.439-89.533 45.85c-34.232 19.65-69.782 30.129-97.431 30.129-34.232 0-57.935-11.791-57.935-55.02v-28.821c2.634-45.85 32.917-57.641 135.616-68.121l109.283-11.791v87.771z'
    />
    <path
      fill='#f80'
      d='M792.067 285.818H652.502v138.859h139.565zm139.569 138.849H792.071v486.019h139.565z'
    />
  </svg>
)
