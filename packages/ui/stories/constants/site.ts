import { envClient } from '../config/env-client'

export const SITE = {
  baseUrl: envClient.VITE_BASE_URL,
  domain: new URL(envClient.VITE_BASE_URL).hostname,
} as const
