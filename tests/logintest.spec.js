import{test, expect} from 'playwright/test'

test("Login page demo wrong creds", async({page}) => {
    //await page.pause();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("[placeholder='Username']").fill("try1");
    await page.locator("#password").fill("try2");
    await page.locator('[data-test="login-button"]').click();
    console.log(await page.locator("h3[data-test='error']").textContent());
    await expect(page.locator("h3[data-test='error']")).toContainText("do not match");
})

test("Login page demo happy path", async({page}) => {
    //await page.pause();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("[placeholder='Username']").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    //console.log(await page.locator("h3[data-test='error']").textContent());
    await expect(page.locator(".app_logo")).toBeVisible();
})