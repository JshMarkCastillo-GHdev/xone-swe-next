export type HealthPayload = {
  success: true;
  status: "ok";
  timestamp: string;
};

export function createHealthPayload(now: Date = new Date()): HealthPayload {
  return {
    success: true,
    status: "ok",
    timestamp: now.toISOString(),
  };
}
