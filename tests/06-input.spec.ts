import test, { expect } from "@playwright/test";

test('input', async({page}) => {
    await page.goto("https://material.playwrightvn.com/03-input-practice.html");
    const input = page.locator("//input[@id='username']");
    
    // await input.fill("Khangngunhubo.com")

    // //with option
    // await input.fill("Khangngunhubo.com"{
    //     //force : true,
    //     //timeout = 10_000,
    // });
   
    // await input.press("Alt",{
    //     delay: 3_000,
    //     timeout: 10_000,
    // });

    await input.pressSequentially("hoctest.com",{
        delay:300,
        //timeout:10_000,
    })



});