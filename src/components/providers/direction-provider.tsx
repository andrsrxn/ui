import {
  DirectionProvider as BaseDirectionProvider,
  type DirectionProviderProps,
} from '@base-ui/react/direction-provider'

export const DirectionProvider = ({ children, ...props }: DirectionProviderProps) => {
  return <BaseDirectionProvider {...props}>{children}</BaseDirectionProvider>
}

export type { DirectionProviderProps, TextDirection } from '@base-ui/react/direction-provider'
