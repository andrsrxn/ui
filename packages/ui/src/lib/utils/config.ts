/** biome-ignore-all lint/correctness/noProcessGlobal: only read once */
/** biome-ignore-all lint/style/noProcessEnv: only read once */

import { DEFAULT_CONFIG, DEFAULT_LABELS } from '../constants/components'
import { type DeepPartial, deepFreeze, deepMerge } from './objects'

export type UILabels = typeof DEFAULT_LABELS
export type UIConfig = typeof DEFAULT_CONFIG

let labels: Readonly<UILabels> = DEFAULT_LABELS
let config: Readonly<UIConfig> = DEFAULT_CONFIG
let configured = false

export const configure = ({
  labels: labelsInput,
  config: configInput,
}: {
  labels?: DeepPartial<UILabels>
  config?: DeepPartial<UIConfig>
}) => {
  if (configured) {
    if (process.env.NODE_ENV === 'development') {
      // biome-ignore lint/suspicious/noConsole: only in dev
      console.warn('UI configure() called more than once. Configuration ignored.')
    }
    return
  }

  if (labelsInput && Object.keys(labelsInput).length > 0) {
    labels = deepFreeze(deepMerge({ target: DEFAULT_LABELS, source: labelsInput }))
  }

  if (configInput && Object.keys(configInput).length > 0) {
    config = deepFreeze(deepMerge({ target: DEFAULT_CONFIG, source: configInput }))
  }

  configured = true
}

export const getUILabels = () => labels
export const getUIConfig = () => config
export const getComponentLabels = <K extends keyof UILabels>(key: K) => labels[key]
export const getComponentConfig = <K extends keyof UIConfig>(key: K) => config[key]

// For testing porpuses
export const _resetConfig = () => {
  if (process.env.NODE_ENV !== 'test') {
    return
  }
  labels = DEFAULT_LABELS
  config = DEFAULT_CONFIG
  configured = false
}
