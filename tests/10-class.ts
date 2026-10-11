import type { Page } from "@playwright/test";
//class cha
class BasePage {
    //thuộc tính
    page: Page;
    xpathDashboard = "#dashboard-20";


    //hàm khởi tạo
    constructor(page: Page){
        this.page = page;
    }

    //method
    async navigateTo(url: string){
        //code here
    }
}

class LoginPage extends BasePage{
    constructor(page:Page){
        super(page)
    }
}

const loginPage = new LoginPage();
const basePage = new BasePage();
console.log(basePage.xpathDashboard);
console.log(loginPage.xpathDashboard);
