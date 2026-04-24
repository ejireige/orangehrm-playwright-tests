import { test, expect } from '@playwright/test';

test('reset search', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.getByText('Admin').click();

  await expect(page.getByText('System Users')).toBeVisible();

  const usernameField = page.locator('.oxd-form input').first();

  await usernameField.fill('Admin');
  await page.getByRole('button', { name: 'Reset' }).click();

  await page.waitForTimeout(1000);

  await expect(usernameField).toHaveValue('');
});