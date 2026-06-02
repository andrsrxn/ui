export const capitalizeFirstLetter = (str: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : ''

export const capitalizeAllWords = (str: string) =>
  str ? str.split(' ').map(capitalizeFirstLetter).join(' ') : ''
