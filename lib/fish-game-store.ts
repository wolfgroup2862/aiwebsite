import { Redis } from "@upstash/redis";
import type { FishSceneKey } from "./fish-game-scenes";

export type FishSubmission = {
  id: string;
  name: string;
  createdAt: string;
} & Record<FishSceneKey, string>;

const STORE_KEY = "fish-game:submissions";
const MAX_SUBMISSIONS = 500;

// Vercel's "Upstash Redis" marketplace integration exposes either naming
// depending on when it was added to the project, so we check both.
const redisUrl = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = redisUrl && redisToken ? new Redis({ url: redisUrl, token: redisToken }) : null;

// Fallback used only when no Redis database is connected (e.g. local dev).
// It does not persist across server restarts or separate serverless invocations.
const memoryStore: FishSubmission[] = [];

export function isPersistenceConfigured(): boolean {
  return redis !== null;
}

export async function addSubmission(
  answers: Record<FishSceneKey, string> & { name: string }
): Promise<FishSubmission> {
  const submission: FishSubmission = {
    ...answers,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  if (redis) {
    await redis.lpush(STORE_KEY, submission);
    await redis.ltrim(STORE_KEY, 0, MAX_SUBMISSIONS - 1);
  } else {
    memoryStore.unshift(submission);
    memoryStore.length = Math.min(memoryStore.length, MAX_SUBMISSIONS);
  }

  return submission;
}

export async function getSubmissions(): Promise<FishSubmission[]> {
  if (redis) {
    return redis.lrange<FishSubmission>(STORE_KEY, 0, MAX_SUBMISSIONS - 1);
  }
  return memoryStore;
}
