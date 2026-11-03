import test from "@playwright/test";

test("Get by role", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/index.html");
  const getbyroleElement = page.locator(
    '//a[@href="03-playwright-selectors.html"]',
  );
  await getbyroleElement.click();

  await page.getByRole("button", { name: "submit form" }).click();

  //get by role: Button
  const saveChangesElement = page.getByRole("button", { name: "Save Changes" });
  await saveChangesElement.click();

  const deleteItem = page.getByRole("button", { name: "Delete Item" });
  await deleteItem.click();

  //get by role: Link
  const home = page.getByRole("link", { name: "Home", exact: true });
  await home.click();

  //get by role: heading
  const title = page.getByRole("heading", {
    name: "Main Title H1",
    level: 1,
  });
  const content = await title.textContent();
  console.log(content);

  //get by role: checkbox, radio
  const checkboxElement = page.getByRole("checkbox", {
    name: "I agree to Terms of Service",
  });
  await checkboxElement.click();

  const radioElement = page.getByRole("radio", { name: "Credit Card" });
  await radioElement.click();

  //get by role: textbox
  const textBoxElement = page.getByRole("textbox", {
    name: "Search products",
    exact: true,
  });
  await textBoxElement.fill("be Khang mong bu");

  //get by role: combobox
  const comboboxElement = page.getByRole("combobox", {
    name: "Country selection",
  });
  await comboboxElement.selectOption("Japan");

  //get by role: cell
  const cellElement = page.getByRole("cell", { name: /john@/ });
  //"join": mac dinh tim ten co chua join, khong phan biet hoa thuong
  // /join@/: tim ten co chua dung mau join@, co phan biet hoa thuong
  const contentCell = await cellElement.textContent();
  console.log(contentCell);

  //get by role: dialog
  const dialogElement = page.getByRole("button", { name: "dialog" });
  await dialogElement.click();

  const confirmElement = page.getByRole("button", { name: "Confirm" });
  await confirmElement.click();
  //get
});
