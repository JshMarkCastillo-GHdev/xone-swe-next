import { expect, type Page } from "@playwright/test";

import { completePreflightViaCta } from "./preflight";

export async function assertDesktopNavVisible(page: Page): Promise<void> {
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
}

export async function assertMobileNavHidden(page: Page): Promise<void> {
  await expect(
    page.getByRole("button", { name: /Open navigation menu/i }),
  ).toBeHidden();
}

export async function assertFlexDirection(
  page: Page,
  selector: string,
  expectedRow: boolean,
): Promise<void> {
  const flexDirection = await page.locator(selector).evaluate((el) => {
    return window.getComputedStyle(el).flexDirection;
  });
  const isRow = flexDirection === "row" || flexDirection === "row-reverse";
  if (isRow !== expectedRow) {
    throw new Error(
      `Expected flex-direction ${expectedRow ? "row" : "column"}, got ${flexDirection}`,
    );
  }
}

const DEFAULT_MASKS = ["img", '[data-slot="sheet-overlay"]'];

export async function screenshotPage(
  page: Page,
  name: string,
  maskSelectors: string[] = DEFAULT_MASKS,
): Promise<void> {
  const masks = maskSelectors.map((sel) => page.locator(sel));
  await expect(page).toHaveScreenshot(`${name}.png`, {
    fullPage: true,
    mask: masks,
  });
}

export async function visitHomeWithPreflight(page: Page): Promise<void> {
  await page.goto("/");
  await completePreflightViaCta(page);
  await page.waitForLoadState("domcontentloaded");
}
