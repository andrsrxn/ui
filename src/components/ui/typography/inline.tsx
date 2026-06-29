import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'
import { cva } from 'class-variance-authority'

export const inlineVariants = cva('font-body transition-theme', {
  variants: {
    center: {
      true: 'text-center w-full inline-block mx-auto',
    },
    variant: {
      inherit: 'text-inherit',
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      inverted: 'text-inverted',
      content: 'text-content',
      brand: 'text-brand',
      danger: 'text-danger',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
    },
    size: {
      inherit: true,
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
    tablet: {
      inherit: true,
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
    laptop: {
      inherit: true,
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
    desktop: {
      inherit: true,
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
    display: {
      inherit: true,
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
  },
  compoundVariants: [
    {
      size: 'inherit',
      className: 'text-body-inherit',
    },
    {
      size: 'xs',
      className: 'text-body-xs',
    },
    {
      size: 'sm',
      className: 'text-body-sm',
    },
    {
      size: 'base',
      className: 'text-body-base',
    },
    {
      size: 'lg',
      className: 'text-body-lg',
    },
    {
      size: 'xl',
      className: 'text-body-xl',
    },

    {
      tablet: 'inherit',
      className: 'tablet:text-body-inherit',
    },
    {
      tablet: 'xs',
      className: 'tablet:text-body-xs',
    },
    {
      tablet: 'sm',
      className: 'tablet:text-body-sm',
    },
    {
      tablet: 'base',
      className: 'tablet:text-body-base',
    },
    {
      tablet: 'lg',
      className: 'tablet:text-body-lg',
    },
    {
      tablet: 'xl',
      className: 'tablet:text-body-xl',
    },

    {
      laptop: 'inherit',
      className: 'laptop:text-body-inherit',
    },
    {
      laptop: 'xs',
      className: 'laptop:text-body-xs',
    },
    {
      laptop: 'sm',
      className: 'laptop:text-body-sm',
    },
    {
      laptop: 'base',
      className: 'laptop:text-body-base',
    },
    {
      laptop: 'lg',
      className: 'laptop:text-body-lg',
    },
    {
      laptop: 'xl',
      className: 'laptop:text-body-xl',
    },

    {
      desktop: 'inherit',
      className: 'desktop:text-body-inherit',
    },
    {
      desktop: 'xs',
      className: 'desktop:text-body-xs',
    },
    {
      desktop: 'sm',
      className: 'desktop:text-body-sm',
    },
    {
      desktop: 'base',
      className: 'desktop:text-body-base',
    },
    {
      desktop: 'lg',
      className: 'desktop:text-body-lg',
    },
    {
      desktop: 'xl',
      className: 'desktop:text-body-xl',
    },

    {
      display: 'inherit',
      className: 'display:text-body-inherit',
    },
    {
      display: 'xs',
      className: 'display:text-body-xs',
    },
    {
      display: 'sm',
      className: 'display:text-body-sm',
    },
    {
      display: 'base',
      className: 'display:text-body-base',
    },
    {
      display: 'lg',
      className: 'display:text-body-lg',
    },
    {
      display: 'xl',
      className: 'display:text-body-xl',
    },
  ],
  defaultVariants: {
    variant: 'inherit',
    center: false,
    size: 'inherit',
  },
})

export interface InlineProps
  extends ComponentProps<'span'>, NonNullableVariantProps<typeof inlineVariants> {}

export const Inline = ({
  variant,
  size,
  center,
  tablet,
  laptop,
  display,
  desktop,
  className,
  ...props
}: InlineProps) => {
  return (
    <span
      data-slot='inline'
      className={cn(
        inlineVariants({
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
