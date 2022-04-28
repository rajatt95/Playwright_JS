/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Playwright JS Automation Testing from Scratch with Framework (https://www.udemy.com/course/playwright-tutorials-automation-testing/)
* Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
*/

const {test,expect} = require('@playwright/test');


test('Section_03_RS_UI_Tests - Extract the text of Element and Assert', async ({page} )=> {

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

    console.log('Extract the element text')
    //[style*=block] -> This is the CSS Selector of Error message (Incorrect username/password.)
    console.log(await page.locator('[style*=block]').textContent());

    console.log('Assertion for Error message(Incorrect username/password.)')
    await expect(page.locator('[style*=block]')).toHaveText('Incorrect username/password.');
    await expect(page.locator('[style*=block]')).toContainText('Incorrect');

    //await delay(5000); //ReferenceError: delay is not defined
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec

});
