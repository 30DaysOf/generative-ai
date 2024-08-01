import { test, expect } from '@playwright/test';

// Read URLs from a text file
const urls = fs.readFileSync('urls.txt', 'utf-8').split('\n').filter(Boolean);

test.describe('Scroll Test', () => {
  for (const url of urls) {
    test(`should scroll through ${url}`, async ({ page }) => {
      // Start video recording
      const videoPage = await page.context().newPage({
        recordVideo: {
          dir: 'videos/',
          size: { width: 1280, height: 720 },
        },
      });

      // Navigate to the URL
      await videoPage.goto(url);

      // Scroll to the bottom of the page
      await videoPage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await videoPage.waitForTimeout(2000); // Wait for 2 seconds

      // Scroll back to the top of the page
      await videoPage.evaluate(() => window.scrollTo(0, 0));
      await videoPage.waitForTimeout(2000); // Wait for 2 seconds

      // Stop video recording
      await videoPage.close();
    });
  }
});