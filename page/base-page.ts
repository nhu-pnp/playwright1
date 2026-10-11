import {Page} from "@playwright/test";

//POM: page object models -> OOP: object oriented programing
//export: cho phép file khác import và dùng class BasePage
export class BasePage { //object -> cha -> khung tất thằng con đều sẽ dùng 1 chung thuộc tính
    // thuộc tính dùng chung
    page: Page;

    // tham số: page
    constructor(page:Page){
        this.page = page;
    }
    //method
    async navigateTo(url:string){
        await this.page.goto(url);
    }
}