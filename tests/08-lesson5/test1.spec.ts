import test, { expect } from "@playwright/test"
//before

//test case 1 : register page 
test('register page', async ({page}) => { 
    await page.goto("https://material.playwrightvn.com/");
    const registerPage= page.locator ('//a[@href = "01-xpath-register-page.html"]');
    await registerPage.click();

    // Then heading is "User Registration" 

    // Asssertion
    // expect(A).toBe(B);
    // giải nghĩa: Kiểm tra A đúng bằng B. A là string thì b cũng string
    // a là element thì b cũng là element
    const headingTitle = page.locator('//h1');

    // await element.textContent() => text nằm trong elements đó
    const headingTitleText = await headingTitle.textContent();
    console.log(headingTitleText);
    expect(headingTitleText).toBe("User Registration");


    const userName = page.locator('//input[@type="text"]')
    await userName.fill('Kiki dep trai');

    const email = page.locator('//input[@type="email"]');
    await email.fill('kiki@gmail.com');

    const gender = page.locator("//input[@id='male']");
    await gender.click();

    const hobbies = page.locator('//select[@id="interests"]');
    await hobbies.selectOption(['Technology', 'Art', 'Music']);

    const country = page.locator('//select[@id="country"]');
    await country.selectOption(['Canada']);

    const dateOfBirth = page.locator('//input[@id="dob"]');
    await dateOfBirth.fill('2026-08-03');

    const profile = page.locator('//input[@id="profile"]');
    await profile.setInputFiles('meo.webp');

    const biography = page.locator('//textarea[@id="bio"]');
    await biography.fill("This method waits for actionability checks, focuses the element, fills it and triggers an input event after filling. Note that you can pass an empty string to clear the input field.");
    
    const rating = page.locator('//input[@id="rating"]');
    await rating.fill('4');

    const favouriteColour = page.locator('//input[@id="favcolor"]');
    await favouriteColour.fill('#500707');

    const newletter = page.locator('//input[@id="newsletter"]');
    await newletter.click();

    const enableFeature = page.locator ('//span[@class="slider round"]');
    await enableFeature.click();

    const star = page.locator('//div[@class="rating-star"]');
    await star.click({position:{x:40, y:10}});

    const registerButton = page.locator("//button[@type='submit']");
    await registerButton.click();

    const username = page.locator('//*[@id="userTable"]/tbody/tr/td[2]');
    await expect(username).toHaveText("Kiki dep trai");

    const emailTable = page.locator('//*[@id="userTable"]/tbody/tr/td[3]');
    await expect(emailTable).toHaveText('kiki@gmail.com');
})