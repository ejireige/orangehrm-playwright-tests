import { test, expect } from '@playwright/test';

test('user sees required messages when fields are empty', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Required')).toHaveCount(2);
});