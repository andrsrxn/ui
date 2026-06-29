import { Slot } from 'radix-ui'
import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'
import { IconChevronRight, IconDownload, IconExternalLink } from '../../icons'

export const linkVariants = cva(
  'focus-visible:outline-2 outline-offset-3 rounded-base font-medium leading-inherit focus-visible:outline-focus hover:text-link-hover text-body-inherit font-body active:scale-98 disabled:disabled duration-faster ease-base decoration-1 underline-offset-2 underline transition-theme',
  {
    variants: {
      full: {
        true: 'text-center inline-flex text-body-base',
      },
      includeIcon: {
        true: 'items-center justify-center gap-1.5 group inline-flex',
      },
      variant: {
        primary: 'text-link',
        secondary: 'text-primary',
        inherit: 'text-inherit',
        inverted: 'text-inverted',
        content: 'text-content',
      },
      unstyled: {
        true: 'no-underline outline-offset-0 rounded-[unset] text-inherit block focus-visible:focus',
      },
      selectable: {
        true: 'text-selectable hover:text-selectable-hover focus-visible:text-selectable-hover',
      },
      selected: {
        true: 'text-selected hover:text-selected focus-visible:text-selected',
      },
      selectedAlt: {
        true: 'text-primary hover:text-primary focus-visible:text-primary',
      },
    },
    defaultVariants: {
      unstyled: false,
      full: false,
      includeIcon: false,
      variant: 'primary',
      selectable: false,
      selected: false,
      selectedAlt: false,
    },
  }
)

export type LinkTarget = '_self' | '_blank' | '_parent' | '_top'

export interface LinkProps
  extends ComponentProps<'a'>, NonNullableVariantProps<typeof linkVariants> {
  target?: LinkTarget
  asChild?: boolean
}

export const Link = ({
  className,
  children,
  full,
  selectable,
  selected,
  selectedAlt,
  asChild = false,
  includeIcon = full ?? false,
  unstyled = false,
  variant = 'primary',
  target = '_self',
  download,
  ...props
}: LinkProps) => {
  const iconColor = variant === 'primary' ? 'text-info' : 'text-inherit'

  const Comp = asChild ? Slot.Root : 'a'

  const RenderLink = (
    <Comp
      data-slot='link'
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      download={download}
      className={cn(
        linkVariants({ full, includeIcon, selectedAlt, selectable, selected, variant, unstyled }),
        className
      )}
      {...props}>
      <Slot.Slottable>{children}</Slot.Slottable>

      {download !== undefined && includeIcon ? (
        <IconDownload className={`size-icon-responsive ${iconColor}`} />
      ) : null}

      {target === '_blank' && download === undefined && includeIcon ? (
        <IconExternalLink className={`size-icon-responsive ${iconColor}`} />
      ) : null}

      {target !== '_blank' && download === undefined && includeIcon ? (
        <IconChevronRight
          className={`size-icon-responsive duration-fast ease-base -ml-0.5 transition-transform group-hover:translate-x-1 ${iconColor}`}
        />
      ) : null}
    </Comp>
  )

  if (full === true) {
    return <div className='flex w-full items-start justify-center'>{RenderLink}</div>
  }

  return RenderLink
}
