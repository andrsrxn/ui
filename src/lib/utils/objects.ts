export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
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
