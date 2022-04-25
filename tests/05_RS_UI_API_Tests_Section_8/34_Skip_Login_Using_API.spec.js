const {test,expect, request} = require('@playwright/test');

let api_login_token;

// This is an Javascript object
const requestBody_Login = {
    userEmail: "testtmail95@gmail.com", 
    userPassword: "HiRahul@123"
};

test.beforeAll(async() => {

    const apiContext = await request.newContext();
    const response_login = await apiContext.post(
        //Request URL
        'https://www.rahulshettyacademy.com/api/ecom/auth/login',
        { 
            //Request Body
            data: requestBody_Login
        })//post

        //Assertion for Response status code - 200
        expect(response_login.ok()).toBeTruthy();
        
        //Extract the Response Body in JSON format
        const response_login_json = await response_login.json();

        //Extract the token
        api_login_token = response_login_json.token; 

        console.log('api_login_token: '+api_login_token);
        
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


test.afterEach(async() => {
    await waitForSomeTime(2);    
});


test('RS - Playwright Test - RahulShettyAcademy Client App - Skip Login using API call - Assert Tab: Home', async ({page} )=> {
    const tab_Home = page.locator("[routerlink='/dashboard/']");
    console.log('Assertions for tab: Home')
    await expect(tab_Home).toBeVisible();   
});

test('RS - Playwright Test - RahulShettyAcademy Client App - Skip Login using API call - Assert Tab: Sign Out', async ({page} )=> {
    const tab_SignOut = page.locator("[class='fa fa-sign-out']");
    console.log('Assertions for tab: Sign Out')
    await expect(tab_SignOut).toBeVisible();   
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

