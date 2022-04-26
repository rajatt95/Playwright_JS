const {test,expect} = require('@playwright/test');

//test.describe.configure( { mode : 'serial' } );

test('RS - Playwright Test #1 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google');

});

test('RS - Playwright Test #2 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google1');

});

test('RS - Playwright Test #3 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google1');

});

test('RS - Playwright Test #4 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google');

});