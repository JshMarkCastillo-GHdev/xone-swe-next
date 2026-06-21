import { expect, test } from "@playwright/test";

import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "../../src/lib/brand";
import { visitRoute } from "../fixtures/mobile";

test("contact page shows email and phone", async ({ page }) => {
  await visitRoute(page, "/contact");

  await expect(page.getByRole("heading", { name: /Contact/i })).toBeVisible();

  await expect(page.getByText(CONTACT_EMAIL)).toBeVisible();
  await expect(page.getByText(CONTACT_PHONE_DISPLAY)).toBeVisible();
});
