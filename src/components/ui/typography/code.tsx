import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'

export const codeVariants = cva(
  'shrink-0 rounded-base text-primary w-fit border box-decoration-slice border-base relative bg-base-contrast px-1.5 py-1 font-mono inline-block transition-theme',
  {
    variants: {
      size: {
        sm: 'text-body-xs [&_svg]:size-icon-sm leading-none font-medium',
        base: 'text-body-sm [&_svg]:size-icon-base leading-none font-medium',
        lg: 'text-body-base [&_svg]:size-icon-lg leading-none font-medium',
        inline: 'text-[0.9em] [&_svg]:size-icon-responsive leading-none font-medium',
      },
      variant: {
        primary: 'bg-surface shadow-xs',
        secondary: 'bg-surface-alt border-base shadow-xs',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  }
)

export interface CodeProps
  extends ComponentProps<'code'>, NonNullableVariantProps<typeof codeVariants> {}

export const Code = ({ className, variant, size, ...props }: CodeProps) => (
  <code data-slot='code' className={cn(codeVariants({ variant, size }), className)} {...props} />
)
