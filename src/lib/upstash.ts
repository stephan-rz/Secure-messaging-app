import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: "https://vocal-dogfish-42154.upstash.io",
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

