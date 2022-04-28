const {test,expect} = require('@playwright/test');

test('Section_13_RS_UI_Tests - Retry Failed TestCase_AssertTitle', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Googlem');

});
