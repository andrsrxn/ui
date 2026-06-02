import { NODE_ENV } from '../constants/env'

export const isProductionEnv = (env: string) => {
  return env === NODE_ENV.prod
}

export const isDevelopmentEnv = (env: string) => {
  return env === NODE_ENV.dev
}

export const isTestEnv = (env: string) => {
  return env === NODE_ENV.test
}
