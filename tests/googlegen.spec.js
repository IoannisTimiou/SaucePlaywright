import { test, expect } from '@playwright/test';

test('search and click', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Reject all' }).click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  await page.goto('https://www.google.com/search?q=playwright&sca_esv=7df3c1460c395427&source=hp&ei=OoUOZ97VCPOGhbIP4KXeAQ&iflsig=AL9hbdgAAAAAZw6TSgneAoQ9znQ7YOBYtmlxxyHbdWum&ved=0ahUKEwje2omD1ZCJAxVzQ0EAHeCSNwAQ4dUDCA8&uact=5&oq=playwright&gs_lp=Egdnd3Mtd2l6IgpwbGF5d3JpZ2h0MgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEC4YgAQYxwEYrwEyCxAAGIAEGLEDGIMBMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABEiPNFDvCFj-JHACeACQAQCYAd4EoAHoFaoBBzAuOC41LTO4AQPIAQD4AQGYAg2gAv0WqAIKwgIQEC4YAxjlAhjqAhiMAxiPAcICEBAAGAMY5QIY6gIYjAMYjwHCAhEQLhiABBixAxjRAxiDARjHAcICCBAuGIAEGLEDwgIOEC4YgAQYsQMYgwEYigXCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgILEAAYgAQYkgMYigXCAggQABiABBjJA8ICCBAuGIAEGNQCwgIEEAAYHpgDF5IHCzIuNy4xLjAuMi4xoAeYbw&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  //await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
});