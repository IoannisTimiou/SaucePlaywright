import { test, expect } from '@playwright/test'

test.describe.parallel("Smoke tests for feature1", () => {
    test.beforeEach(async({page}) =>{
        await page.goto("https://bookcart.azurewebsites.net/");
    })
    test("Adding books to cart", async ({ page }) => {
        //await page.goto("https://bookcart.azurewebsites.net/");
        await page.locator('mat-card-content').filter({ hasText: 'Harry Potter and the Chamber' }).getByRole('button').click();
        await page.locator('mat-card-content').filter({ hasText: 'Harry Potter and the Prisoner' }).getByRole('button').click();
        await page.locator('mat-card-content').filter({ hasText: 'Harry Potter and the Goblet' }).getByRole('button').click();
        await page.locator('button').filter({ hasText: 'shopping_cart3' }).click();
        await page.getByRole('button', { name: 'CheckOut' }).click();
        await page.locator('.mat-mdc-form-field-infix').first().click();
        await page.getByPlaceholder('Username').fill('jtim');
        await page.getByPlaceholder('Username').press('Tab');
        await page.getByPlaceholder('Password').fill('Newpass123');
        await page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
        await page.getByPlaceholder('Name').click();
        await page.getByPlaceholder('Name').fill('Yan');
        await page.getByPlaceholder('Name').press('Tab');
        await page.getByPlaceholder('Address Line 1').fill('56');
        await page.getByPlaceholder('Address Line 1').press('Tab');
        await page.getByPlaceholder('Address Line 2').fill('Colum');
        await page.getByPlaceholder('Address Line 2').press('Tab');
        await page.getByPlaceholder('Pincode').fill('222222');
        await page.getByPlaceholder('Pincode').press('Tab');
        await page.getByPlaceholder('State').fill('Wales');
        await page.getByRole('button', { name: 'Place Order' }).click();
        await expect(page.locator('mat-card-header')).toBeVisible();

    })
    test("Login", async ({ page }) => {
        //await page.goto("https://bookcart.azurewebsites.net/");
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByText('Username').click();
        await page.getByPlaceholder('Username').fill('jtim');
        await page.getByPlaceholder('Username').press('Tab');
        await page.getByPlaceholder('Password').fill('Newpass123');
        await page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('account_circlearrow_drop_down')).toBeVisible();
    })
    test.afterEach(async({page}) =>{
        await page.close();
    })
})