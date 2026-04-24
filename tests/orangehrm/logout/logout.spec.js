import { test, expect } from '@playwright/test';

test('unauthorized access after logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.locator('.oxd-userdropdown-tab').click();
  await page.getByText('Logout').click();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  await expect(page).toHaveURL(/auth\/login/);
});