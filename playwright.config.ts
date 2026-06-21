import { defineConfig, devices } from "@playwright/test";

const PORT = 5142;
const baseURL = `http://127.0.0.1:${PORT}`;

const mobileIgnore = "**/desktop-guard/**";

const chromiumOnly = { browserName: "chromium" as const };

export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ["html", { open: "never" }],
    ["list"],
  ],
  snapshotPathTemplate:
    "{testDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}",
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.03,
      animations: "disabled",
    },
  },
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run start",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    env: {
      SITE_URL: baseURL,
      CI: "true",
    },
  },
  projects: [
    {
      name: "iphone-xs-max",
      use: {
        ...devices["iPhone 13 Pro Max"],
        ...chromiumOnly,
        viewport: { width: 414, height: 896 },
        isMobile: true,
        hasTouch: true,
      },
      testIgnore: mobileIgnore,
    },
    {
      name: "ipad-pro-11",
      use: { ...devices["iPad Pro 11"], ...chromiumOnly },
      testIgnore: mobileIgnore,
    },
    {
      name: "galaxy-tab-s4",
      use: { ...devices["Galaxy Tab S4"], ...chromiumOnly },
      testIgnore: mobileIgnore,
    },
    {
      name: "pixel-7",
      use: { ...devices["Pixel 7"], ...chromiumOnly },
      testIgnore: mobileIgnore,
    },
    {
      name: "desktop-chrome",
      use: {
        ...devices["Desktop Chrome"],
        ...chromiumOnly,
        viewport: { width: 1280, height: 720 },
      },
      testMatch: "**/desktop-guard/**",
    },
  ],
});
