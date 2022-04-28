const {test,expect} = require('@playwright/test');

test('Section_09_RS_UI_API_Tests - RahulShettyAcademy Client App Login - API_Log_RequestURLs_ResponseStatusCode', async ({page})=> {
 
    //on() -> It is an event
    page.on('request', request=>
            console.log(request.url())
    );

    page.on('response', response=>
            console.log(response.url()," | ", response.status())
    );

    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/'); 
    await page.locator('#username').type('rahulshettyacademy');
   
});

test.afterEach(async() => {
    await waitForSomeTime(6);    
});//afterEach

async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

