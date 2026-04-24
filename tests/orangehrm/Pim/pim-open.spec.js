import { test, expect } from '@playwright/test';

test('open PIM page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.getByText('PIM').click();

  await expect(page).toHaveURL(/pim/);
  await expect(page.getByText('Employee Information')).toBeVisible();
});