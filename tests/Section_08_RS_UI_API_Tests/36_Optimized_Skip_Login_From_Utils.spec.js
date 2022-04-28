/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Playwright JS Automation Testing from Scratch with Framework (https://www.udemy.com/course/playwright-tutorials-automation-testing/)
* Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
*/

const {test,expect, request} = require('@playwright/test');
const {APIUtils} = require('../../utils/APIUtils');

let api_login_token;

// This is an Javascript object
const requestBody_Login = {
    userEmail: "testtmail95@gmail.com", 
    userPassword: "HiRahul@123"
};

test.beforeAll(async() => {

    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,requestBody_Login);
    api_login_token = await apiUtils.getAccessTokenForLogin();
});

test.beforeEach(async ({page} )=> {

    const applicationURL = "https://www.rahulshettyacademy.com/client/";

    // Injecting the Javascript snippet in Playwright
    page.addInitScript(value => {
        // Set the item in Local storage
        window.localStorage.setItem('token',value);
    },api_login_token);
    
    await page.goto(applicationURL);
});

test('Section_08_RS_UI_API_Tests - RahulShettyAcademy Client App - Optimized_Skip_Login_From_Utils', async ({page} )=> {
    const tab_Home = page.locator("[routerlink='/dashboard/']");
    console.log('Assertions for tab: Home')
    await expect(tab_Home).toBeVisible();   
});


test.afterEach(async() => {
    await waitForSomeTime(2);    
});



async function mouseHoverOnElement(element,elementText) {
    console.log('Mouse Hover on: '+elementText);
    await element.hover();
}

async function clickOnElement(element,elementText) {
    console.log('Clicking on: '+elementText);
    await element.click();
}


async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

