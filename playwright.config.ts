import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: [['html'], ['list']],
  use: {
    trace: "on",
    extraHTTPHeaders: {
      ContentType: "application/json",
      Accept: "application/vnd.enp.api+json;version=v1",
    },
  },
  projects: [
    {
      name: "api-smoke",
      testMatch: 'smoke*'
    },
       {
      name: "api-order",
      testMatch: 'order*',
      // dependencies: ['api-smoke']
    },
  ],
});
