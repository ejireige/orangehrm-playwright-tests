import { test, expect } from '@playwright/test';

test('open admin page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.getByText('Admin').click();

  await expect(page).toHaveURL(/admin/);
  await expect(page.getByText('System Users')).toBeVisible();
});
