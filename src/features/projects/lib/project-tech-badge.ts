/** Pastel badge styles per tech tag — stable colors for portfolio chips. */

const EXPLICIT_TAG_STYLES: Record<string, string> = {
  "Node.js": "border-sky-200/90 bg-sky-100 text-sky-900",
  Express: "border-indigo-200/90 bg-indigo-100 text-indigo-900",
  MongoDB: "border-emerald-200/90 bg-emerald-100 text-emerald-900",
  React: "border-cyan-200/90 bg-cyan-100 text-cyan-900",
  "Tailwind CSS": "border-teal-200/90 bg-teal-100 text-teal-900",
  Python: "border-amber-200/90 bg-amber-100 text-amber-950",
  WebSocket: "border-violet-200/90 bg-violet-100 text-violet-900",
  JWT: "border-rose-200/90 bg-rose-100 text-rose-900",
  "Raspberry Pi": "border-orange-200/90 bg-orange-100 text-orange-950",
  Arduino: "border-lime-200/90 bg-lime-100 text-lime-950",
  Flutter: "border-fuchsia-200/90 bg-fuchsia-100 text-fuchsia-900",
  ESP32: "border-blue-200/90 bg-blue-100 text-blue-900",
  Bluetooth: "border-sky-200/90 bg-sky-50 text-sky-800",
  "Wi-Fi": "border-indigo-200/90 bg-indigo-50 text-indigo-800",
  "Voice control": "border-pink-200/90 bg-pink-100 text-pink-900",
  "Machine learning": "border-purple-200/90 bg-purple-100 text-purple-900",
  "React Native": "border-cyan-200/90 bg-cyan-50 text-cyan-900",
  "Offline-first": "border-emerald-200/90 bg-emerald-50 text-emerald-900",
  Zod: "border-violet-200/90 bg-violet-50 text-violet-900",
  Webhooks: "border-amber-200/90 bg-amber-50 text-amber-900",
  TypeScript: "border-blue-200/90 bg-blue-50 text-blue-900",
  "Next.js": "border-slate-200/90 bg-slate-100 text-slate-900",
  "shadcn/ui": "border-violet-200/90 bg-violet-50 text-violet-900",
  Vitest: "border-cyan-200/90 bg-cyan-50 text-cyan-900",
  Playwright: "border-emerald-200/90 bg-emerald-50 text-emerald-900",
  Jest: "border-rose-200/90 bg-rose-50 text-rose-900",
  Vercel: "border-slate-200/90 bg-slate-100 text-slate-800",
  Base44: "border-violet-200/90 bg-violet-100 text-violet-900",
  Prototype: "border-amber-200/90 bg-amber-50 text-amber-900",
  "Web app": "border-sky-200/90 bg-sky-50 text-sky-900",
  Mockup: "border-pink-200/90 bg-pink-50 text-pink-900",
  Restaurant: "border-orange-200/90 bg-orange-50 text-orange-950",
  PostgreSQL: "border-blue-200/90 bg-blue-50 text-blue-950",
};

const PASTEL_FALLBACK_PALETTE = [
  "border-violet-200/90 bg-violet-100 text-violet-900",
  "border-sky-200/90 bg-sky-100 text-sky-900",
  "border-emerald-200/90 bg-emerald-100 text-emerald-900",
  "border-amber-200/90 bg-amber-100 text-amber-950",
  "border-rose-200/90 bg-rose-100 text-rose-900",
  "border-teal-200/90 bg-teal-100 text-teal-900",
  "border-fuchsia-200/90 bg-fuchsia-100 text-fuchsia-900",
  "border-orange-200/90 bg-orange-100 text-orange-950",
] as const;

function hashTag(label: string): number {
  let hash = 0;
  for (let index = 0; index < label.length; index += 1) {
    hash = (hash << 5) - hash + label.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getProjectTagClassName(tag: string): string {
  const explicit = EXPLICIT_TAG_STYLES[tag];
  if (explicit) {
    return explicit;
  }

  const paletteIndex = hashTag(tag) % PASTEL_FALLBACK_PALETTE.length;
  return PASTEL_FALLBACK_PALETTE[paletteIndex] ?? PASTEL_FALLBACK_PALETTE[0];
}
