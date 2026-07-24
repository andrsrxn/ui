import type { SVGProps } from 'react'
import { cn } from '../../../lib/utils/theme'

export const IconBrandSVG = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='SVG'
    className={cn('size-icon-base shrink-0', className)}
    role='img'
    preserveAspectRatio='xMidYMid'
    fill='none'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 300 300'
    {...props}>
    <g stroke='#000' strokeWidth='38.009'>
      <g id='svg__svgstar' transform='translate(150 150)'>
        <path
          id='svg__svgbar'
          fill='#ffb13b'
          d='M-84.149-15.851a22.417 22.417 0 1 0 0 31.702H84.15a22.417 22.417 0 1 0 0-31.702Z'
        />
        <use xlinkHref='#svg__svgbar' transform='rotate(45)' />
        <use xlinkHref='#svg__svgbar' transform='rotate(90)' />
        <use xlinkHref='#svg__svgbar' transform='rotate(135)' />
      </g>
    </g>
    <use xlinkHref='#svg__svgstar' />
  </svg>
)
