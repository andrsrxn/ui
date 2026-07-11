import { cva } from 'class-variance-authority'
import { Slot, Slottable } from '@radix-ui/react-slot'
import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../lib/utils/theme'
import { Spinner } from './spinner'
import { getUILabels } from '../../lib/utils/config'

export const buttonVariants = cva(
  'will-change-transform relative inline-flex gap-2 items-center  origin-center justify-center rounded-base whitespace-nowrap disabled:disabled w-fit grow-0 active:scale-98 shrink-0 leading-none cursor-pointer [&_svg]:text-inherit active:transition-transform duration-fastest touch-target data-disabled:disabled aria-[disabled]:disabled focus-visible:focus transition-theme hover:duration-none',
  {
    variants: {
      variant: {
        primary:
          'bg-brand outline-offset-1 text-content hover:bg-brand-hover active:bg-brand-active',
        secondary:
          'bg-surface border border-input text-primary hover:bg-surface-hover active:bg-surface-active shadow-xs dark:shadow-none',
        tertiary:
          'bg-base-accent text-primary hover:bg-base-accent-hover active:bg-base-accent-active',

        ghost: 'bg-transparent hover:bg-alpha-10 active:bg-alpha-20 text-primary',
        danger: 'bg-danger text-content hover:bg-danger-hover active:bg-danger-active',
        success: 'bg-success text-content hover:bg-success-hover active:bg-success-active',
      },
      size: {
        xs: 'px-2 h-7 min-h-7 text-body-xs font-medium',
        sm: 'px-3 h-8 min-h-8 text-body-sm font-medium',
        base: 'px-4 h-9 min-h-9 text-body-base font-medium',
        lg: 'px-5 h-10 min-h-10 text-body-lg font-medium',

        'icon-xs': 'text-body-xs size-7',
        'icon-sm': 'text-body-sm size-8',
        'icon-base': 'text-body-base size-9',
        'icon-lg': 'text-body-lg size-10',
      },
      full: {
        true: 'w-full flex-1 max-w-full active:scale-99',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        size: ['base', 'sm', 'xs', 'lg'],
        className: '[&_svg]:size-icon-responsive',
      },
      {
        size: ['icon-xs'],
        className: '[&_svg]:size-icon-base',
      },
      {
        size: ['icon-sm'],
        className: '[&_svg]:size-icon-lg',
      },
      {
        size: ['icon-base'],
        className: '[&_svg]:size-icon-xl',
      },
      {
        size: ['icon-lg'],
        className: '[&_svg]:size-icon-2xl',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'base',
      full: false,
      pill: false,
    },
  }
)

export interface ButtonProps
  extends ComponentProps<'button'>, NonNullableVariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  adjustIcon?: boolean
  disabled?: boolean
}

export const Button = ({
  adjustIcon,
  className,
  children,
  variant,
  size,
  pill,
  asChild = false,
  full,
  loading = false,
  disabled = loading,
  type = 'button',
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'
  const { state } = getUILabels()
  return (
    <Comp
      aria-busy={loading}
      disabled={disabled}
      role={asChild || props.role ? undefined : 'button'}
      className={cn(
        buttonVariants({ variant, size, full, pill }),
        adjustIcon && 'justify-between',
        className
      )}
      type={asChild ? undefined : type}
      aria-label={(ariaLabel ?? loading) ? state.loading : undefined}
      {...props}>
      {loading ? <Spinner decorative variant='inherit' /> : null}

      <Slottable>{children}</Slottable>
    </Comp>
  )
}
