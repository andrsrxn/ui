import { IconInfo } from '@andrsrxn/icons'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/utils/theme'
import { Text, type TextProps } from './text'

export interface FigureProps extends ComponentProps<'figure'> {
  center?: boolean
}

export const Figure = ({ className, center = false, ...props }: FigureProps) => (
  <figure
    data-slot='figure'
    className={cn(
      'flex flex-col gap-3',
      center === true && 'w-fit items-center *:data-[slot=figure-caption]:justify-center',
      className
    )}
    {...props}
  />
)

export interface FigureCaptionProps
  extends
    ComponentProps<'figcaption'>,
    Pick<TextProps, 'size' | 'tablet' | 'laptop' | 'desktop' | 'display'> {
  includeIcon?: boolean
}

export const FigureCaption = ({
  className,
  desktop = 'base',
  size = 'sm',
  tablet,
  laptop,
  display,
  children,
  includeIcon = true,
  ...props
}: FigureCaptionProps) => (
  <figcaption
    data-slot='figure-caption'
    className={cn('flex w-fit items-start gap-1', className)}
    {...props}>
    {includeIcon ? (
      <IconInfo className='text-secondary size-icon-responsive text-body-sm desktop:text-body-base h-lh' />
    ) : null}

    <Text
      desktop={desktop}
      display={display}
      size={size}
      tablet={tablet}
      laptop={laptop}
      variant='secondary'
      className='flex-1'>
      {children}
    </Text>
  </figcaption>
)
