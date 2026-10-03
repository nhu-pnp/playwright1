import test, { expect } from "@playwright/test";

test('css2', async({page}) => {
    await page.goto("https://material.playwrightvn.com/018-mouse.html");
    const clickArea = page.locator("//div[@id='clickArea']");

    await clickArea.click();
    await clickArea.click({button:"right"});
    await clickArea.click({button:"middle"});
    await clickArea.click({clickCount:100});
    //await clickArea.click({delay: 3_000}); //nhan giu chuot
    await clickArea.click({force:true});
    await clickArea.click({modifiers: ['Alt']});
    await clickArea.click({position:{x:100, y:100}});
    await clickArea.click({trial: true});
});