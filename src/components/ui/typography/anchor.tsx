import { cva } from 'class-variance-authority'
import type { ComponentProps, ReactElement } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'
import { IconChevronEnd, IconDownload, IconExternalLink } from '@andrsrxn/icons'
import { useRender } from '@base-ui/react'

export const linkVariants = cva(
  'focus-visible:outline-2 outline-offset-3 rounded-base font-medium leading-inherit focus-visible:outline-focus text-body-inherit font-body active:scale-98 disabled:disabled duration-fastest ease-base decoration-1 underline-offset-2 underline transition-theme',
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
        content: 'text-content',
      },
      unstyled: {
        true: 'decoration-0 no-underline outline-offset-0 rounded-[unset] text-inherit block focus-visible:focus',
      },
      selectable: {
        true: 'text-selectable hover:text-selectable-hover focus-visible:text-selectable-hover',
      },
      selected: {
        true: 'text-selected hover:text-selected focus-visible:text-selected',
      },
      selectedSubtle: {
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
      selectedSubtle: false,
    },
  }
)

export type LinkTarget = '_self' | '_blank' | '_parent' | '_top'

export interface LinkProps
  extends ComponentProps<'a'>, NonNullableVariantProps<typeof linkVariants> {
  target?: LinkTarget
  render?: ReactElement
}

export const Anchor = ({
  className,
  children,
  full,
  selectable,
  selected,
  selectedSubtle,
  includeIcon = full ?? false,
  unstyled = false,
  variant = 'primary',
  target = '_self',
  download,
  render,
  ...props
}: LinkProps) => {
  const icons = (
    <>
      {download !== undefined && includeIcon && (
        <IconDownload className='size-icon-responsive text-inherit' />
      )}
      {target === '_blank' && download === undefined && includeIcon && (
        <IconExternalLink className='size-icon-responsive text-inherit' />
      )}
      {target !== '_blank' && download === undefined && includeIcon && (
        <IconChevronEnd
          className={cn(
            'size-icon-responsive duration-fast ease-base -ms-0.5 text-inherit',
            'transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1'
          )}
        />
      )}
    </>
  )

  const element = useRender({
    defaultTagName: 'a',
    render,
    props: {
      'data-slot': 'anchor',
      target,
      rel: target === '_blank' ? 'noopener noreferrer' : undefined,
      download,
      className: cn(
        linkVariants({
          full,
          includeIcon,
          selectedSubtle,
          selectable,
          selected,
          variant,
          unstyled,
        }),
        className
      ),
      children: (
        <>
          {children}
          {icons}
        </>
      ),
      ...props,
    },
  })

  if (full === true) {
    return <div className='flex w-full items-start justify-center'>{element}</div>
  }

  return element
}
