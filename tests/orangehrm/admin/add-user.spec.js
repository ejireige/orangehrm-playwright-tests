import { test, expect } from '@playwright/test';

test('add user form should show required field validation', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // login
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // go to Admin page
  await page.getByText('Admin').click();

  // confirm Admin page loaded
  await expect(page.getByText('System Users')).toBeVisible();

  // click Add button
  await page.getByRole('button', { name: 'Add' }).click();

  // confirm Add User page opened
  await expect(page.getByRole('heading', { name: 'Add User' })).toBeVisible();

  // click Save without entering details
  await page.getByRole('button', { name: 'Save' }).click();

  // verify required validation messages appear
  await expect(page.getByText('Required').first()).toBeVisible();
});