import {test, expect} from '@playwright/test';

test.describe.parallel("Visual testing examples", ()=> {
    test('First visual', async({page})=> {
        await page.goto('https://playwright.dev/docs/test-snapshots');
    
        expect (await page.screenshot()).toMatchSnapshot("playwright.png");
    })
    test('Second visual', async({page})=> {
        await page.goto('https://bookcart.azurewebsites.net/');
    
        expect (await page.screenshot()).toMatchSnapshot("bookcart.png");
    })
    test('Third visual', async({page})=> {
        await page.goto('https://www.saucedemo.com/');
    
        expect (await page.screenshot()).toMatchSnapshot("saucedemo.png");
    })
})
