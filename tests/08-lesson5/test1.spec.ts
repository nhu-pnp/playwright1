import test from "@playwright/test"
//test case 1 : register page 
test('register page', async ({page}) => { 
    await page.goto("https://material.playwrightvn.com/");
    const registerPage= page.locator ('//a[@href = "01-xpath-register-page.html"]');
    await registerPage.click();

    const userName = page.locator('//input[@type="text"]')
    await userName.fill('Kiki map nhu heo');

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
})