import { SITE } from '../constants/site'

const safeValue = (value: number): number => (Number.isFinite(value) ? value : 0)

export const formatNumber = (value: number) => {
  const cleanValue = safeValue(value)

  return new Intl.NumberFormat(SITE.locale, {
    style: 'decimal',
    useGrouping: true,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(cleanValue)
}

export const formatCurrency = (value: number): string => {
  const cleanValue = safeValue(value)

  return new Intl.NumberFormat(SITE.locale, {
    currency: SITE.currency,
    currencySign: 'accounting',
    style: 'currency',
    currencyDisplay: 'code',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cleanValue)
}
