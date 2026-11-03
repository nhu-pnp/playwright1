import { expect } from "@playwright/test";
import { RegisterPage } from "../../page/register-page";
import { test } from "../../fixture/testExtends";
//test case 1 : register page
test("register page1", async ({ registerPageAdmin }) => {
  //dk cho khang
  await registerPageAdmin.navigateToRegisterPage();
  await registerPageAdmin.fillUsername("khang");
  await registerPageAdmin.fillEmail("khang@gmail.com");
  await registerPageAdmin.selectGender(true);
  await registerPageAdmin.selectHobbies(["Reading", "Cooking"]);
  await registerPageAdmin.selectInterest(["Technology", "Art", "Music"]);
  await registerPageAdmin.selectcountry(["Canada"]);
  await registerPageAdmin.fillDateOfBirth("2026-08-02");
  await registerPageAdmin.clickNewLetter();
  await registerPageAdmin.clickEnableFeature();
  const vitri = {
    position: {
      x: 40,
      y: 10,
    },
  };

  await registerPageAdmin.clickstar(vitri);

  await registerPageAdmin.clickRegisterBtn();
  //check output inform
  await registerPageAdmin.checkUserName("khang");
  await registerPageAdmin.checkEmailTable("khang@gmail.com");

  const information = await registerPageAdmin.getUserInformation();
  expect(information).toContain("male");
  expect(information).toContain("reading, cooking");
  expect(information).toContain("canada");
});

//test case 2 : register page
test("register page2", async ({ registerPageGuest }) => {
  // di toi trang register page
  //   const registerPage = new RegisterPage(page);
  await registerPageGuest.navigateTo(registerPageGuest.linkRegister);
  // await registerPage.navigateToRegisterPage();

  await registerPageGuest.fillUsername("mia");

  //await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

  await registerPageGuest.fillEmail("mia@gmail.com");
  await registerPageGuest.selectGender(false);
  await registerPageGuest.clickRegisterBtn();
});
