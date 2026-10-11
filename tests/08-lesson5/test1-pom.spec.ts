import test, { expect } from "@playwright/test"
import { RegisterPage } from "../../page/register-page";
import { BasePage } from "../../page/base-page";
//test case 1 : register page 
test('register page', async ({page}) => {
   //dk cho khang
   const registerKhang = new RegisterPage (page)
    await registerKhang.navigateToRegisterPage();
    await registerKhang.fillUsername("khang");
    await registerKhang.fillEmail('khang@gmail.com')
    await registerKhang.selectGender(true);
    await registerKhang.clickRegisterBtn();

})

//test case 2 : register page 
test('register page2', async ({page}) => {
   
    // di toi trang register page
    const registerPage = new RegisterPage(page);
    await registerPage.navigateTo(registerPage.linkRegister);
    // await registerPage.navigateToRegisterPage();

    await registerPage.fillUsername("mia");

    //await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    
    await registerPage.fillEmail('mia@gmail.com');
    await registerPage.selectGender(false);
    await registerPage.clickRegisterBtn();
})

