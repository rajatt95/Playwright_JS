const {test,expect} = require('@playwright/test');

test('RS - Playwright Test - Wait and Assert the Page Title', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    //await delay(5000); //ReferenceError: delay is not defined
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec

    // Assert the Page Title
    await expect(page).toHaveTitle('Google');

});
