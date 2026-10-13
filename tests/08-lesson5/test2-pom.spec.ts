import test from "@playwright/test";
import { ProductPage } from "../../page/product-page";

test('Add product', async ({page}) => { 
    const addProduct = new ProductPage (page)
    //When user go to homepage
    await addProduct.goToPage();
    //And user click Product page
    await addProduct.clickProductPage();
    //And user add product 1 8 times
    await addProduct.addProduct1(8);
    //And user add product 2 3 times
    await addProduct.addProduct2(3);
    //And user add product 3 1 time
    await addProduct.addProduct3(1);
    //Then totalProduct 1 equal price multiplies quantity
    await addProduct.checkTotalProduct1();
    //And totalProduct 2 equal price multiplies quantity
    await addProduct.checkTotalProduct2();
    //And totalProduct 3 equal price multiplies quantity
    await addProduct.checkTotalProduct3();
    //Abd totalPrice equa totalProduct 1 + TOtal Product 2 + total product 3
    await addProduct.checkTotalPrice();

 })

 