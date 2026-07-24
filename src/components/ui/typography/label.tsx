import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'
import { cva } from 'class-variance-authority'

export const labelVariants = cva(
  'font-label text-balance inline-block leading-none transition-theme',
  {
    variants: {
      center: {
        true: 'text-center w-full mx-auto',
      },
      variant: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        content: 'text-content',
      },
      size: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
        '2xl': true,
        '3xl': true,
        '4xl': true,
      },
      tablet: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
        '2xl': true,
        '3xl': true,
        '4xl': true,
      },
      laptop: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
        '2xl': true,
        '3xl': true,
        '4xl': true,
      },
      desktop: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
        '2xl': true,
        '3xl': true,
        '4xl': true,
      },
      display: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
        '2xl': true,
        '3xl': true,
        '4xl': true,
      },
    },
    compoundVariants: [
      {
        size: 'xs',
        className: 'text-label-xs',
      },
      {
        size: 'sm',
        className: 'text-label-sm',
      },
      {
        size: 'base',
        className: 'text-label-base',
      },
      {
        size: 'lg',
        className: 'text-label-lg',
      },
      {
        size: 'xl',
        className: 'text-label-xl',
      },
      {
        size: '2xl',
        className: 'text-label-2xl',
      },
      {
        size: '3xl',
        className: 'text-label-3xl',
      },
      {
        size: '4xl',
        className: 'text-label-4xl',
      },

      {
        tablet: 'xs',
        className: 'tablet:text-label-xs',
      },
      {
        tablet: 'sm',
        className: 'tablet:text-label-sm',
      },
      {
        tablet: 'base',
        className: 'tablet:text-label-base',
      },
      {
        tablet: 'lg',
        className: 'tablet:text-label-lg',
      },
      {
        tablet: 'xl',
        className: 'tablet:text-label-xl',
      },
      {
        tablet: '2xl',
        className: 'tablet:text-label-2xl',
      },
      {
        tablet: '3xl',
        className: 'tablet:text-label-3xl',
      },
      {
        tablet: '4xl',
        className: 'tablet:text-label-4xl',
      },

      {
        laptop: 'xs',
        className: 'laptop:text-label-xs',
      },
      {
        laptop: 'sm',
        className: 'laptop:text-label-sm',
      },
      {
        laptop: 'base',
        className: 'laptop:text-label-base',
      },
      {
        laptop: 'lg',
        className: 'laptop:text-label-lg',
      },
      {
        laptop: 'xl',
        className: 'laptop:text-label-xl',
      },
      {
        laptop: '2xl',
        className: 'laptop:text-label-2xl',
      },
      {
        laptop: '3xl',
        className: 'laptop:text-label-3xl',
      },
      {
        laptop: '4xl',
        className: 'laptop:text-label-4xl',
      },

      {
        desktop: 'xs',
        className: 'desktop:text-label-xs',
      },
      {
        desktop: 'sm',
        className: 'desktop:text-label-sm',
      },
      {
        desktop: 'base',
        className: 'desktop:text-label-base',
      },
      {
        desktop: 'lg',
        className: 'desktop:text-label-lg',
      },
      {
        desktop: 'xl',
        className: 'desktop:text-label-xl',
      },
      {
        desktop: '2xl',
        className: 'desktop:text-label-2xl',
      },
      {
        desktop: '3xl',
        className: 'desktop:text-label-3xl',
      },
      {
        desktop: '4xl',
        className: 'desktop:text-label-4xl',
      },

      {
        display: 'xs',
        className: 'display:text-label-xs',
      },
      {
        display: 'sm',
        className: 'display:text-label-sm',
      },
      {
        display: 'base',
        className: 'display:text-label-base',
      },
      {
        display: 'lg',
        className: 'display:text-label-lg',
      },
      {
        display: 'xl',
        className: 'display:text-label-xl',
      },
      {
        display: '2xl',
        className: 'display:text-label-2xl',
      },
      {
        display: '3xl',
        className: 'display:text-label-3xl',
      },
      {
        display: '4xl',
        className: 'display:text-label-4xl',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      center: false,
      size: 'base',
    },
  }
)

export interface LabelProps
  extends ComponentProps<'span'>, NonNullableVariantProps<typeof labelVariants> {}

export const Label = ({
  variant,
  size,
  center,
  tablet,
  laptop,
  display,
  desktop,
  className,
  ...props
}: LabelProps) => {
  return (
    <span
      data-slot='label'
      className={cn(
        labelVariants({
          tablet,
          laptop,
          center,
          desktop,
          display,
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  )
}
