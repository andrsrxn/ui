import type { ComponentProps } from 'react'
import { Text } from './text'
import { cn } from '../../../lib/utils/theme'
import { IconInfo } from '../../icons'

export interface FigureProps extends ComponentProps<'figure'> {
  center?: boolean
}

export const Figure = ({ className, center = false, ...props }: FigureProps) => (
  <figure
    data-slot='figure'
    className={cn(
      'my-4 flex flex-col gap-3',
      center === true && 'w-fit items-center *:data-[slot=figure-caption]:justify-center',
      className
    )}
    {...props}
  />
)

export interface FigureCaptionProps extends ComponentProps<'figcaption'> {}

export const FigureCaption = ({ className, children, ...props }: FigureCaptionProps) => (
  <figcaption
    data-slot='figure-caption'
    className={cn('flex w-fit items-start gap-1', className)}
    {...props}>
    <IconInfo className='text-secondary size-icon-responsive text-body-sm desktop:text-body-base h-lh' />

    <Text desktop='base' size='sm' variant='secondary' className='flex-1'>
      {children}
    </Text>
  </figcaption>
)
