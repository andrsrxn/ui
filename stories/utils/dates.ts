import { TZDate } from '@date-fns/tz'
import { format, formatDistance, differenceInDays } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import { SITE } from '../constants/site'

export const formatDate = ({
  date,
  includeWeekDay,
  includeTime,
}: {
  includeWeekDay?: boolean
  date: string | Date
  includeTime?: boolean
}) => {
  const formatString = includeWeekDay ? 'EEEE, PP' : 'PP'
  const timezonedDate = new TZDate(
    typeof date === 'string' ? date : date.toISOString(),
    SITE.timeZone
  )
  const formatted = format(timezonedDate, includeTime ? `${formatString}, p` : formatString, {
    locale: enUS,
  })
  return formatted
}

export const formatRelativeTime = ({
  date,
  includeWeekDay,
  includeTime,
  baseDate = new Date(),
  thresholdInDays = 7,
}: {
  date: string | Date
  includeWeekDay?: boolean
  includeTime?: boolean
  baseDate?: string | Date
  thresholdInDays?: number
}) => {
  const targetDate = new TZDate(typeof date === 'string' ? date : date.toISOString(), SITE.timeZone)
  const base = new TZDate(
    typeof baseDate === 'string' ? baseDate : baseDate.toISOString(),
    SITE.timeZone
  )

  const daysDiff = Math.abs(differenceInDays(base, targetDate))

  if (daysDiff > thresholdInDays) {
    return formatDate({ date, includeWeekDay, includeTime })
  }

  return formatDistance(targetDate, base, { addSuffix: true, locale: enUS })
}
