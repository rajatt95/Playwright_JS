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


test('Section_04_RS_UI_Tests - Assert Attribute values for an element', async ({page} )=> {

    const applicationURL = "https://www.rahulshettyacademy.com/loginpagePractise/";
    
    //const msg_blinkingText = page.locator("[href='https://rahulshettyacademy.com/#/documents-request']");
    const msg_blinkingText = page.locator("[href*='documents-request']");
    const btn_SignIn = page.locator('#signInBtn');
   
    console.log('Go to application: '+applicationURL);
    await page.goto(applicationURL);

    //<a href="https://rahulshettyacademy.com/#/documents-request" class="blinkingText" target="_blank" xpath="1">Free Access to InterviewQues/ResumeAssistance/Material</a>
    console.log("Assertion for element has attribute:'class' and value:'blinkingText'");
    await expect(msg_blinkingText).toHaveAttribute('class', 'blinkingText');

    //<input id="signInBtn" type="submit" name="signin" class="btn btn-info btn-md" value="Sign In">
    console.log("Assertion for element has attribute:'value' and value:'Sign In'");
    await expect(btn_SignIn).toHaveAttribute('value', 'Sign In');
    console.log("Assertion for element has attribute:'name' and value:'signin'");
    await expect(btn_SignIn).toHaveAttribute('name', 'signin');
    console.log("Assertion for element has attribute:'type' and value:'submit'");
    await expect(btn_SignIn).toHaveAttribute('type', 'submit');
    
});
