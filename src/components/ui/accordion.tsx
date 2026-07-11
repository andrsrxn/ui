import type { ComponentProps } from 'react'
import { cn } from '../../lib/utils/theme'
import { labelVariants, type LabelProps } from './typography/label'
import { IconPlus } from '../icons'
import { Text, type TextProps } from './typography/text'
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'

interface AccordionProps extends AccordionPrimitive.Root.Props {
  variant?: 'base' | 'surface'
}

export const Accordion = ({ variant = 'base', className, ...props }: AccordionProps) => (
  <AccordionPrimitive.Root
    data-slot='accordion'
    {...props}
    className={cn(
      variant === 'base' && '[&_h3>button:hover]:bg-base-hover [&_h3>button]:bg-base',
      variant === 'surface' && '[&_h3>button:hover]:bg-surface-hover [&_h3>button]:bg-surface',
      className
    )}
  />
)

export const AccordionItem = ({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    data-slot='accordion-item'
    className={cn(
      'transition-theme border-b',

      className
    )}
    {...props}
  />
)

export const AccordionTrigger = ({
  className,
  children,
  desktop = 'lg',
  display,
  laptop,
  size,
  tablet,
  ...props
}: AccordionPrimitive.Trigger.Props & LabelProps) => (
  <AccordionPrimitive.Header
    className={cn(
      labelVariants({ desktop, display, laptop, size, tablet }),
      'group/accordion-trigger w-full'
    )}>
    <AccordionPrimitive.Trigger
      data-slot='accordion-trigger'
      className={cn(
        'outline-focus transition-theme hover:duration-none duration-fastest ease-base aria-disabled:disabled flex h-12 w-full flex-1 cursor-pointer items-center justify-between gap-2 px-3 text-left focus-visible:outline-2',
        className
      )}
      {...props}>
      {children}
      <IconPlus className='size-icon-responsive text-brand duration-base transition-transform group-data-open/accordion-trigger:rotate-135' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

export const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) => (
  <AccordionPrimitive.Panel
    data-slot='accordion-content'
    className='data-open:animate-accordion-down data-closed:animate-accordion-up group/accordion-panel overflow-hidden will-change-transform'
    {...props}>
    <div
      className={cn(
        'animate-fade-in animate-delay-100 grid h-(--accordion-panel-height) gap-2 px-3 pt-1 pb-4 opacity-0',
        'group-data-closed/accordion-panel:animate-fade-out group-data-closed/accordion-panel:animate-duration-fastest',
        className
      )}>
      {children}
    </div>
  </AccordionPrimitive.Panel>
)

export const AccordionContentText = ({ children, ...props }: TextProps) => (
  <Text variant='secondary' data-slot='accordion-content-text' {...props}>
    {children}
  </Text>
)
