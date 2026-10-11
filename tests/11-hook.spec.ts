import test from "@playwright/test";
import { RegisterPage } from "../page/register-page";

test.describe("Hook", async () => {
  //Before/after all va Before/After each phai o dau
  //Before/after all va Before/After each chinh la Given trong cucumber
  test.beforeAll(async () => {
    console.log("Before all");
  });

  test.afterAll(async () => {
    console.log("After all");
  });

  //Before each va After each se duoc dung nhieu hon
  test.beforeEach(async ({page}) => {
    console.log("Before each");
    //Given user is on Register page
    const registerKhang = new RegisterPage(page);
    await registerKhang.navigateToRegisterPage();
  });

  test.afterEach(async () => {
    console.log("After each");
  });

  test("test 1", async ({page}) => {
    const registerKhang = new RegisterPage(page);
    
    //When user filll username is Khang
    await registerKhang.fillUsername("khang");
    //AND user fill email is "Khang@gmai.com"
    await registerKhang.fillEmail("khang@gmail.com");
    //AND user select gender is male
    await registerKhang.selectGender(true);
    //AND user click register btn
    await registerKhang.clickRegisterBtn();
  });
  test("test2", async () => {
    console.log("test 2");
  });
});
