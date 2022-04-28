const {test,expect} = require('@playwright/test');


test('Section_03_RS_UI_Tests - Fill value in TextBox using type() and Click on Button', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    //Playwright will look for the element having CSS selector '#username' and once
    // it finds the element, then, it will fill 'rahulshetty'
    //await page.locator('#username').type('rahulshettyacademy');
    await page.locator('#username').type('rahulshetty');

    await page.locator('#password').type('learning');    

    console.log('Click on Sign In button');
    await page.locator('#signInBtn').click();    
    
    //await delay(5000); //ReferenceError: delay is not defined
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec

});
