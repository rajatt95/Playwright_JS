const {test,expect} = require('@playwright/test');

test('@Regression @Sanity @Smoke RS - Playwright Test #1 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google');

});

test('@Regression @BVT @Sanity RS - Playwright Test #2 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google1');
    
});


test('@Regression @BVT RS - Playwright Test #3 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google1');

});

test('@Regression @Smoke RS - Playwright Test #4 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google');

});