const {test, expect} = require('@playwright/test')

test('My first playwright test', async({browser})=> {
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto("https://www.google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})