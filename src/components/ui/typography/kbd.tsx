import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'

export const kbdVariants = cva(
  'shrink-0 rounded-base border-b-2 w-fit bg-surface gap-0.5 font-mono outline outline-base inline-flex items-center justify-center border-base px-1.5 py-1 transition-theme',
  {
    variants: {
      size: {
        sm: 'text-body-xs [&_svg]:size-icon-sm leading-none',
        base: 'text-body-sm [&_svg]:size-icon-base leading-none',
        lg: 'text-body-base [&_svg]:size-icon-lg leading-none',
        inline: 'text-[0.9em] [&_svg]:size-icon-responsive leading-none',
      },
      variant: {
        primary: 'bg-surface text-primary font-medium',
        secondary: 'bg-surface-alt text-primary font-medium',
        tertiary:
          'bg-transparent outline-none border-none p-0 text-tertiary [&_svg]:text-tertiary font-medium',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  }
)
export interface KbdProps
  extends ComponentProps<'kbd'>, NonNullableVariantProps<typeof kbdVariants> {}

export const Kbd = ({ children, size, variant, className, ...props }: KbdProps) => (
  <kbd data-slot='kbd' className={cn(kbdVariants({ size, variant }), className)} {...props}>
    {children}
  </kbd>
)

export const KbdGroup = ({
  className,
  includeSeparator = false,
  ...props
}: ComponentProps<'kbd'> & { includeSeparator?: boolean }) => (
  <kbd
    data-slot='kbd-group'
    className={cn(
      'flex shrink-0 items-center gap-0.5 font-mono leading-none',
      includeSeparator && '[&>[data-slot=kbd]:not(:last-child)]:after:content-["+"]',
      className
    )}
    {...props}
  />
)
