import test from "@playwright/test"

test('productpage', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/index.html');
    const productPage = page.locator ('//a[@href="02-xpath-product-page.html"]');
    await productPage.click();

    const sanPham1 = page.locator('//button[@data-product-id="1"]');
    await sanPham1.dblclick();

    const sanPham2 = page.locator('//button[@data-product-id="2"]');
    await sanPham2.click({clickCount: 3});

    const sanPham3 = page.locator('//button[@data-product-id="3"]');
    await sanPham3.click();

})