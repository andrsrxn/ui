import { CSPProvider as BaseCSPProvider, type CSPProviderProps } from '@base-ui/react/csp-provider'
export type { CSPProviderProps, CSPProviderState } from '@base-ui/react/csp-provider'

export const CSPProvider = ({ children, ...props }: CSPProviderProps) => {
  return (
    <BaseCSPProvider disableStyleElements {...props}>
      {children}
    </BaseCSPProvider>
  )
}
