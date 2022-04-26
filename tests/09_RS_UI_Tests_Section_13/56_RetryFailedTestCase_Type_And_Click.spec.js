const {test,expect} = require('@playwright/test');

test('RS - Playwright Test - RetryFailedTestCase_Type_And_Click', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    //Playwright will look for the element having CSS selector '#username' and once
    // it finds the element, then, it will fill 'rahulshetty'
    //await page.locator('#username').type('rahulshettyacademy');
    await page.locator('#username123').type('rahulshetty');

    await page.locator('#password').type('learning');    

    console.log('Click on Sign In button');
    await page.locator('#signInBtn').click();    
    
    //await delay(5000); //ReferenceError: delay is not defined
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec

});
