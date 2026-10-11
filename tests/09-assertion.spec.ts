import test, { expect } from "@playwright/test"
//test case 1 : register page 
test('register page', async ({page}) => { 
    await page.goto("https://material.playwrightvn.com/");
    const registerPage= page.locator ('//a[@href = "01-xpath-register-page.html"]');
    await registerPage.click();

    // Then heading is "User Registration" 

    
    const headingTitle = page.locator('//h1');

    // await element.textContent() => text nằm trong elements đó
    const headingTitleText = await headingTitle.textContent();

    console.log(headingTitleText);
    // Asssertion
    // expect(A).toBe(B);
    // giải nghĩa: Kiểm tra A đúng bằng B. A là string thì b cũng string
    // a là element thì b cũng là element
    expect(headingTitleText).toBe("User Registration");
    
})