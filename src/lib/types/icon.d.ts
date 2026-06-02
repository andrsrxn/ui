import type { ComponentProps } from 'react'

export interface IconProps extends ComponentProps<'svg'> {}

export type Icon = (props: IconProps) => JSX.Element
