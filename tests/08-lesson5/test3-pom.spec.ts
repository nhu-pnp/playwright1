import { test, expect } from "@playwright/test";
import { TodoPage } from "../../page/todo-page";

test("addTodoItem", async ({ page }) => {
  const addTodo = new TodoPage(page);
  await addTodo.goToPage();
  await addTodo.addItems(100);

  page.on("dialog", async (deletePopup) => {
    await deletePopup.accept();
  });

  await addTodo.deleteItems();

  // const todo90 = page.getByText("Todo 90", { exact: true }); //playwright selector
  const todo90 = page.locator('//span[text()="Todo 90"]');
  await todo90.scrollIntoViewIfNeeded();
  await expect(todo90).toBeInViewport();
});
