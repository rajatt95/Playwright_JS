const {test,expect} = require('@playwright/test');

test('@Regression @Sanity @Smoke Section_13_RS_UI_Tests - Playwright Test #1 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google');

});

test('@Regression @BVT @Sanity Section_13_RS_UI_Tests - Playwright Test #2 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google1');
    
});


test('@Regression @BVT Section_13_RS_UI_Tests - Playwright Test #3 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google1');

});

test('@Regression @Smoke Section_13_RS_UI_Tests - Playwright Test #4 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google');

});