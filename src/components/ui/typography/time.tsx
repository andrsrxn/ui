import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'
import { IconClock } from '@andrsrxn/icons'

export const timeVariants = cva('font-body transition-theme shrink-0', {
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      content: 'text-content',
    },

    size: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
    },
    tablet: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
    },
    laptop: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
    },
    desktop: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
    },
    display: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      class: 'text-body-xs',
    },
    {
      size: 'sm',
      class: 'text-body-sm',
    },
    {
      size: 'base',
      class: 'text-body-base',
    },
    {
      size: 'lg',
      class: 'text-body-lg',
    },

    {
      tablet: 'xs',
      class: 'tablet:text-body-xs',
    },
    {
      tablet: 'sm',
      class: 'tablet:text-body-sm',
    },
    {
      tablet: 'base',
      class: 'tablet:text-body-base',
    },
    {
      tablet: 'lg',
      class: 'tablet:text-body-lg',
    },

    {
      laptop: 'xs',
      class: 'laptop:text-body-xs',
    },
    {
      laptop: 'sm',
      class: 'laptop:text-body-sm',
    },
    {
      laptop: 'base',
      class: 'laptop:text-body-base',
    },
    {
      laptop: 'lg',
      class: 'laptop:text-body-lg',
    },

    {
      desktop: 'xs',
      class: 'desktop:text-body-xs',
    },
    {
      desktop: 'sm',
      class: 'desktop:text-body-sm',
    },
    {
      desktop: 'base',
      class: 'desktop:text-body-base',
    },
    {
      desktop: 'lg',
      class: 'desktop:text-body-lg',
    },

    {
      display: 'xs',
      class: 'display:text-body-xs',
    },
    {
      display: 'sm',
      class: 'display:text-body-sm',
    },
    {
      display: 'base',
      class: 'display:text-body-base',
    },
    {
      display: 'lg',
      class: 'display:text-body-lg',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'base',
  },
})

export interface TimeProps
  extends ComponentProps<'time'>, NonNullableVariantProps<typeof timeVariants> {
  dateTime: string
  includeIcon?: boolean
}

export const Time = ({
  variant,
  tablet,
  laptop,
  display,
  desktop,
  size,
  dateTime,
  children,
  className,
  includeIcon = false,
  ...props
}: TimeProps) => {
  return (
    <time
      className={cn(
        timeVariants({ desktop, display, laptop, size, tablet, variant }),
        includeIcon && 'inline-flex items-center gap-2',
        className
      )}
      dateTime={dateTime}
      {...props}>
      {includeIcon ? <IconClock className='size-icon-responsive text-inherit' /> : null}
      {children}
    </time>
  )
}
