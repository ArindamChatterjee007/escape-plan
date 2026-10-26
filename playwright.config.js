// Playwright config — used by GitHub Actions. Set BASE_URL to test a deployed site instead of the local server.
const { defineConfig } = require("@playwright/test");
const BASE = process.env.BASE_URL;

module.exports = defineConfig({
  testDir: "./tests",
  testMatch: /.*\.spec\.js/,
  timeout: 120_000,
  expect: { timeout: 15_000 },
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [["list"], ["html", { open: "never", outputFolder: "playwright-report" }]],
  use: {
    viewport: { width: 1440, height: 900 },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    actionTimeout: 15_000,
  },
  webServer: BASE ? undefined : {
    command: "python3 -m http.server 8080 --directory docs",
    port: 8080,
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
