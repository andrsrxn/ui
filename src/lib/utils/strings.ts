const NON_ALPHANUMERIC_REGEX = /[^a-z0-9-]/gu
const MULTIPLE_DASHES_REGEX = /-+/gu
const LEADING_DASHES_REGEX = /^-+/u
const TRAILING_DASHES_REGEX = /-+$/u

const CHAR_REPLACEMENTS = {
  '\u00E4': 'ae', // ä
  '\u00F6': 'oe', // ö
  '\u00FC': 'ue', // ü
  '\u00DF': 'ss', // ß
  '\u00E6': 'ae', // æ
  '\u0153': 'oe', // œ
  '\u00F8': 'o', // ø
  '\u00E7': 'c', // ç
  '\u00F1': 'n', // ñ
  '\u0142': 'l', // ł
  '\u00FE': 'th', // þ
  '\u00F0': 'd', // ð
} as const

const replaceSpecialChars = (text: string): string => {
  let output = text
  console.log(output)

  for (const [char, replacement] of Object.entries(CHAR_REPLACEMENTS)) {
    output = output.replace(new RegExp(char, 'gu'), replacement)
  }
  return output
}

/**
 * Generates a clean, URL-friendly slug from a text string.
 * This is crucial for creating readable and accessible URLs for content
 * such as documentation articles, blog posts, or resource names within the platform.
 * It handles special characters, diacritics, and ensures proper separation using hyphens.
 */
export const slugify = (text: string) => {
  // biome-ignore lint/style/noMagicNumbers: max length
  const slugFallback = Math.random().toString(36).slice(2, 9)

  if (!text) {
    return slugFallback
  }

  const slug = replaceSpecialChars(text)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/gu, '')
    .trim()
    .replace(NON_ALPHANUMERIC_REGEX, '-')
    .replace(MULTIPLE_DASHES_REGEX, '-')
    .replace(LEADING_DASHES_REGEX, '')
    .replace(TRAILING_DASHES_REGEX, '')

  return slug || `slug-${slugFallback}`
}
