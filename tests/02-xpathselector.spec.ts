import test from "@playwright/test";
//XPath: Advance method
test('xpath1', async ({ page }) => {
   await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    // tạo biến const title chihnhs là User Registration dùng câu lệnh locator
    const userRegistration = page.locator('//*[@id="self"]')

    //and & or
    const username = page.locator('//input[@type="text" and @name = "username"]')

    //innerText: text()
    const hobbies = page.locator('//label[text()="Hobbies:"]')

    //normalize-space(): cắt space đầu đuôi, giống trim
    const hobbies1 = page.locator('//label[normalize-space()="Hobbies:"]')

    //contains cho text: tìm từ chứa trong đoạn text
    const dateOfBirth = page.locator("//label[contains(text(),'Birth')]")

    //contains cho class
    const meomeo = page.locator("//div[contains(@class,'form')]")

    //starts-with
    const userRegistration1 = page.locator ('//h1[starts-with(text(),"User")]')

    

});
//Xpath: axes
test('xpath2', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    //xpath: parent
    const parent = page.locator('//div[@id="child"]/parent::form')
    //xpath: child
    const child = page.locator('//div[@id="child"]/child::input[@id="email"]')
});