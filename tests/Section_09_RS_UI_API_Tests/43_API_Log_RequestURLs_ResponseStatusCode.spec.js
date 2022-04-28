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

