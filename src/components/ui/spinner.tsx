import { cva } from 'class-variance-authority'
import { cn, type NonNullableVariantProps } from '../../lib/utils/theme'
import type { IconProps } from '../icons/icon'
import { IconSpinner } from '@andrsrxn/icons'
import { getUILabels } from '../../lib/utils/config'

export const spinnerVariants = cva('animate-spin animate-ease-base transition-theme inline-block', {
  variants: {
    variant: {
      primary: 'text-brand',
      secondary: 'text-primary',
      tertiary: 'text-secondary',
      inherit: 'text-inherit',
    },
    size: {
      responsive: 'size-icon-responsive',
      xs: 'size-icon-xs',
      sm: 'size-icon-sm',
      base: 'size-icon-base',
      lg: 'size-icon-lg',
      xl: 'size-icon-xl',
      '2xl': 'size-icon-2xl',
      '3xl': 'size-icon-3xl',
      '4xl': 'size-icon-4xl',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'base',
  },
})

export interface SpinnerProps extends IconProps, NonNullableVariantProps<typeof spinnerVariants> {
  decorative?: boolean
}

export const Spinner = ({
  size,
  variant,
  className,
  decorative = false,
  ...props
}: SpinnerProps) => {
  const { state } = getUILabels()

  if (decorative) {
    return (
      <IconSpinner
        aria-hidden
        data-slot='spinner'
        className={cn(spinnerVariants({ size, variant }), className)}
        {...props}
      />
    )
  }

  return (
    <span role='status' aria-label={state.loading} data-slot='spinner'>
      <IconSpinner
        aria-hidden
        className={cn(spinnerVariants({ size, variant }), className)}
        {...props}
      />
    </span>
  )
}
