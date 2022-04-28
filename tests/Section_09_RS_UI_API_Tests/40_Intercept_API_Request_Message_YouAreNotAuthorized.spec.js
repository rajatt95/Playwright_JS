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

test('Section_09_RS_UI_API_Tests - RahulShettyAcademy Client App Login - Intercept_API_Request_Message_YouAreNotAuthorized', async ({page})=> {
   
    await page.goto('https://www.rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill('testtmail95@gmail.com');
    await page.locator('#userPassword').fill('HiRahul@123');
    waitForSomeTime(2);
    await page.locator('#login').click();
    //await page.waitForLoadState('networkidle');

    
    const tab_Orders = page.locator("button[routerlink='/dashboard/myorders']");
    console.log('Clicking on Orders Tab');
    await tab_Orders.click();

    await page.route(
        // Request URL
        // 6266ccd2e26b7e1a10e8d1c5 -> ID of the product from testtmail95@gmail.com account
        'https://www.rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6266ccd2e26b7e1a10e8d1c5',

        // 6266ccd2e26b7e1a1232333 -> fake account 
        route => route.continue({url:'https://www.rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6266ccd2e26b7e1a1232333'})
    );
    

    const btn_view_firstOrder = page.locator("button:has-text('View')").first();
    console.log('Clicking on View button of first Order');
    await btn_view_firstOrder.click();

    console.log('Assertion for message: You are not authorize to view this order');
    const msg_youAreNotAuthorized = page.locator("p:has-text('You are not authorize to view this order')");
    await expect(msg_youAreNotAuthorized).toHaveText('You are not authorize to view this order');
    
});

test.afterEach(async() => {
    await waitForSomeTime(6);    
});//afterEach

async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

