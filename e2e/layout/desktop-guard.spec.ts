import { expect, test } from "@playwright/test";

import {
  assertDesktopNav,
  assertElementMinHeight,
  assertFlexDirection,
  assertGridColumnCount,
  assertMinFontSize,
  visitHomeWithPreflight,
  visitRouteDesktop,
} from "../fixtures/desktop";
import { assertNoHorizontalOverflow } from "../fixtures/mobile";
import { MARKETING_ROUTES } from "../fixtures/routes";

test.describe("desktop layout guard", () => {
  test("home: nav, hero layout, featured grid, and headline scale", async ({
    page,
  }) => {
    await visitHomeWithPreflight(page);

    await assertDesktopNav(page);
    await assertNoHorizontalOverflow(page);
    await expect(
      page.getByRole("heading", {
        name: /Custom software for teams that need clarity/i,
      }),
    ).toBeVisible();
    await assertMinFontSize(page, "#home-hero-heading", 36);
    await assertElementMinHeight(
      page,
      'section[aria-labelledby="home-hero-heading"]',
      280,
    );
    await assertFlexDirection(
      page,
      'section[aria-labelledby="home-hero-heading"] div.mt-8',
      true,
    );
    await assertGridColumnCount(
      page,
      'section[aria-labelledby="featured-projects-heading"] ul.grid',
      3,
    );
  });

  test("projects: portfolio heading and two-column grid", async ({ page }) => {
    await visitRouteDesktop(page, "/projects");

    await assertDesktopNav(page);
    await assertNoHorizontalOverflow(page);
    await expect(
      page.getByRole("heading", { name: /Our projects/i }),
    ).toBeVisible();
    await assertGridColumnCount(page, "main ul.grid", 2);
  });

  test("services: heading visible and two-column service grid", async ({
    page,
  }) => {
    await visitRouteDesktop(page, "/services");

    await assertDesktopNav(page);
    await assertNoHorizontalOverflow(page);
    await expect(
      page.getByRole("heading", { name: /Our Services/i }),
    ).toBeVisible();
    await assertGridColumnCount(page, "main div.grid", 2);
  });

  test("about: heading visible and three-column values grid", async ({
    page,
  }) => {
    await visitRouteDesktop(page, "/about");

    await assertDesktopNav(page);
    await assertNoHorizontalOverflow(page);
    await expect(
      page.getByRole("heading", { name: /About Xone/i }),
    ).toBeVisible();
    await assertGridColumnCount(page, "main section div.grid", 3);
  });

  test("contact: contact details and CTA row visible", async ({ page }) => {
    await visitRouteDesktop(page, "/contact");

    await assertDesktopNav(page);
    await assertNoHorizontalOverflow(page);
    await expect(
      page.getByRole("heading", { name: /Contact Xone Software Development/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Get in touch/i }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Email us/i })).toBeVisible();
    await assertElementMinHeight(page, 'main a:has-text("Email us")', 36);
  });

  for (const route of MARKETING_ROUTES) {
    test(`no horizontal overflow on ${route.label} (${route.path})`, async ({
      page,
    }) => {
      await visitRouteDesktop(page, route.path);
      await assertDesktopNav(page);
      await assertNoHorizontalOverflow(page);
    });
  }
});
