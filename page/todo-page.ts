import { BasePage } from "./base-page";

export class TodoPage extends BasePage {
  xpathNewItem = '//input[@id = "new-task"]';
  xpathAddTask = '//button[@id = "add-task"]';
  linkTodoPage = "https://material.playwrightvn.com/03-xpath-todo-list.html";
  //method
  //di toi page
  async goToPage() {
    await this.page.goto(this.linkTodoPage);
  }
  //add san pham vao
  async addItems(quantity: number) {
    const addNewItem = this.page.locator(this.xpathNewItem);
    const btnAddTask = this.page.locator(this.xpathAddTask);
    for (var i = 1; i <= quantity; i++) {
      //i chay tu 1 - 100
      await addNewItem.fill(`Todo ${i}`); //nhap vao field todo co i la tu 1 - 100
      await btnAddTask.click();
    }
  }
  //delete san pham vao
  async deleteItems() {
    for (let i = 1; i <= 100; i += 2) {
      const deleteButton = this.page.locator(
        `//button[@id='todo-${i}-delete']`,
      );

      await deleteButton.click();
    }
  }
}
