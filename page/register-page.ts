import { expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class RegisterPage extends BasePage {//object
    //khai thuoc tinh (xpath)
    // register form
    xpathUserName = '//input[@type="text"]';
    xpathEmail = '//input[@type="email"]';
    xpathMale = "//input[@id='male']";
    xpathFemale = "//input[@id='female']"
    xpathReading = '//input[@value="reading"]';
    XpathTraveling = '//input[@value="traveling"]';
    xpathCooking ='//input[@value="cooking"]';
    xpathInterest = '//select[@id="interests"]';
    xpathCountry = '//select[@id="country"]';
    xpathDateOfBirth = '//input[@id="dob"]';
    xpathProfile = '//input[@id="profile"]';
    xpathBiography = '//textarea[@id="bio"]';
    xpathRating = '//input[@id="rating"]';
    xpathFavouriteColour = '//input[@id="favcolor"]';
    xpathNewletter = '//input[@id="newsletter"]';
    xpathEnableFeature = '//span[@class="slider round"]';
    xpathStar = '//div[@class="rating-star"]';
    xpathRegisterbutton =  "//button[@type='submit']";
    linkRegister= "https://material.playwrightvn.com/01-xpath-register-page.html";

    //register ouput table
    xpathUserNameTable = '//*[@id="userTable"]/tbody/tr/td[2]';
    xpathEmailTable = '//*[@id="userTable"]/tbody/tr/td[3]';
    xpathInformationTable = '//*[@id="userTable"]/tbody/tr/td[4]';


    async checkUserName(username: string){
        const userNameTableElement = this.page.locator(this.xpathUserNameTable);
        await expect(userNameTableElement).toHaveText(username);
    }

    async getUserInformation(){
        const informationElement = this.page.locator(this.xpathInformationTable);
        return informationElement.textContent();
    }

    async checkEmailTable(email:string){
        const emailTableElement = this.page.locator(this.xpathEmailTable);
        await expect(emailTableElement).toHaveText(email);
    }
    async selectHobbies(hobbies: Array<string>){
        if (hobbies.includes("Reading")){
            const readingElement = this.page.locator(this.xpathReading);
            await readingElement.click()
        }
        if (hobbies.includes('Traveling')){
            const travelingElement = this.page.locator(this.XpathTraveling);
            await travelingElement.click()
        }
        if (hobbies.includes('Cooking')){
            const cookingElement = this.page.locator(this.xpathCooking);
            await cookingElement.click()
        }
    }
    //method
    async navigateToRegisterPage() {
        await this.page.goto(this.linkRegister);
        //
        await this.navigateTo(this.linkRegister);
    }
    
    async fillUsername(username:string){
        const usernameElement = this.page.locator(this.xpathUserName);
        await usernameElement.fill(username);
    }

    //dien email
    async fillEmail(email:string){
        const emailElement = this.page.locator(this.xpathEmail);
        await emailElement.fill(email);
    }

    async selectGender(isMale: boolean){
       if (isMale == true){
        const genderElement = this.page.locator(this.xpathMale);
        await genderElement.click();
       } else {
        const genderElement = this.page.locator(this.xpathFemale);
        await genderElement.click();
       }
        // neu isMale la true thif chon male
        //nguoc lai chon female
        
    }

    async selectInterest(interest: Array<string>){
        const selecthobbiesxpath = this.page.locator(this.xpathInterest);
        await selecthobbiesxpath.selectOption(interest);
    }

    async selectcountry(country: Array<string>){
        const selectcountryxpath = this.page.locator(this.xpathCountry);
        await selectcountryxpath.selectOption(country);
    }

    async fillDateOfBirth(dateofbirth: string){
        const fillDateOfBirthxpath = this.page.locator(this.xpathDateOfBirth);
        await fillDateOfBirthxpath.fill(dateofbirth);
    }

    async clickNewLetter(){
        const clickNewletterXpath = this.page.locator(this.xpathNewletter);
        await clickNewletterXpath.click();
    }

    async clickEnableFeature(){
        const clickEnableFeatureXpath = this.page.locator(this.xpathEnableFeature);
        await clickEnableFeatureXpath.click();
    }

    async clickstar(star:object){
        const clickStarXpath = this.page.locator(this.xpathStar)
        await clickStarXpath.click(star);
    }

    async clickRegisterBtn(){
        const registerElement = this.page.locator(this.xpathRegisterbutton);
        await registerElement.click();

    }


}



