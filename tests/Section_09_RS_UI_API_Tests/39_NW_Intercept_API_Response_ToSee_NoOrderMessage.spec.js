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

test('Section_09_RS_UI_API_Tests - RahulShettyAcademy Client App Login - Intercept_API_Response_ToSee_NoOrderMessage.spec', async ({page})=> {
   
    await page.goto('https://www.rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill('testtmail95@gmail.com');
    await page.locator('#userPassword').fill('HiRahul@123');
    waitForSomeTime(2);
    await page.locator('#login').click();
    //await page.waitForLoadState('networkidle');
    
    await page.route(
        // Request URL (When this URL will come, we want customied response)
        'https://www.rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/626551ebe26b7e1a10e8acbc',
        async route =>{

            // This is Real response 
            const response = await page.request.fetch(route.request());

            // Got this response from application (From User account which has created no Orders)
            const responseBody_customized_For_NoOrderMessage = {
                message:"No Product in Cart"
            };
            // Intercepting the Response
            // We will send the customized Response to Browser and Browser will render the data on FrontEnd
            // API response -> ** Playwright intercepts here (Custom Response) ** ->Response Data send to Browser -> Browser renders UI
            
            route.fulfill({
                response,
                responseBody_customized_For_NoOrderMessage,
            });
        }
    );
   
    const tab_Orders = page.locator("button[routerlink='/dashboard/myorders']");
   
    console.log('Clicking on Orders Tab');
    await tab_Orders.click();
    
});

test.afterEach(async() => {
    await waitForSomeTime(6);    
});//afterEach

async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

