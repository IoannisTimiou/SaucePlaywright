import { test, expect } from "@playwright/test"

test("Screenshots and traces", async ({ page }) => {
    await page.goto("https://saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    //await page.getByText('Swag Labs').click();
    //await page.pause();
    await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
    await page.screenshot({path:'home.png'});
    await page.locator('[data-test="primary-header"]').screenshot({path: 'header.png'});
})