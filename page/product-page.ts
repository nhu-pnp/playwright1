import { expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProductPage extends BasePage {
  linkProductPage = "https://material.playwrightvn.com/index.html";
  productPage = '//a[@href="02-xpath-product-page.html"]';
  productPage1 = '//button[@data-product-id="1"]';
  productPage2 = '//button[@data-product-id="2"]';
  productPage3 = '//button[@data-product-id="3"]';

  //kiem tra xpath quantity
  xpathQuantity1 = '//*[@id="cart-items"]/tr[1]/td[3]';
  xpathQuantity2 = '//*[@id="cart-items"]/tr[2]/td[3]';
  xpathQuantity3 = '//*[@id="cart-items"]/tr[3]/td[3]';

  //kiem tra xpath total
  xpathTotal1 = '//*[@id="cart-items"]/tr[1]/td[4]';
  xpathTotal2 = '//*[@id="cart-items"]/tr[2]/td[4]';
  xpathTotal3 = '//*[@id="cart-items"]/tr[3]/td[4]';
  xpathTotalPrice = '//td[@class="total-price"]';

  //price
  xpathPriceProduct1 = '//*[@id="cart-items"]/tr[1]/td[2]';
  xpathPriceProduct2 = '//*[@id="cart-items"]/tr[2]/td[2]';
  xpathPriceProduct3 = '//*[@id="cart-items"]/tr[3]/td[2]';
  //number
  totalProduct1 = 0;
  totalProduct2 = 0;
  totalProduct3 = 0;
  //#region : check
  //method check
  async checkTotalProduct1() {
    // const checkTotal1Element = this.page.locator(this.xpathTotal1);
    // expect(checkTotal1Element).toHaveText(total1)
    // const num1 = Number(total1)

    //get price product 1 => $10
    const priceProduct1Element = this.page.locator(this.xpathPriceProduct1);
    const contentprice = await priceProduct1Element.textContent(); // $10.00
    const contentWithoutSymbol = contentprice.replace("$", ""); // $10.00
    const priceProduct1 = Number(contentWithoutSymbol); // 10: number
    console.log(priceProduct1);

    //get quantity product 1 => 2
    const quantityProduct1Element = this.page.locator(this.xpathQuantity1);
    const contentquantity = await quantityProduct1Element.textContent(); //2
    const quantityProduct1 = Number(contentquantity); //2
    console.log(quantityProduct1);

    //get total product 1
    const priceTotalElement = this.page.locator(this.xpathTotal1);
    const contentTotal = await priceTotalElement.textContent(); // $20
    const pricetWithoutSymbol = contentTotal.replace("$", ""); //20
    const priceTotal = Number(pricetWithoutSymbol); //20: number

    //kiem tra: total product 1 == (price*quantity) => true
    expect(priceTotal).toEqual(priceProduct1 * quantityProduct1);
    this.totalProduct1 = priceTotal;
    //const priceTotal == priceProduct1 * quantityProduct1
  }

  async checkTotalProduct2() {
    //get total 2
    const price2Element = this.page.locator(this.xpathPriceProduct2);
    const contentpriceTotal2 = await price2Element.textContent(); //$20
    const priceTotal2WithoutSymbol = contentpriceTotal2.replace("$", "");
    const price2 = Number(priceTotal2WithoutSymbol);
    console.log(price2);

    //get quantity 2
    const quantity2Element = this.page.locator(this.xpathQuantity2);
    const contentquantity2 = await quantity2Element.textContent();
    const quantity2 = Number(contentquantity2);
    console.log(quantity2);
    //get total 2
    const pricetotal2Element = this.page.locator(this.xpathTotal2);
    const contentprice2 = await pricetotal2Element.textContent();
    const contentprice2withoutsymbol = contentprice2.replace("$", "");
    const pricetotal2 = Number(contentprice2withoutsymbol);
    console.log(pricetotal2);

    //check pricetotal2 = price2*quantity2
    expect(pricetotal2).toEqual(price2 * quantity2);
    this.totalProduct2 = pricetotal2;
  }

  async checkTotalProduct3() {
    //get price 3
    const price3Element = this.page.locator(this.xpathPriceProduct3);
    const contentprice3 = await price3Element.textContent();
    const contentprice3withoutsymbol = contentprice3.replace("$", "");
    const price3 = Number(contentprice3withoutsymbol);
    console.log(price3);

    //get quantity3
    const quantity3Element = this.page.locator(this.xpathQuantity3);
    const contentquantity3 = await quantity3Element.textContent();
    const quantity3 = Number(contentquantity3);

    //get pricetotal3
    const price3TotalElement = this.page.locator(this.xpathTotal3);
    const contentpricetotal3 = await price3Element.textContent();
    const contentpricetotal3withoutsymbol = contentpricetotal3?.replace(
      "$",
      "",
    );
    const pricetotal3 = Number(contentprice3withoutsymbol);

    //check pricetotal 3 = price3*quantity3
    expect(pricetotal3).toEqual(price3 * quantity3);
    this.totalProduct3 = pricetotal3;
  }
  //get total price
  async checkTotalPrice() {
    const totalpriceElement = this.page.locator(this.xpathTotalPrice);
    const contenttotalprice = await totalpriceElement.textContent();
    const contentTotalpricewithoutsymbol = contenttotalprice?.replace("$", "");
    const totalPrice = Number(contentTotalpricewithoutsymbol);
    //check checkTotalprice = pricetotal3 + pricetotal2 priceTotal
    expect(totalPrice).toEqual(
      this.totalProduct1 + this.totalProduct2 + this.totalProduct3,
    );
  }
  //#endregion
  
  //method
  async goToPage() {
    await this.page.goto(this.linkProductPage);
    await this.navigateTo(this.linkProductPage);
  }
  
  //#region click product
  async clickProductPage() {
    const productPageElement = this.page.locator(this.productPage);
    await productPageElement.click();
  }

  async addProduct1(clickNumber: number) {
    const productPageElement1 = this.page.locator(this.productPage1);
    await productPageElement1.click({ clickCount: clickNumber });
  }

  async addProduct2(clickNumber2: number) {
    const productPageElement2 = this.page.locator(this.productPage2);
    await productPageElement2.click({ clickCount: clickNumber2 });
  }

  async addProduct3(clickNumber3: number) {
    const productPageElement3 = this.page.locator(this.productPage3);
    await productPageElement3.click({ clickCount: clickNumber3 });
  }
  //#endregion
}
