/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Playwright JS Automation Testing from Scratch with Framework (https://www.udemy.com/course/playwright-tutorials-automation-testing/)
* Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
*/

/******************************************************** */

const {test,expect} = require('@playwright/test');

test('Section_13_RS_UI_Tests - RetryFailedTestCase_Type_And_Click', async ({page} )=> {

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
