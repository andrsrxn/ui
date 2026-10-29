import { type RenderOptions, type RenderResult, render } from '@testing-library/react'
import type { ReactElement } from 'react'
import { UIProvider } from '../../src/components/providers/ui-provider'

const Providers = ({ children }: { children: React.ReactNode }) => (
  <UIProvider>{children}</UIProvider>
)

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: Providers, ...options })

// biome-ignore lint/performance/noBarrelFile: re export with custom render
// biome-ignore lint/performance/noReExportAll: re export with custom render
export * from '@testing-library/react'

export { renderWithProviders as render }
