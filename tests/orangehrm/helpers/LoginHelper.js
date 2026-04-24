import { expect } from '@playwright/test';

export const loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

export async function login(page) {
  await page.goto(loginUrl);
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
}