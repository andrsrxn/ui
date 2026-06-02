import type { VariantProps } from 'class-variance-authority'

type ExcludeNull<T> = { [P in keyof T]: Exclude<T[P], null> }

export type NonNullableVariantProps<Comp extends (...args: never) => unknown> = ExcludeNull<
  VariantProps<Comp>
>
