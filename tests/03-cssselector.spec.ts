import test from "@playwright/test";

test('css2', async({page}) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    const userRegistration = page.locator('#self'); ////*[@id="self"]

    const noteContainder = page.locator('.note-container') // //div[@class="note-container"]

    const child = page.locator('#child > input#email') // //div[@id="child"]/child::input[@id="email"]
});