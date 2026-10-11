import { BasePage } from "./base-page";

export class ProductPage extends BasePage {
  linkProductPage = 'https://material.playwrightvn.com/index.html';
  productPage = '//a[@href="02-xpath-product-page.html"]';
  productPage1 = '//button[@data-product-id="1"]';
  productPage2 = '//button[@data-product-id="2"]';
  productPage3 = '//button[@data-product-id="3"]';


  // //method
  // async goToPage(){
  //   await this.page.goto(this.linkProductPage)
  //   await this.navigateTo(this.linkProductPage)
  // }

  async clickProductPage(){
    const productPageElement = this.page.locator(this.productPage)
    await productPageElement.click();
  }

  async clickProductPage1(){
    const productPageElement1 = this.page.locator(this.productPage1)
    await productPageElement1.click();
  }

  async clickProductPage2(){
    const productPageElement2= this.page.locator(this.productPage2)
    await productPageElement2.click();
  }

  async clickProductPage3(){
    const productPageElement3 = this.page.locator(this.productPage3)
    await productPageElement3.click();
  }
}
