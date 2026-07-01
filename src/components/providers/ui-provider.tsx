'use client'

import { createContext, useMemo } from 'react'
import { DEFAULT_CONFIG, DEFAULT_LABELS } from '../../lib/constants/components'
import { deepMerge, type DeepPartial } from '../../lib/utils/objects'

type UILabels = typeof DEFAULT_LABELS
type UIConfig = typeof DEFAULT_CONFIG

type UILabelsInput = DeepPartial<UILabels>
type UIConfigInput = DeepPartial<UIConfig>

export interface UIContextProps {
  labels: UILabels
  config: UIConfig
}

export const UIContext = createContext<UIContextProps | undefined>(undefined)

export interface UIProviderProps {
  labels?: UILabelsInput
  config?: UIConfigInput
  children: React.ReactNode
}

export const UIProvider = ({ labels = {}, config = {}, children }: UIProviderProps) => {
  // override default labels and config nested values with provided ones
  const value = useMemo(
    () => ({
      labels: deepMerge({ target: DEFAULT_LABELS, source: labels }),
      config: deepMerge({ target: DEFAULT_CONFIG, source: config }),
    }),
    [labels, config]
  )

  return (
    <UIContext.Provider
      value={{
        config: value.config,
        labels: value.labels,
      }}>
      {children}
    </UIContext.Provider>
  )
}
