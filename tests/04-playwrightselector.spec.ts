import test, { expect } from "@playwright/test";

test('css2', async({page}) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    //xpath: //input[id="reading"]
    //css: #reading
    //playwright:
        //getbyrole: button, checkbox, heading, link, list, table, ...
    await expect(page.getByRole('heading',{name: 'User Registration'})).toBeVisible();
    await page.getByRole('checkbox', {name:'reading'}).check(); //check vào checkbox
    await page.getByRole('button', {name:'register'}).click(); //click vào button


   
});