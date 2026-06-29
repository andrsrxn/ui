import { createElement, useMemo, type ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'
import { cva } from 'class-variance-authority'
import { slugify } from '../../../lib/utils/strings'
import { IconLink } from '../../icons'
import { LABELS } from '../../../lib/constants/components'
import { Link } from './link'

export const headingVariants = cva(
  'font-heading text-balance whitespace-normal block transition-theme',
  {
    variants: {
      center: {
        true: 'text-center w-full mx-auto',
      },
      level: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
      },
      variant: {
        base: 'text-primary',
        inverted: 'text-inverted',
        content: 'text-content',
      },
      size: {
        sm: true,
        base: true,
        'display-base': true,
        'display-sm': true,
      },
      tablet: {
        sm: true,
        base: true,

        'display-base': true,
        'display-sm': true,
      },
      laptop: {
        sm: true,
        base: true,

        'display-base': true,
        'display-sm': true,
      },
      desktop: {
        sm: true,
        base: true,

        'display-base': true,
        'display-sm': true,
      },
      display: {
        sm: true,
        base: true,
        'display-base': true,
        'display-sm': true,
      },
    },
    compoundVariants: [
      {
        level: 1,
        size: 'sm',
        className: 'text-heading-1-sm',
      },
      {
        level: 1,
        size: 'base',
        className: 'text-heading-1-base',
      },

      {
        level: 1,
        size: 'display-base',
        className: 'text-heading-1-display-base',
      },
      {
        level: 1,
        size: 'display-sm',
        className: 'text-heading-1-display-sm',
      },

      {
        level: 2,
        size: 'sm',
        className: 'text-heading-2-sm',
      },
      {
        level: 2,
        size: 'base',
        className: 'text-heading-2-base',
      },

      {
        level: 2,
        size: 'display-base',
        className: 'text-heading-2-display-base',
      },
      {
        level: 2,
        size: 'display-sm',
        className: 'text-heading-2-display-sm',
      },

      {
        level: 3,
        size: 'sm',
        className: 'text-heading-3-sm',
      },
      {
        level: 3,
        size: 'base',
        className: 'text-heading-3-base',
      },

      {
        level: 4,
        size: 'sm',
        className: 'text-heading-4-sm',
      },
      {
        level: 4,
        size: 'base',
        className: 'text-heading-4-base',
      },

      {
        level: 5,
        size: 'sm',
        className: 'text-heading-5-sm',
      },
      {
        level: 5,
        size: 'base',
        className: 'text-heading-5-base',
      },

      {
        level: 6,
        size: 'sm',
        className: 'text-heading-6-sm',
      },
      {
        level: 6,
        size: 'base',
        className: 'text-heading-6-base',
      },

      {
        level: 1,
        tablet: 'sm',
        className: 'tablet:text-heading-1-sm',
      },
      {
        level: 1,
        tablet: 'base',
        className: 'tablet:text-heading-1-base',
      },

      {
        level: 1,
        tablet: 'display-base',
        className: 'tablet:text-heading-1-display-base',
      },
      {
        level: 1,
        tablet: 'display-sm',
        className: 'tablet:text-heading-1-display-sm',
      },

      {
        level: 2,
        tablet: 'sm',
        className: 'tablet:text-heading-2-sm',
      },
      {
        level: 2,
        tablet: 'base',
        className: 'tablet:text-heading-2-base',
      },

      {
        level: 2,
        tablet: 'display-base',
        className: 'tablet:text-heading-2-display-base',
      },
      {
        level: 2,
        tablet: 'display-sm',
        className: 'tablet:text-heading-2-display-sm',
      },

      {
        level: 3,
        tablet: 'sm',
        className: 'tablet:text-heading-3-sm',
      },
      {
        level: 3,
        tablet: 'base',
        className: 'tablet:text-heading-3-base',
      },

      {
        level: 4,
        tablet: 'sm',
        className: 'tablet:text-heading-4-sm',
      },
      {
        level: 4,
        tablet: 'base',
        className: 'tablet:text-heading-4-base',
      },

      {
        level: 5,
        tablet: 'sm',
        className: 'tablet:text-heading-5-sm',
      },
      {
        level: 5,
        tablet: 'base',
        className: 'tablet:text-heading-5-base',
      },

      {
        level: 6,
        tablet: 'sm',
        className: 'tablet:text-heading-6-sm',
      },
      {
        level: 6,
        tablet: 'base',
        className: 'tablet:text-heading-6-base',
      },

      {
        level: 1,
        laptop: 'sm',
        className: 'laptop:text-heading-1-sm',
      },
      {
        level: 1,
        laptop: 'base',
        className: 'laptop:text-heading-1-base',
      },

      {
        level: 1,
        laptop: 'display-base',
        className: 'laptop:text-heading-1-display-base',
      },
      {
        level: 1,
        laptop: 'display-sm',
        className: 'laptop:text-heading-1-display-sm',
      },

      {
        level: 2,
        laptop: 'sm',
        className: 'laptop:text-heading-2-sm',
      },
      {
        level: 2,
        laptop: 'base',
        className: 'laptop:text-heading-2-base',
      },

      {
        level: 2,
        laptop: 'display-base',
        className: 'laptop:text-heading-2-display-base',
      },
      {
        level: 2,
        laptop: 'display-sm',
        className: 'laptop:text-heading-2-display-sm',
      },

      {
        level: 3,
        laptop: 'sm',
        className: 'laptop:text-heading-3-sm',
      },
      {
        level: 3,
        laptop: 'base',
        className: 'laptop:text-heading-3-base',
      },

      {
        level: 4,
        laptop: 'sm',
        className: 'laptop:text-heading-4-sm',
      },
      {
        level: 4,
        laptop: 'base',
        className: 'laptop:text-heading-4-base',
      },

      {
        level: 5,
        laptop: 'sm',
        className: 'laptop:text-heading-5-sm',
      },
      {
        level: 5,
        laptop: 'base',
        className: 'laptop:text-heading-5-base',
      },

      {
        level: 6,
        laptop: 'sm',
        className: 'laptop:text-heading-6-sm',
      },
      {
        level: 6,
        laptop: 'base',
        className: 'laptop:text-heading-6-base',
      },

      {
        level: 1,
        desktop: 'sm',
        className: 'desktop:text-heading-1-sm',
      },
      {
        level: 1,
        desktop: 'base',
        className: 'desktop:text-heading-1-base',
      },

      {
        level: 1,
        desktop: 'display-base',
        className: 'desktop:text-heading-1-display-base',
      },
      {
        level: 1,
        desktop: 'display-sm',
        className: 'desktop:text-heading-1-display-sm',
      },

      {
        level: 2,
        desktop: 'sm',
        className: 'desktop:text-heading-2-sm',
      },
      {
        level: 2,
        desktop: 'base',
        className: 'desktop:text-heading-2-base',
      },

      {
        level: 2,
        desktop: 'display-base',
        className: 'desktop:text-heading-2-display-base',
      },
      {
        level: 2,
        desktop: 'display-sm',
        className: 'desktop:text-heading-2-display-sm',
      },

      {
        level: 3,
        desktop: 'sm',
        className: 'desktop:text-heading-3-sm',
      },
      {
        level: 3,
        desktop: 'base',
        className: 'desktop:text-heading-3-base',
      },

      {
        level: 4,
        desktop: 'sm',
        className: 'desktop:text-heading-4-sm',
      },
      {
        level: 4,
        desktop: 'base',
        className: 'desktop:text-heading-4-base',
      },

      {
        level: 5,
        desktop: 'sm',
        className: 'desktop:text-heading-5-sm',
      },
      {
        level: 5,
        desktop: 'base',
        className: 'desktop:text-heading-5-base',
      },

      {
        level: 6,
        desktop: 'sm',
        className: 'desktop:text-heading-6-sm',
      },
      {
        level: 6,
        desktop: 'base',
        className: 'desktop:text-heading-6-base',
      },

      {
        level: 1,
        display: 'sm',
        className: 'display:text-heading-1-sm',
      },
      {
        level: 1,
        display: 'base',
        className: 'display:text-heading-1-base',
      },

      {
        level: 1,
        display: 'display-base',
        className: 'display:text-heading-1-display-base',
      },
      {
        level: 1,
        display: 'display-sm',
        className: 'display:text-heading-1-display-sm',
      },

      {
        level: 2,
        display: 'sm',
        className: 'display:text-heading-2-sm',
      },
      {
        level: 2,
        display: 'base',
        className: 'display:text-heading-2-base',
      },

      {
        level: 2,
        display: 'display-base',
        className: 'display:text-heading-2-display-base',
      },
      {
        level: 2,
        display: 'display-sm',
        className: 'display:text-heading-2-display-sm',
      },

      {
        level: 3,
        display: 'sm',
        className: 'display:text-heading-3-sm',
      },
      {
        level: 3,
        display: 'base',
        className: 'display:text-heading-3-base',
      },

      {
        level: 4,
        display: 'sm',
        className: 'display:text-heading-4-sm',
      },
      {
        level: 4,
        display: 'base',
        className: 'display:text-heading-4-base',
      },

      {
        level: 5,
        display: 'sm',
        className: 'display:text-heading-5-sm',
      },
      {
        level: 5,
        display: 'base',
        className: 'display:text-heading-5-base',
      },

      {
        level: 6,
        display: 'sm',
        className: 'display:text-heading-6-sm',
      },
      {
        level: 6,
        display: 'base',
        className: 'display:text-heading-6-base',
      },
    ],
    defaultVariants: {
      level: 1,
      variant: 'base',
      center: false,
      size: 'base',
    },
  }
)

