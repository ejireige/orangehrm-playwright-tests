import { test, expect } from '@playwright/test';

test('user sees error with invalid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'irprkr');
  await page.fill('input[name="password"]', 'yfhddh');
  await page.click('button[type="submit"]');

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});