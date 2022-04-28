/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Playwright JS Automation Testing from Scratch with Framework (https://www.udemy.com/course/playwright-tutorials-automation-testing/)
* Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
*/

/******************************************************** */

const {expect} = require('@playwright/test');
class APIUtils{
    
    apiContext;
    requestBody_Login;

    constructor(apiContext,requestBody_Login){
        this.apiContext = apiContext;
        this.requestBody_Login = requestBody_Login;
    }

    /*************** Get Access Token - START ********************/
    async getAccessTokenForLogin(){
        console.log('this.requestBody_Login');
        console.log(this.requestBody_Login);
        const response_login = await this.apiContext.post(
            //Request URL
            'https://www.rahulshettyacademy.com/api/ecom/auth/login',
            { 
                //Request Body
                data: this.requestBody_Login
            });//post
    
        //Assertion for Response status code - 200
        expect(response_login.ok()).toBeTruthy();
            
        //Extract the Response Body in JSON format          
        const response_login_json = await response_login.json();
    
        //Extract the token
        const api_login_token = response_login_json.token; 
        console.log('api_login_token: '+api_login_token);

        return api_login_token;
    }

    /*************** Get Access Token - END ********************/

    /*************** Create Order - START ********************/

    async createOrder(requestBody_createOrder){
        
        // Javascript Object
        // This will have 2 properties
            // 1. Token 
            // 2. Order ID
        let response={};

        console.log('this.getAccessTokenForLogin()');
        console.log(this.getAccessTokenForLogin());
        response.token = await this.getAccessTokenForLogin();
        console.log('response.token: '+response.token)
        const response_createOrder = await this.apiContext.post(
            //Request URL
            'https://www.rahulshettyacademy.com/api/ecom/order/create-order',
            { 
                //Request Body
                data: requestBody_createOrder,
                //Request Headers
                headers:{
                    //'Authorization' : api_login_token,
                    //'Authorization' : this.getAccessTokenForLogin(),
                    'Authorization' : response.token,
                    'Content-Type'  : 'application/json'
                }
            });//post

        //Extract the Response Body in JSON format
        const response_createOrder_json = await response_createOrder.json();
        console.log('response_createOrder_json: '+response_createOrder_json);
        console.log('Assertion for Response body - message');
        expect((response_createOrder_json.message === 'Order Placed Successfully')).toBeTruthy();
        
        console.log(response_createOrder_json);
        console.log(response_createOrder_json.message);
        //Extract the order ID
        const orderID_from_createOrderAPI = response_createOrder_json.orders[0]; 
        console.log('orderID_from_createOrderAPI: '+orderID_from_createOrderAPI);
        //return orderID_from_createOrderAPI;

        response.orderID = orderID_from_createOrderAPI;
        return response;
    }
    /*************** Create Order - END ********************/


}//class

module.exports={APIUtils};