import { test } from "@playwright/test";

import { MARKETING_ROUTES } from "../fixtures/routes";
import {
  assertNoHorizontalOverflow,
  visitRoute,
} from "../fixtures/mobile";

for (const route of MARKETING_ROUTES) {
  test(`no horizontal overflow on ${route.label} (${route.path})`, async ({
    page,
  }) => {
    await visitRoute(page, route.path);
    await assertNoHorizontalOverflow(page);
  });
}
