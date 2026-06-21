import type { Page } from "@playwright/test";

/** Dismiss homepage preflight by clicking through the full CTA path (no env bypass). */
export async function completePreflightViaCta(page: Page): Promise<void> {
  const dialog = page.getByRole("dialog");
  await dialog.waitFor({ state: "visible", timeout: 15_000 });

  const cta = page.getByRole("button", { name: /Start Building with XONE/i });
  await cta.waitFor({ state: "visible", timeout: 25_000 });
  await cta.click();

  await page
    .getByRole("button", { name: /Starting/i })
    .waitFor({ state: "visible" })
    .catch(() => {});

  await dialog.waitFor({ state: "hidden", timeout: 10_000 });
}
