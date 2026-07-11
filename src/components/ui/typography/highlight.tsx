import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'

export const highlightVariants = cva(
  'shrink-0 font-body bg-details text-details transition-theme box-decoration-slice selection:bg-details-hover'
)

export interface HighlightProps
  extends ComponentProps<'mark'>, NonNullableVariantProps<typeof highlightVariants> {}

export const Highlight = ({ className, ...props }: HighlightProps) => (
  <mark data-slot='highlight' className={cn(highlightVariants(), className)} {...props} />
)
