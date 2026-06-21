import { expect, test } from "@playwright/test";

import { visitRoute } from "../fixtures/mobile";

test("projects page renders portfolio grid", async ({ page }) => {
  await visitRoute(page, "/projects");

  await expect(
    page.getByRole("heading", { name: /Our projects/i }),
  ).toBeVisible();

  const grid = page.locator("main ul.grid, ul.grid").first();
  await expect(grid.locator("li")).not.toHaveCount(0);
});
