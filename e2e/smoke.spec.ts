import { expect, test } from '@playwright/test';
test('@smoke landing explains program and is navigable',async({page})=>{await page.goto('/');await expect(page.getByRole('heading',{name:/christian literacy/i})).toBeVisible();await expect(page.getByText('98-day journey')).toBeVisible();await page.keyboard.press('Tab');});
