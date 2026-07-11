import type { ReactNode } from 'react'
import { CSPProvider } from './csp-provider'
import { DirectionProvider, type TextDirection } from './direction-provider'

export const UIProvider = ({ children, dir }: { children: ReactNode; dir?: TextDirection }) => {
  return (
    <CSPProvider>
      <DirectionProvider direction={dir}>{children}</DirectionProvider>
    </CSPProvider>
  )
}
