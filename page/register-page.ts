import { BasePage } from "./base-page";

export class RegisterPage extends BasePage {//object
    //khai thuoc tinh (xpath)
    //element
    xpathUserName = '//input[@type="text"]';
    xpathEmail = '//input[@type="email"]';
    xpathMale = "//input[@id='male']";
    xpathFemale = "//input[@id='female']"
    xpathHobies = '//select[@id="interests"]';
    xpathCountry = '//select[@id="country"]';
    xpathDateOfBirth = '//input[@id="dob"]';
    xpathProfile = '//input[@id="profile"]';
    xpathBiography = '//textarea[@id="bio"]';
    xpathRating = '//input[@id="rating"]';
    xpathFavouriteColour = '//input[@id="favcolor"]';
    xpathRegisterbutton =  "//button[@type='submit']";
    linkRegister= "https://material.playwrightvn.com/01-xpath-register-page.html";


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

    async clickRegisterBtn(){
        const registerElement = this.page.locator(this.xpathRegisterbutton);
        await registerElement.click();

    }


}



