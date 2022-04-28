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


test('Section_03_RS_UI_Tests - fill() method usage', async ({page} )=> {

    const applicationURL = "https://www.rahulshettyacademy.com/loginpagePractise/";

    const expectedApplicationTitle = "LoginPage Practise | Rahul Shetty Academy";

    const txtBox_username = page.locator('#username');
    const txtBox_password = page.locator('#password');
    const btn_SignIn = page.locator('#signInBtn');
    const msg_error_incorrect_credentials = page.locator('[style*=block]');

    // Go to the application
    await page.goto(applicationURL);

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle(expectedApplicationTitle);

    //Playwright will look for the element having CSS selector '#username' and once
    // it finds the element, then, it will fill 'rahulshetty'
    //await page.locator('#username').type('rahulshettyacademy');
    await txtBox_username.type('rahulshetty');

    await txtBox_password.type('learning');

    console.log('Click on Sign In button');
    await btn_SignIn.click();

    console.log('Extract the element text');
    //[style*=block] -> This is the CSS Selector of Error message (Incorrect username/password.)
    console.log(await msg_error_incorrect_credentials.textContent());

    console.log('Assertion for Error message(Incorrect username/password.)');
    await expect(msg_error_incorrect_credentials).toHaveText('Incorrect username/password.');
    await expect(msg_error_incorrect_credentials).toContainText('Incorrect');

    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec
    
    //type() -> This method will not clear the textbox; will fill the value in the textBox directly
    await txtBox_username.type('abcdefghi');

    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec

    //fill() -> This method will first clear the textbox. Then, will fill the value in the textBox
    await txtBox_username.fill('rahulshettyacademy');

    await new Promise(resolve => setTimeout(resolve, 3000)); // 2 sec

    await btn_SignIn.click();

    await new Promise(resolve => setTimeout(resolve, 3000)); // 2 sec
});
