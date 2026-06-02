export const NODE_ENV = {
  dev: 'development',
  prod: 'production',
  test: 'test',
} as const

export type NodeEnv = (typeof NODE_ENV)[keyof typeof NODE_ENV]
