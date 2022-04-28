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

test('Section_06_RS_UI_Tests - RahulShettyAcademy Client App Login - allTextContents()', async ({page} )=> {

    const applicationURL = "https://www.rahulshettyacademy.com/client/";

    const txtBox_username = page.locator('#userEmail');
    const txtBox_password = page.locator('#userPassword');
    const btn_Login = page.locator('#login');
    
    const data_login_username = "testtmail95@gmail.com";
    const data_login_password = "HiRahul@123";

    const msg_login_success = page.locator("div[aria-label='Login Successfully']");

    const title_products = page.locator('.card-body b');

    await loginToApplication(applicationURL, page, data_login_username, txtBox_username, data_login_password, txtBox_password, btn_Login, msg_login_success);

    // Wait 
    //await page.waitForLoadState('networkidle');
    //await page.waitForLoadState('domcontentloaded');
    //await page.waitForLoadState('load');
 
    const productTitles = await title_products.allTextContents();
    console.log(productTitles);
    
    await waitForSomeTime(2);


});

async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

async function loginToApplication(applicationURL, page, data_login_username, txtBox_username, data_login_password, txtBox_password, btn_Login, msg_login_success) {
    console.log('Go to application: ' + applicationURL);
    await page.goto(applicationURL);

    console.log('Filling ' + data_login_username + ' in Username textBox');
    await txtBox_username.fill(data_login_username);

    console.log('Filling ' + data_login_password + ' in Password textBox');
    await txtBox_password.fill(data_login_password);

    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec

    console.log('Click on Log In button');
    await btn_Login.click();

    console.log('Assertions for message: Login Successfully')
    await expect(msg_login_success).toBeVisible();
    await expect(msg_login_success).toHaveText('Login Successfully');
    await expect(msg_login_success).toContainText('Successfully');

}

