import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'

export const highlightVariants = cva(
  'shrink-0 font-body bg-selected-subtle text-selected transition-theme box-decoration-slice selection:bg-selected-subtle-hover'
)

export interface HighlightProps
  extends ComponentProps<'mark'>, NonNullableVariantProps<typeof highlightVariants> {}

export const Highlight = ({ className, ...props }: HighlightProps) => (
  <mark data-slot='highlight' className={cn(highlightVariants(), className)} {...props} />
)
