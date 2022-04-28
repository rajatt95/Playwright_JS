const {test,expect} = require('@playwright/test');

test('RS - Playwright Test - RahulShettyAcademy Client App Login - Intercept_API_Block_Images_ToLoad', async ({page})=> {
   
    // Intercept -> Block Network call
    await page.route(
        // Any Request URL which ends with CSS, jpg, png, jpeg 
        // We are blocking the CSS, jpg, png, jpeg to be loaded in Browser
        '**/*.{css,jpg,png,jpeg}',

        // abort() -> it will stop the API call to reach to Browser 
        route => route.abort()
    );
    
    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
    
    await page.locator('#username').type('rahulshettyacademy');
    await page.locator('#password').type('learning');    
    console.log('Click on Sign In button');
    await page.locator('#signInBtn').click();    

});

test.afterEach(async() => {
    await waitForSomeTime(6);    
});//afterEach

async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

