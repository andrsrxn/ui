import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'

export const boldVariants = cva(
  'font-body font-semibold inline-block transition-theme shrink-0 text-primary'
)

export interface BoldProps
  extends ComponentProps<'strong'>, NonNullableVariantProps<typeof boldVariants> {}

export const Bold = ({ className, ...props }: BoldProps) => {
  return <strong data-slot='bold' className={cn(boldVariants(), className)} {...props} />
}
