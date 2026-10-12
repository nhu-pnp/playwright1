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
    await registerKhang.selectHobbies(['Reading', 'Cooking']);
    await registerKhang.selectInterest(['Technology', 'Art', 'Music']);
    await registerKhang.selectcountry(['Canada'])
    await registerKhang.fillDateOfBirth('2026-08-02');
    await registerKhang.clickNewLetter();
    await registerKhang.clickEnableFeature()
    const vitri = {
        position: {
            x:40, 
            y:10
        }
    };

    await registerKhang.clickstar(vitri);

    await registerKhang.clickRegisterBtn();
    //check output inform
    await registerKhang.checkUserName("khang");
    await registerKhang.checkEmailTable("khang@gmail.com");

    const information = await registerKhang.getUserInformation();
    expect(information).toContain("male");
    expect(information).toContain("reading, cooking");
    expect(information).toContain("canada");


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

