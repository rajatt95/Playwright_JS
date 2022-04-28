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

// let api_login_token;
// let orderID_from_createOrderAPI;
let response;

// This is an Javascript object
const requestBody_Login = {
    userEmail: "testtmail95@gmail.com", 
    userPassword: "HiRahul@123"
};
 // This is an Javascript object
 const requestBody_createOrder = {
    orders:[
        {
            country:"Cuba",
            //6262e9d9e26b7e1a10e89c04 -> Product ID for iPhone 13
            productOrderedId:"6262e9d9e26b7e1a10e89c04"
        }
    ]
};

test.beforeAll(async() => {

    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,requestBody_Login);
    response = await apiUtils.createOrder(requestBody_createOrder);
});

test.beforeEach(async ({page} )=> {

    const applicationURL = "https://www.rahulshettyacademy.com/client/";

    // Injecting the Javascript snippet in Playwright
    page.addInitScript(value => {
        // Set the item in Local storage
        window.localStorage.setItem('token',value);
    //},api_login_token);
    },response.token);

    await page.goto(applicationURL);
});


test.afterEach(async() => {
    await waitForSomeTime(2);    
});


test('Section_08_RS_UI_API_Tests - RahulShettyAcademy Client App - Skip Login and Create Order using API call - Assert Order ID on Order History Page', async ({page} )=> {
    const tab_Orders = page.locator("[routerlink='/dashboard/myorders']");
    await tab_Orders.click();

    const rows_orderID = page.locator("tbody th").first();
    await rows_orderID.waitFor();

    const rows_orderID_all = page.locator("tbody th");
    const orderID_count = await rows_orderID_all.count();
    console.log(' -> orderID_count: '+orderID_count);

    for(let i=0;i<orderID_count;i++){
        // tbody th
        const orderID_Table = await rows_orderID_all.nth(i).textContent();
        //console.log(' -> orderID_from_createOrderAPI: '+orderID_from_createOrderAPI);
        console.log(' -> response.orderID: '+response.orderID);
        console.log(' -> orderID_Table: '+orderID_Table);
        
        //if(orderID_from_createOrderAPI.includes(orderID_Table)){
        if(response.orderID.includes(orderID_Table)){
            console.log('Assertion for Order ID: '+orderID_Table+' on Order history page');
            await expect(rows_orderID_all.nth(i)).toBeVisible();
            await expect(rows_orderID_all.nth(i)).toHaveText(response.orderID);
            break;
        }//if       
    }//for
    
});



test('Section_08_RS_UI_Tests - Intentionally Failing - Wait and Assert the Page Title', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    //await delay(5000); //ReferenceError: delay is not defined
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec

    // Assert the Page Title
    await expect(page).toHaveTitle('Google1');

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

