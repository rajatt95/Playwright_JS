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

const {test,expect} = require('@playwright/test');
//const { default: CommonUtils } = require('../../utils/CommonUtils');
//import commonUtils from '../../utils/CommonUtils'
const {CommonUtils}=require('../../utils/CommonUtils');
const {LoginPage} = require('../../pageObjects/LoginPage');
const {DashboardPage} = require('../../pageObjects/DashboardPage');
const {CartPage} = require('../../pageObjects/CartPage');


test('Section_11_RS_UI_Tests - RahulShettyAcademy Client App Login - POM_Login_Assert_ProductName_OnCartPage', async ({page} )=> {

    const data_login_username = "testtmail95@gmail.com";
    const data_login_password = "HiRahul@123";

    /****************** Login Page - START *******************/
    
    const loginPage = new LoginPage(page);
    await loginPage.goToApplication();
    await loginPage.loginToApplication(data_login_username,data_login_password);

    /****************** Login Page - END *******************/
 
    /****************** Dashboard Page - START *******************/
    const dashboardPage = new DashboardPage(page);    
    const product_ToAdd='iphone 13 pro';
    await dashboardPage.searchProduct_And_AddToCart(product_ToAdd);
    await dashboardPage.navigateToCart();

    /****************** Dashboard Page - END *******************/

    /****************** Cart Page - START *******************/

    const cartPage = new CartPage(page);  

    console.log("Assertion for Product name on Cart Page")
    await expect(cartPage.getProductName()).toHaveText(product_ToAdd);    
    console.log('cartPage.getProductNameText(): '+ await cartPage.getProductNameText());

    // console.log('cartPage.getProductName().textContent(): '+cartPage.getProductName().textContent());
    // const productNameStatus = await cartPage.getProductName().isVisible();
    // console.log('productNameStatus: '+productNameStatus)
    // expect(productNameStatus).toBeTruthy(); 
    // await expect(cartPage.getProductName()).toHaveText(product_ToAdd);

    /****************** Cart Page - END *******************/

    //await page.pause();
});

test.afterEach(async() => {
    await new CommonUtils().waitForSomeTime(5);
});//afterEach



