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

let api_login_token;
let orderID_from_createOrderAPI;

// This is an Javascript object
const requestBody_Login = {
    userEmail: "testtmail95@gmail.com", 
    userPassword: "HiRahul@123"
};

test.beforeAll(async() => {


    /*************** Do Login - START ********************/
    const apiContext = await request.newContext();
    const response_login = await apiContext.post(
        //Request URL
        'https://www.rahulshettyacademy.com/api/ecom/auth/login',
        { 
            //Request Body
            data: requestBody_Login
        });//post

        //Assertion for Response status code - 200
        expect(response_login.ok()).toBeTruthy();
        
        //Extract the Response Body in JSON format
        const response_login_json = await response_login.json();

        //Extract the token
        api_login_token = response_login_json.token; 
        console.log('api_login_token: '+api_login_token);
        
    /*************** Do Login - END ********************/


    /*************** Create Order - START ********************/

    // Do Login -> Place an Order 
        // Authorization to be sent as Request Header
        // All the Products have unique ID

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
    const response_createOrder = await apiContext.post(
        //Request URL
        'https://www.rahulshettyacademy.com/api/ecom/order/create-order',
        { 
            //Request Body
            data: requestBody_createOrder,
            //Request Headers
            headers:{
                'Authorization' : api_login_token,
                'Content-Type'  : 'application/json'
            }
        });//post

        //Extract the Response Body in JSON format
        const response_createOrder_json = await response_createOrder.json();
        console.log('Assertion for Response body - message');
        expect((response_createOrder_json.message === 'Order Placed Successfully')).toBeTruthy();
         
        console.log(response_createOrder_json);
        console.log(response_createOrder_json.message);
        //Extract the order ID
        orderID_from_createOrderAPI = response_createOrder_json.orders[0]; 
        console.log('orderID_from_createOrderAPI: '+orderID_from_createOrderAPI);
        
    /*************** Create Order - END ********************/

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
        console.log(' -> orderID_from_createOrderAPI: '+orderID_from_createOrderAPI);
        console.log(' -> orderID_Table: '+orderID_Table);
        
        if(orderID_from_createOrderAPI.includes(orderID_Table)){
            console.log('Assertion for Order ID: '+orderID_Table+' on Order history page');
            await expect(rows_orderID_all.nth(i)).toBeVisible();
            await expect(rows_orderID_all.nth(i)).toHaveText(orderID_from_createOrderAPI);
            break;
        }//if       
    }//for
    
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

