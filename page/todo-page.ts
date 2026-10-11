import { BasePage } from "./base-page";

export class TodoPage extends BasePage{
    xpathNewItem = '//input[@id = "new-task"]';
    xpathAddTask = '//button[@id = "add-task"]';
    linkTodoPage = "https://material.playwrightvn.com/03-xpath-todo-list.html";

//method
//di toi page
    async goToPage(){
        await this.page.goto(this.linkTodoPage);
    }
//add san pham vao
    async addItem(item: string){
        const addNewItem = this.page.locator(this.xpathNewItem);
        const btnAddTask = this.page.locator(this.xpathAddTask);
        await addNewItem.fill(item);
        await btnAddTask.click();
    }

     






}
