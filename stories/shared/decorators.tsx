import type { ComponentProps } from 'react'
import { cn } from '../../src/lib/utils/theme'

export const BrandDecorator = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('bg-brand w-full p-4', className)} {...props}>
      {children}
    </div>
  )
}

export const InvertedDecorator = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('dark bg-base p-4', className)} {...props}>
      {children}
    </div>
  )
}
