import { test, expect } from '@playwright/test';

test('user can login with valid username and password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator('input[name="username"]').waitFor({ state: 'visible' });
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
});