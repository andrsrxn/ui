import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'
import { cva } from 'class-variance-authority'

export const textVariants = cva('font-body max-w-prose text-pretty transition-theme', {
  variants: {
    center: {
      true: 'text-center w-full mx-auto',
    },
    variant: {
      inherit: 'text-inherit',
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      content: 'text-content',
      brandContent: 'text-brand-content',
      dangerContent: 'text-danger-content',
      successContent: 'text-success-content',
      warningContent: 'text-warning-content',
      infoContent: 'text-info-content',
      idleContent: 'text-idle-content',
      brand: 'text-brand',
      danger: 'text-danger',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
      idle: 'text-idle',
    },

    size: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
    tablet: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
    laptop: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
    desktop: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
    display: {
      xs: true,
      sm: true,
      base: true,
      lg: true,
      xl: true,
    },
  },
  compoundVariants: [
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
    variant: 'primary',
    center: false,
    size: 'base',
  },
})

export interface TextProps
  extends ComponentProps<'p'>, NonNullableVariantProps<typeof textVariants> {}

export const Text = ({
  variant,
  size,
  center,
  tablet,
  laptop,
  display,
  desktop,
  className,
  ...props
}: TextProps) => {
  return (
    <p
      data-slot='text'
      className={cn(
        textVariants({
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
