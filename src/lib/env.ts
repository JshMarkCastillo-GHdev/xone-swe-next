import { z } from "zod";

const optionalWebhookUrl = z
  .string()
  .optional()
  .transform((value) => {
    if (value === undefined || value.trim() === "") {
      return undefined;
    }
    return value.trim();
  })
  .pipe(z.url().optional());

export const envSchema = z.object({
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(900_000),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(10),
  CONTACT_WEBHOOK_URL: optionalWebhookUrl,
});

export type ServerEnv = z.infer<typeof envSchema>;

export function parseServerEnv(
  source: NodeJS.ProcessEnv = process.env,
): ServerEnv {
  return envSchema.parse(source);
}

export const env = parseServerEnv();
