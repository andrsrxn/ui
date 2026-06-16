import { describe, it, expect } from 'vitest'
import { isProductionEnv, isDevelopmentEnv, isTestEnv } from '../../src/lib/utils/env'

describe('env utils', () => {
  it('isProductionEnv returns true for production', () => {
    expect(isProductionEnv('production')).toBe(true)
    expect(isProductionEnv('development')).toBe(false)
  })

  it('isDevelopmentEnv returns true for development', () => {
    expect(isDevelopmentEnv('development')).toBe(true)
    expect(isDevelopmentEnv('production')).toBe(false)
  })

  it('isTestEnv returns true for test', () => {
    expect(isTestEnv('test')).toBe(true)
    expect(isTestEnv('development')).toBe(false)
  })
})
