import 'server-only'

import { z } from 'zod'
import { NODE_ENV } from '../constants/env'

const envSchema = z.object({
  NODE_ENV: z.enum(Object.values(NODE_ENV)),
})

export const env = envSchema.parse(import.meta.env)
