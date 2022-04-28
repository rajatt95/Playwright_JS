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


test('Section_04_RS_UI_Tests - Handle Checkbox', async ({page} )=> {

    const applicationURL = "https://www.rahulshettyacademy.com/loginpagePractise/";

    const txtBox_username = page.locator('#username');
    const txtBox_password = page.locator('#password');
    const btn_SignIn = page.locator('#signInBtn');
    const radioBtn_user = page.locator("[value='user']");
    const radioBtn_user_PopUp_Okay = page.locator("#okayBtn");

    const checkBox_terms = page.locator("#terms");

    const title_products = page.locator('.card-body a')
    
    const data_login_username = "rahulshettyacademy";
    const data_login_password = "learning";

    // Go to the application
    await page.goto(applicationURL);

    console.log('Filling '+data_login_username+' in Username textBox');
    await txtBox_username.fill(data_login_username);
    
    console.log('Filling '+data_login_password+' in Password textBox');
    await txtBox_password.fill(data_login_password);

    console.log('Click on CheckBox: Terms');
    await checkBox_terms.click();
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec
  
    console.log("await checkBox_terms.isChecked(): "+await checkBox_terms.isChecked());
    console.log('Assertion for Checkbox_Terms to be checked');
    await expect(checkBox_terms).toBeChecked();

    await checkBox_terms.uncheck();

    console.log('Assertion for Checkbox_Terms to not be checked');
    console.log("await checkBox_terms.isChecked(): " + await checkBox_terms.isChecked())
    //Expecting false
    expect(await checkBox_terms.isChecked()).toBeFalsy();
    
    //Expecting true
    //await expect(checkBox_terms.isChecked()).toBeTruthy();

    console.log('Click on Sign In button');
    await btn_SignIn.click();

});
