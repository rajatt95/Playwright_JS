const {test,expect} = require('@playwright/test');

test('RS - Playwright Test - Assert Attribute values for an element', async ({page} )=> {

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
