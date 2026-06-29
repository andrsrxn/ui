export const capitalizeFirstLetter = (str: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : ''

export const capitalizeAllWords = (str: string) =>
  str ? str.split(' ').map(capitalizeFirstLetter).join(' ') : ''

const NON_ALPHANUMERIC_REGEX = /[^a-z0-9-]/gu
const MULTIPLE_DASHES_REGEX = /--+/gu
const LEADING_DASHES_REGEX = /^-+/u
const TRAILING_DASHES_REGEX = /-+$/u

const CHAR_REPLACEMENTS: Record<string, string> = {
  '\u00E4': 'ae', // ä
  '\u00F6': 'oe', // ö
  '\u00FC': 'ue', // ü
  '\u00DF': 'ss', // ß
  '\u00F1': 'n', // ñ
  '\u00E7': 'c', // ç
  '\u00E6': 'ae', // æ
  '\u0153': 'oe', // œ
}

const replaceSpecialChars = (text: string): string => {
  let output = text
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
export const slugify = ({ text, locale }: { text: string; locale?: string }): string => {
  if (!text) {
    return ''
  }

  let slug = replaceSpecialChars(text)

  slug = slug
    .toLocaleLowerCase(locale)
    .normalize('NFKD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/gu, '') // Remove accented characters
    .trim() // Remove leading/trailing spaces

  slug = slug
    .replace(NON_ALPHANUMERIC_REGEX, '-') // Replace non-alphanumeric characters with hyphens
    .replace(MULTIPLE_DASHES_REGEX, '-') // Replace multiple hyphens with a single hyphen
    .replace(LEADING_DASHES_REGEX, '') // Remove leading hyphens
    .replace(TRAILING_DASHES_REGEX, '') // Remove trailing hyphens

  return slug || `slug-${crypto.randomUUID()}`
}
