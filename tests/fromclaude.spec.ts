import { test, expect } from '@playwright/test';

test('Enter text as soon as input becomes enabled', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/disabledinput');

  // Click the button that triggers enabling the input after a delay
  await page.getByRole('button', { name: 'Enable' }).click();

  const input = page.locator('#inputField'); // adjust selector if needed

  // Wait for the input to become enabled (Playwright auto-waits, but explicit is clearer)
  await expect(input).toBeEnabled({ timeout: 10000 });

  // Now type into the enabled field
  await input.fill('My Test Input');

  // Assert the value was entered correctly
  await expect(input).toHaveValue('My Test Input');
});