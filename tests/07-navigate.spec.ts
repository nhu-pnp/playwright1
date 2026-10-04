import test from "@playwright/test";

test('basic action', async ({page}) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

//nhap value
    const email = page.locator("//input[@id='username']");
    await email.fill("khangvo");

    const email1 = page.locator("//input[@type='email']");
    await email1.fill("khangvo@gmail.com");


//check radio female
    const radio = page.locator("//input[@id='female']");
    await radio.check();

//check vaof checkbox
    const checkbox = page.locator("//input[@id='cooking']");
    await checkbox.check();


//check vao check box
    const box1=page.locator("//input[@id='reading']")
    await box1.check();

//uncheck cooking
    await checkbox.uncheck();

    const isCookingChecked = await checkbox.isChecked();
    console.log(isCookingChecked); //


//select
    const box2=page.locator("//select[@id='country']");
    await box2.selectOption ("Canada");

//select 2
    const interestsSelect=page.locator("//select[@id='interests']");
    await interestsSelect.selectOption(["Science","Music"]);

//select date
    const date = page.locator("//input[@id='dob']")
    await date.fill("2026-08-03");

//range
    const range = page.locator("//input[@id='rating']");
    await range.fill('5');
//pickcolor
    const pickColor = page.locator("//input[@id='favcolor']")
    await pickColor.fill("#7dbd3e");
//input file
    const file = page.locator("//input[@id='profile']");
    await file.setInputFiles("meo.webp")
//togle
    const togle= page.locator("//label[@class='switch']");
    await togle.click();

//click
    const button= page.locator("//button[@type='submit']")
    await button.click();

})

