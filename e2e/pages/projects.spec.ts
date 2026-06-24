import { expect, test } from "@playwright/test";

import { visitRoute } from "../fixtures/mobile";

test("projects page renders portfolio grid", async ({ page }) => {
  await visitRoute(page, "/projects");

  await expect(
    page.getByRole("heading", { name: /Our projects/i }),
  ).toBeVisible();

  await expect(page.locator(".projects-coverflow-swiper")).toBeVisible();
  await expect(
    page.locator(".projects-coverflow-swiper .swiper-slide-active"),
  ).toHaveCount(1);
});
