import { test, expect } from '@playwright/test';

test.describe.parallel("Sauce demo functionalities", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    })
    test('Login and place an order', async ({ page }) => {
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('Mimis');
        await page.locator('[data-test="firstName"]').press('Tab');
        await page.locator('[data-test="lastName"]').fill('Lourantos');
        await page.locator('[data-test="lastName"]').press('Tab');
        await page.locator('[data-test="postalCode"]').fill('99999');
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched');
    })
    test('Login and logout', async ({ page }) => {
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    })
    test('Login and navigate', async ({ page }) => {
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await expect(page.locator('[data-test="about-sidebar-link"]')).toBeVisible();
        await page.locator('[data-test="about-sidebar-link"]').click();
        await page.goto('https://saucelabs.com/');
        await expect(page.getByRole('link', { name: 'Saucelabs' })).toBeVisible();
    })
    test('Wrong login', async ({ page }) => {
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('wronguser');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').fill('11111');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user');
    })
    test.afterEach(async ({ page }) => {
        await page.close();
    })
})