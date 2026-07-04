import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/utils/theme'
import { Text, type TextProps } from './text'

export const blockquoteVariants = cva(
  'relative my-4 border-s-3 border-brand ps-4 max-w-prose transition-theme'
)

export interface BlockquoteProps
  extends
    ComponentProps<'blockquote'>,
    Pick<TextProps, 'size' | 'tablet' | 'laptop' | 'desktop' | 'display'> {}

export const Blockquote = ({
  className,
  size = 'lg',
  tablet = 'xl',
  laptop,
  desktop,
  display,
  children,
  ...props
}: BlockquoteProps) => (
  <blockquote data-slot='blockquote' className={cn(blockquoteVariants(), className)} {...props}>
    <Text
      size={size}
      tablet={tablet}
      laptop={laptop}
      desktop={desktop}
      display={display}
      className='font-semibold italic'>
      {children}
    </Text>
  </blockquote>
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
