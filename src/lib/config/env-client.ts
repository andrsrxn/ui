import * as z from 'zod'

const envSchema = z.object({
  VITE_BASE_URL: z.url(),
})

export const envClient = envSchema.parse(import.meta.env)
