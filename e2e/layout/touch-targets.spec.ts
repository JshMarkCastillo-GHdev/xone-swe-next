import { test } from "@playwright/test";

import {
  assertTouchTargetMinSize,
  openMobileNav,
  visitRoute,
} from "../fixtures/mobile";

const TOUCH_TARGET_ROUTES = ["/", "/contact", "/projects"] as const;

for (const path of TOUCH_TARGET_ROUTES) {
  test(`touch targets meet 44px minimum on ${path}`, async ({ page }) => {
    await visitRoute(page, path);

    const menuButton = page.getByRole("button", {
      name: /Open navigation menu/i,
    });
    await assertTouchTargetMinSize(menuButton);

    await openMobileNav(page);

    const mobileNav = page.getByRole("navigation", {
      name: "Mobile navigation",
    });
    const navLinks = mobileNav.getByRole("link");
    const linkCount = await navLinks.count();
    for (let i = 0; i < linkCount; i++) {
      await assertTouchTargetMinSize(navLinks.nth(i));
    }

    await page.keyboard.press("Escape");

    const companyHeading = page.getByRole("heading", { name: "Company" });
    const companyLinks = companyHeading.locator("..").getByRole("link");

    const companyLinkCount = await companyLinks.count();
    for (let i = 0; i < companyLinkCount; i++) {
      await assertTouchTargetMinSize(companyLinks.nth(i));
    }

    if (path === "/") {
      const heroSection = page.locator('section[aria-labelledby="home-hero-heading"]');
      const heroCtas = heroSection.getByRole("link");
      const ctaCount = await heroCtas.count();
      for (let i = 0; i < ctaCount; i++) {
        await assertTouchTargetMinSize(heroCtas.nth(i));
      }
    }
  });
}
