import { test } from '@playwright/test';

test.describe('Suite 1', async () => {

    test('test 1', async ({ page }) => {
        await test.step('Step 1: Truy cap website', async () => {
            await page.goto("https://tailieu.hoctest.com/");
        });

        await test.step('Step 2: Click button', async () => {

        })
    });

    test('test 2', async ({ page }) => {
        await test.step('Step 1: Truy cap website', async () => {
            await page.goto("https://tailieu.hoctest.com/", {
                timeout: 1000
            });
        })

        await test.step('Step 2: Click button', async () => {

        })
    });
    test('test 3', async ({ page }) => {
       
        await page.goto("https://material.playwrightvn.com/");

        const bai1Loc = page.locator('//*[@id="section-xpath"]/table/tbody/tr[1]/td[2]/a[@href="01-xpath-register-page.html"]');
        await bai1Loc.click();
    });

     test('test 4', async ({ page }) => {
       
        await page.goto("https://material.playwrightvn.com/018-mouse.html");

        const clickArea = page.locator('//*[@id="clickArea"]');

        await clickArea.click();
    });
})

