import test from "@playwright/test";

test("todopage", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/index.html");
  const todoPage = page.locator('//a[@href="03-xpath-todo-list.html"]');
  await todoPage.click();

  const todoItem = page.locator('//input[@id = "new-task"]');
  const addTask = page.locator('//button[@id = "add-task"]');
  for (var i = 1; i <= 100; i++) {  //i chay tu 1 - 100 
    await todoItem.fill(`Todo ${i}`); //nhap vao field todo co i la tu 1 - 100
    await addTask.click();
  }


//khi popup/dialog hiển thị thì nhấn accept.
  page.on("dialog", async (deletePopup1) => deletePopup1.accept());
  for (var i = 1; i <= 100; i++) { // cho i chay tu 1-100
    if (i % 2 !== 0) { //neu i la so le thi xoa
      const deletebtn = page.locator(`//button[@id='todo-${i}-delete']`); 
      await deletebtn.click();
    }
  }
});
