import { test, expect } from '@playwright/test';

test('search user', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.getByText('Admin').click();

  await page.getByRole('textbox').first().fill('Admin');
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText('Records Found')).toBeVisible();
});