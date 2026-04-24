import { test, expect } from '@playwright/test';

test('login with special characters should show invalid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', '@#$%^&*');
  await page.fill('input[name="password"]', '@#$%^&*');
  await page.click('button[type="submit"]');

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});