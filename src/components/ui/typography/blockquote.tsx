import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/utils/theme'
import { Text, type TextProps } from './text'
import { Figure } from './figure'

export const blockquoteVariants = cva(
  'relative my-4 border-s-3 border-brand-secondary ps-4 max-w-prose transition-theme'
)

export interface BlockquoteProps extends ComponentProps<'blockquote'> {}

export const Blockquote = ({ className, ...props }: BlockquoteProps) => (
  <Figure>
    <blockquote data-slot='blockquote' className={cn(blockquoteVariants(), className)} {...props} />
  </Figure>
)

export interface BlockquoteTextProps extends Omit<TextProps, 'variant'> {}

export const BlockquoteText = ({
  className,
  size = 'lg',
  desktop = 'xl',
  ...props
}: BlockquoteTextProps) => (
  <Text
    data-slot='blockquote-text'
    size={size}
    desktop={desktop}
    className={cn('font-semibold italic', className)}
    {...props}
  />
)

export interface BlockquoteCiteProps extends ComponentProps<'cite'> {}

export const BlockquoteFooter = ({ className, children, ...props }: BlockquoteCiteProps) => {
  return (
    <footer
      data-slot='blockquote-cite'
      className={cn(
        'text-body-sm text-secondary transition-theme tablet:text-body-base mt-2 block normal-case not-italic',
        className
      )}
      {...props}>
      — {children}
    </footer>
  )
}
