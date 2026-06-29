import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import type { VariantProps } from 'class-variance-authority'

type ExcludeNull<T> = { [P in keyof T]: Exclude<T[P], null> }

/**
 * Removes null from CVA variants to accept only undefined
 */
export type NonNullableVariantProps<Comp extends (...args: never) => unknown> = ExcludeNull<
  VariantProps<Comp>
>

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      breakpoint: ['mobile-sm', 'mobile-md', 'tablet', 'laptop', 'desktop', 'display'],
      spacing: [
        'icon-xs',
        'icon-sm',
        'icon-base',
        'icon-lg',
        'icon-xl',
        'icon-2xl',
        'icon-3xl',
        'icon-4xl',
        'icon-5xl',
        'icon-responsive',
        '3xs',
        '2xs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
      ],
      font: ['heading', 'label', 'body', 'mono', 'inherit'],
      text: [
        'body-inherit',
        'body-xs',
        'body-sm',
        'body-base',
        'body-lg',
        'body-xl',
        'label-xs',
        'label-sm',
        'label-base',
        'label-lg',
        'label-xl',
        'label-2xl',
        'label-3xl',
        'label-4xl',
        'heading-6-sm',
        'heading-6-base',
        'heading-5-sm',
        'heading-5-base',
        'heading-4-sm',
        'heading-4-base',
        'heading-3-sm',
        'heading-3-base',
        'heading-2-sm',
        'heading-2-base',
        'heading-2-display-sm',
        'heading-2-display-base',
        'heading-1-sm',
        'heading-1-base',
        'heading-1-display-sm',
        'heading-1-display-base',
      ],
      'font-weight': ['normal', 'regular', 'medium', 'semibold', 'bold', 'extrabold'],
      radius: ['sm', 'base', 'lg'],
      shadow: ['2xl', 'xl', 'lg', 'base', 'sm', 'xs', 'inner'],
      'drop-shadow': ['2xl', 'xl', 'lg', 'base', 'sm', 'xs'],
      'text-shadow': ['sm', 'base', 'lg'],
      leading: ['xs', 'sm', 'base'],
      tracking: ['heading'],
      ease: ['linear', 'base', 'out', 'elastic'],
      animate: ['collapsible-down', 'collapsible-up', 'accordion-down', 'accordion-up', 'shake'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
