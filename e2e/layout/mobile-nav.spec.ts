import { expect, test } from "@playwright/test";

import { MARKETING_ROUTES } from "../fixtures/routes";
import {
  closeMobileNavViaEscape,
  openMobileNav,
  visitRoute,
} from "../fixtures/mobile";

for (const route of MARKETING_ROUTES) {
  test(`mobile nav open, navigate, and close on ${route.label}`, async ({
    page,
  }) => {
    await visitRoute(page, route.path);

    await openMobileNav(page);
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeVisible();

    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "About" })
      .click();

    await expect(page).toHaveURL(/\/about$/);
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeHidden();
  });
}

test("Escape closes mobile nav without navigation", async ({ page }) => {
  await visitRoute(page, "/contact");

  await openMobileNav(page);
  await closeMobileNavViaEscape(page);

  await expect(page).toHaveURL(/\/contact$/);
});