export interface HeadingProps
  extends ComponentProps<'h1'>, NonNullableVariantProps<typeof headingVariants> {
  includeAnchor?: boolean
}

export const Heading = ({
  variant,
  size,
  level = 1,
  center,
  tablet,
  laptop,
  display,
  desktop,
  includeAnchor = false,
  className,
  children,
  id,
  ...props
}: HeadingProps) => {
  const slug = useMemo(
    () => (typeof children === 'string' ? slugify({ text: children }) : undefined),
    [children]
  )
  const headingId = id ?? slug

  // biome-ignore lint/nursery/noComponentHookFactories:constructing the h tag based on level
  // biome-ignore lint/correctness/noNestedComponentDefinitions:constructing the h tag based on level
  const HeadingToRender = ({ ...props }) => createElement(`h${level}`, props, children)

  const commonProps = {
    'data-slot': 'heading',
    id: headingId,
    className: cn(
      headingVariants({
        level,
        tablet,
        laptop,
        center,
        desktop,
        display,
        variant,
        size,
      }),
      className
    ),
  }

  if (!includeAnchor) {
    return <HeadingToRender {...commonProps} {...props} />
  }

  return (
    <div className='group relative'>
      <HeadingToRender {...commonProps} {...props} />

      {id !== undefined && (
        <Link
          unstyled
          aria-label={LABELS.permanetLink}
          data-slot='heading-permanent-link'
          className={cn(
            'duration-faster ease-base absolute top-0 right-full flex items-center transition-opacity! focus-visible:opacity-100 focus-visible:ring-0 active:scale-98',
            includeAnchor && 'text-selectable hover:text-selected opacity-0 group-hover:opacity-100'
          )}
          href={`#${id}`}>
          <IconLink className='size-icon-responsive mr-2' />
        </Link>
      )}
    </div>
  )
}
