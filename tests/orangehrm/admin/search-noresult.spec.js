import { test, expect } from '@playwright/test';

test('admin search should show no records found for invalid username', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByText('System Users')).toBeVisible();

  await page.locator('.oxd-form input').first().fill('unknownuser12345');
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText('No Records Found').first()).toBeVisible();
});