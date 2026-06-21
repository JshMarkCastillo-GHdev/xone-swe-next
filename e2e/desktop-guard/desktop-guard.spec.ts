import { expect, test } from "@playwright/test";

import {
  assertDesktopNavVisible,
  assertFlexDirection,
  assertMobileNavHidden,
  screenshotPage,
  visitHomeWithPreflight,
} from "../fixtures/desktop";

test.describe("desktop layout guard", () => {
  test("primary nav visible and mobile menu hidden", async ({ page }) => {
    await visitHomeWithPreflight(page);

    await assertDesktopNavVisible(page);
    await assertMobileNavHidden(page);
  });

  test("home hero CTA row layout at desktop", async ({ page }) => {
    await visitHomeWithPreflight(page);

    const heroCtaGroup = page.locator(
      'section[aria-labelledby="home-hero-heading"] div.mt-8',
    );
    await assertFlexDirection(page, 'section[aria-labelledby="home-hero-heading"] div.mt-8', true);
    await expect(heroCtaGroup).toBeVisible();
  });

  test("featured projects grid has 3 columns at lg", async ({ page }) => {
    await visitHomeWithPreflight(page);

    const grid = page.locator(
      'section[aria-labelledby="featured-projects-heading"] ul.grid',
    );
    const columnCount = await grid.evaluate((el) => {
      const style = window.getComputedStyle(el);
      const template = style.gridTemplateColumns;
      return template.split(" ").filter(Boolean).length;
    });
    expect(columnCount).toBe(3);
  });

  test("projects page grid has 2 columns at md", async ({ page }) => {
    await page.goto("/projects");
    await page.waitForLoadState("domcontentloaded");

    const grid = page.locator("ul.grid").first();
    const columnCount = await grid.evaluate((el) => {
      const style = window.getComputedStyle(el);
      const template = style.gridTemplateColumns;
      return template.split(" ").filter(Boolean).length;
    });
    expect(columnCount).toBe(2);
  });
});

const SCREENSHOT_ROUTES = [
  { path: "/", name: "home", setup: visitHomeWithPreflight },
  { path: "/projects", name: "projects", setup: null },
  { path: "/services", name: "services", setup: null },
  { path: "/about", name: "about", setup: null },
  { path: "/contact", name: "contact", setup: null },
] as const;

for (const route of SCREENSHOT_ROUTES) {
  test(`screenshot baseline: ${route.name}`, async ({ page }) => {
    if (route.setup) {
      await route.setup(page);
    } else {
      await page.goto(route.path);
      await page.waitForLoadState("domcontentloaded");
    }

    await screenshotPage(page, route.name);
  });
}
