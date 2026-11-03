import { test as base } from "@playwright/test";
import { RegisterPage } from "../page/register-page";

type MyPOM = {
  registerPageAdmin: RegisterPage;
  registerPageGuest: RegisterPage;
};

export const test = base.extend<MyPOM>({
  registerPageAdmin: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    console.log("login with admin");
    await use(registerPage);
  },
  registerPageGuest: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    console.log("login with guest");
    await use(registerPage);
  },
});
