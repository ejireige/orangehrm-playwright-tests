import { test, expect } from '@playwright/test';

test('change password validation', async ({ page }) => {
  // Go to login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Make sure login worked
  await expect(page).toHaveURL(/dashboard/);

  // Open profile dropdown
  await page.locator('.oxd-userdropdown-tab').click();

  // Click Change Password
  await page.getByText('Change Password').click();

  // Make sure Change Password page opened
  await expect(page.getByText('Update Password')).toBeVisible();

  // Click Save without filling anything
  await page.getByRole('button', { name: 'Save' }).click();

  // Check that required message appears
  await expect(page.getByText('Required').first()).toBeVisible();
});