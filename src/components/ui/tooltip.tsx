'use client'

import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip'
import { cn } from '../../lib/utils/theme'
import { getUIConfig } from '../../lib/utils/config'
import { inlineVariants } from './typography/inline'
import { useDirection } from '../../lib/hooks/use-direction'

export interface TooltipProviderProps extends TooltipPrimitive.Provider.Props {}

export const TooltipProvider = ({
  delay = getUIConfig().floatingElement.openDelay,
  ...props
}: TooltipProviderProps) => {
  return <TooltipPrimitive.Provider data-slot='tooltip-provider' delay={delay} {...props} />
}

export interface TooltipProps extends TooltipPrimitive.Root.Props {}

export function Tooltip({ ...props }: TooltipProps) {
  return <TooltipPrimitive.Root data-slot='tooltip' {...props} />
}

export interface TooltipTriggerProps extends TooltipPrimitive.Trigger.Props {}

export const TooltipTrigger = ({ ...props }: TooltipTriggerProps) => {
  return <TooltipPrimitive.Trigger data-slot='tooltip-trigger' {...props} />
}

export interface TooltipContentProps
  extends
    TooltipPrimitive.Popup.Props,
    Pick<TooltipPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'> {
  portalContainer?: HTMLElement | null
}

export const TooltipContent = ({
  className,
  side = 'top',
  sideOffset = getUIConfig().floatingElement.offset,
  alignOffset = 0,
  align = 'center',
  portalContainer,
  children,
  ...props
}: TooltipContentProps) => {
  const direction = useDirection()

  return (
    <TooltipPrimitive.Portal container={document.body}>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className='isolate z-50'>
        <TooltipPrimitive.Popup
          data-slot='tooltip-content'
          dir={direction}
          className={cn(
            inlineVariants({ size: 'sm' }),
            'rounded-base bg-tooltip shadow-base text-tooltip z-100 inline-flex w-fit max-w-xs items-center gap-1.5 px-2 py-1.5 leading-none',

            'animate-duration-fast animate-ease-base',
            'data-open:animate-in data-open:fade-in-0 data-open:zoom-in-96',
            'data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-96',

            'data-[side=top]:slide-in-from-bottom-2',
            'data-[side=bottom]:slide-in-from-top-2',
            'data-[side=left]:slide-in-from-right-2',
            'data-[side=right]:slide-in-from-left-2',

            'data-[side=inline-start]:slide-in-from-end-2',
            'data-[side=inline-end]:slide-in-from-start-2',

            className
          )}
          {...props}>
          {children}

          <TooltipPrimitive.Arrow
            className={cn(
              'bg-tooltip size-2 rotate-45 rounded-br-xs',

              'data-[side=top]:-bottom-1',
              'data-[side=bottom]:-top-1',
              'data-[side=left]:-right-1',
              'data-[side=right]:-left-1',

              'data-[side=inline-start]:-inset-e-1',
              'data-[side=inline-end]:-inset-s-1'
            )}
          />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}
