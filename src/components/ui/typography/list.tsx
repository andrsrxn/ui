import { cva } from 'class-variance-authority'
import { type ComponentProps, createElement } from 'react'
import { cn, type NonNullableVariantProps } from '../../../lib/utils/theme'
import { Label } from './label'

export const listVariants = cva(
  'text-pretty transition-theme font-body max-w-prose ps-4 grid gap-2',
  {
    variants: {
      variant: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        inverted: 'text-inverted',
        content: 'text-content',
      },
      nested: {
        true: 'text-body-inherit tablet:text-body-inherit laptop:text-body-inherit desktop:text-body-inherit display:text-body-inherit text-inherit mt-1',
      },
      ordered: {
        true: 'list-decimal',
        false: 'list-disc',
      },
      size: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
      },
      tablet: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
      },
      laptop: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
      },
      desktop: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
      },
      display: {
        xs: true,
        sm: true,
        base: true,
        lg: true,
        xl: true,
      },
    },
    compoundVariants: [
      {
        size: 'xs',
        className: 'text-body-xs',
      },
      {
        size: 'sm',
        className: 'text-body-sm',
      },
      {
        size: 'base',
        className: 'text-body-base',
      },
      {
        size: 'lg',
        className: 'text-body-lg',
      },
      {
        size: 'xl',
        className: 'text-body-xl',
      },

      {
        tablet: 'xs',
        className: 'tablet:text-body-xs',
      },
      {
        tablet: 'sm',
        className: 'tablet:text-body-sm',
      },
      {
        tablet: 'base',
        className: 'tablet:text-body-base',
      },
      {
        tablet: 'lg',
        className: 'tablet:text-body-lg',
      },
      {
        tablet: 'xl',
        className: 'tablet:text-body-xl',
      },

      {
        laptop: 'xs',
        className: 'laptop:text-body-xs',
      },
      {
        laptop: 'sm',
        className: 'laptop:text-body-sm',
      },
      {
        laptop: 'base',
        className: 'laptop:text-body-base',
      },
      {
        laptop: 'lg',
        className: 'laptop:text-body-lg',
      },
      {
        laptop: 'xl',
        className: 'laptop:text-body-xl',
      },

      {
        desktop: 'xs',
        className: 'desktop:text-body-xs',
      },
      {
        desktop: 'sm',
        className: 'desktop:text-body-sm',
      },
      {
        desktop: 'base',
        className: 'desktop:text-body-base',
      },
      {
        desktop: 'lg',
        className: 'desktop:text-body-lg',
      },
      {
        desktop: 'xl',
        className: 'desktop:text-body-xl',
      },

      {
        display: 'xs',
        className: 'display:text-body-xs',
      },
      {
        display: 'sm',
        className: 'display:text-body-sm',
      },
      {
        display: 'base',
        className: 'display:text-body-base',
      },
      {
        display: 'lg',
        className: 'display:text-body-lg',
      },
      {
        display: 'xl',
        className: 'display:text-body-xl',
      },
    ],
    defaultVariants: {
      nested: false,
      ordered: false,
      size: 'base',
      variant: 'primary',
    },
  }
)

export interface ListProps
  extends ComponentProps<'ul'>, NonNullableVariantProps<typeof listVariants> {}

export const List = ({
  className,
  desktop,
  display,
  nested,
  laptop,
  ordered,
  variant,
  size,
  tablet,
  children,
  ...props
}: ListProps) => {
  // biome-ignore lint/correctness/noNestedComponentDefinitions: component generated based on props
  // biome-ignore lint/nursery/noComponentHookFactories: component generated based on props
  const Tag = ({ ...props }) => createElement(ordered === true ? 'ol' : 'ul', props, children)

  return (
    <Tag
      data-slot='list'
      className={cn(
        listVariants({
          desktop,
          display,
          nested,
          laptop,
          ordered,
          variant,
          size,
          tablet,
        }),
        className
      )}
      {...props}>
      {children}
    </Tag>
  )
}

export interface ListItemProps extends ComponentProps<'li'> {
  label?: string
}

export const ListItem = ({ className, children, label, ...props }: ListItemProps) => (
  <li
    data-slot='list-item'
    className={cn('marker:text-details-subtle list-outside', className)}
    {...props}>
    {label === undefined ? null : <Label data-slot='list-item-label'>{label}: </Label>}
    {children}
  </li>
)
