import { useContext } from 'react'
import { UIContext } from '../../components/providers/ui-provider'

export function useUI() {
  const context = useContext(UIContext)

  if (!context) {
    throw new Error('useUI must be used within UIProvider')
  }

  return context
}
