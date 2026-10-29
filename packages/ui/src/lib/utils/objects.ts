export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

export const deepFreeze = <T extends object>(obj: T): Readonly<T> => {
  const frozenObj = Object.freeze(obj)
  for (const name of Object.getOwnPropertyNames(frozenObj)) {
    const value = frozenObj[name as keyof T]
    if (value && typeof value === 'object') {
      deepFreeze(value as object)
    }
  }
  return Object.freeze(obj)
}

export function deepMerge<T>({ target, source }: { target: T; source?: DeepPartial<T> }): T {
  if (!source) {
    return structuredClone(target)
  }

  const output = structuredClone(target)

  for (const [key, sourceValue] of Object.entries(source)) {
    const targetValue = output[key as keyof T]

    if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
      output[key as keyof T] = deepMerge({
        target: targetValue,
        source: sourceValue,
      })
    } else if (sourceValue !== undefined) {
      output[key as keyof T] = sourceValue as T[keyof T]
    }
  }

  return output
}

/**
 * Helper function to throttle a function call similar to lodash's one
 *
 * @returns Throttled function
 */
// biome-ignore lint/suspicious/noExplicitAny: required for generic function constraint. Parameters<T> enforces type safety at callsites
export const throttle = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
  options: { leading?: boolean; trailing?: boolean } = { leading: true, trailing: true }
) => {
  let cooldown = false
  let trailingArgs: Parameters<T> | null = null
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const execute = (...args: Parameters<T>) => {
    fn(...args)
    cooldown = true

    timeoutId = setTimeout(() => {
      cooldown = false
      timeoutId = null

      if (options.trailing && trailingArgs) {
        execute(...trailingArgs)
        trailingArgs = null
      }
    }, delay)
  }

  const throttled = (...args: Parameters<T>) => {
    if (cooldown) {
      if (options.trailing) {
        trailingArgs = args
      }
      return
    }
    if (options.leading !== false) {
      execute(...args)
    }
  }

  throttled.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    cooldown = false
    trailingArgs = null
    timeoutId = null
  }

  throttled.flush = () => {
    if (trailingArgs) {
      fn(...trailingArgs)
      trailingArgs = null
    }
    throttled.cancel()
  }

  return throttled
}
