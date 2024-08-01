# Automated Capture of Video Walkthrough Of Model Card

## Playwright

Objective: Create a Playwright test we can run on-demand which will create a video walkthrough of the model card for a given model.

### 1. Playwright Quickstart

Installed the Playwright package and initialized the config as specified in their quickstart. Accepted all defaults for wizard.

  ```bash
  cd videos
  npm init playwright@latest
  ```

### 2. Playwright Commands

The above command installs the required files and folders. Here are the main commands to use for various tasks:

```bash
Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨
```


### 3.Playwright Extension

You can use the Playwright extension to record a video of your test walkthrough. Alternatively, run `codegen` from the command line. _Note: [UI Mode in Codespaces](https://playwright.dev/docs/test-ui-mode#docker--github-codespaces) requires additional thought_.


## GitHub Copilot

Can we use it to scaffold the right test for us? Let's try it:

### 1. Prompt 

```bash
@workspace write a playwright test that records a video where the test effectively takes a list of URLs from a text file and visits them one at a time, scrolls to the bottom of each page for each one, then scrolls back to the top before clicking the next one
```

### 2. Response

```bash
This is the response generated
```

To create a Playwright test that reads a list of URLs from a text file, visits each URL, scrolls to the bottom of the page, scrolls back to the top, and records a video, you can follow these steps:

1. Ensure you have Playwright installed in your project:
    ```sh
    npm install @playwright/test
    ```

2. Create a test file, for example, `scroll_test.spec.ts`.

3. Write the Playwright test script:

```typescript
import { test, expect } from '@playwright/test';
import fs from 'fs';

// Read URLs from a text file
const urls = fs.readFileSync('urls.txt', 'utf-8').split('\n').filter(Boolean);

test.describe('Scroll Test', () => {
  for (const url of urls) {
    test(`should scroll through ${url}`, async ({ page }) => {
      // Start video recording
      await page.context().newPage({
        recordVideo: {
          dir: 'videos/',
          size: { width: 1280, height: 720 },
        },
      });

      // Navigate to the URL
      await page.goto(url);

      // Scroll to the bottom of the page
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(2000); // Wait for 2 seconds

      // Scroll back to the top of the page
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(2000); // Wait for 2 seconds

      // Stop video recording
      await page.close();
    });
  }
});
```

4. Create a `urls.txt` file in the same directory as your test file and list the URLs you want to test, one per line.

5. Run the test using Playwright:
    ```sh
    npx playwright test scroll_test.spec.ts
    ```

This script will read the URLs from `urls.txt`, visit each URL, scroll to the bottom, scroll back to the top, and record a video of the process. The videos will be saved in the `videos/` directory.


### 3. Validation (TBD)