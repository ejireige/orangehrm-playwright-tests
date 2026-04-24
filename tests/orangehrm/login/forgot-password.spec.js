import { test, expect } from '@playwright/test';

test('forgot password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByText('Forgot your password?').click();

  await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();
});