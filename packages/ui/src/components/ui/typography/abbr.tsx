'use client'

import { cva } from 'class-variance-authority'
import { type ComponentProps, useRef, useState } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'

export const abbrVariants = cva(
  'font-body decoration-2! decoration-dotted cursor-help underline-offset-2 decoration-brand-secondary text-primary shrink-0'
)

export interface AbbrProps
  extends ComponentProps<'abbr'>, NonNullableVariantProps<typeof abbrVariants> {
  title: string
}

export const Abbr = ({
  className,
  title,
  onPointerEnter,
  onPointerLeave,
  onClick,
  ...props
}: AbbrProps) => {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <Tooltip
      open={open}
      onOpenChange={(nextOpen, details) => {
        // Prevent the tooltip from closing when the user clicks on the trigger element, as the trigger is not interactive.
        if (
          details.reason === 'trigger-press' &&
          details.event?.target instanceof Node &&
          triggerRef.current?.contains(details.event.target)
        ) {
          details.event.preventDefault()
          return
        }
        setOpen(nextOpen)
      }}>
      <TooltipTrigger
        ref={triggerRef}
        render={
          // biome-ignore lint/a11y/noStaticElementInteractions: necessary to trigger the tooltip on click on touch devices.
          <abbr
            data-slot='abbr'
            className={cn(abbrVariants({}))}
            title={title}
            onPointerEnter={e => {
              e.currentTarget.title = ''
              onPointerEnter?.(e)
            }}
            onPointerLeave={e => {
              e.currentTarget.title = title
              onPointerLeave?.(e)
            }}
            onClick={e => {
              if (!open) {
                setOpen(true)
              }

              onClick?.(e)
            }}
            {...props}
          />
        }
      />
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  )
}
