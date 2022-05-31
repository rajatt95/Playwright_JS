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
const {CommonUtils}=require('../../utils/CommonUtils');
// const {LoginPage} = require('../../pageObjects/LoginPage');
// const {DashboardPage} = require('../../pageObjects/DashboardPage');
// const {CartPage} = require('../../pageObjects/CartPage');
// const {CheckoutPage} = require('../../pageObjects/CheckoutPage');
const {POM_Manager} = require('../../pageObjects/POM_Manager');


test('Section_11_RS_UI_Tests - RahulShettyAcademy Client App Login - POM_Optimized_Login_Assert_Email_OnCheckoutPage', async ({page} )=> {

    const data_login_username = "testtmail95@gmail.com";
    const data_login_password = "HiRahul@123";

    const pom_Manager = new POM_Manager(page);
    /****************** Login Page - START *******************/
    
    //const loginPage = new LoginPage(page);
    const loginPage = pom_Manager.getLoginPage();
    await loginPage.goToApplication();
    await loginPage.loginToApplication(data_login_username,data_login_password);

    /****************** Login Page - END *******************/
 
    /****************** Dashboard Page - START *******************/
    //const dashboardPage = new DashboardPage(page);    
    const dashboardPage = pom_Manager.getDashboardPage();
    const product_ToAdd='iphone 13 pro';
    await dashboardPage.searchProduct_And_AddToCart(product_ToAdd);
    await dashboardPage.navigateToCart();

    /****************** Dashboard Page - END *******************/

    /****************** Cart Page - START *******************/

    //const cartPage = new CartPage(page);  
    const cartPage = pom_Manager.getCartPage();
 
    cartPage.goToCheckoutPage();

    /****************** Cart Page - END *******************/

    /****************** Checkout Page - START *******************/

            /***** Assertion for Email ID - START ******/
    //const checkoutPage = new CheckoutPage(page); 
    const checkoutPage = pom_Manager.getCheckoutPage();
        
    console.log('Assertion for EMail ID on Checkout page');
    console.log('checkoutPage.get_TxtBox_Email().textContent(): '+checkoutPage.get_TxtBox_Email().textContent());
    await expect(checkoutPage.get_TxtBox_Email()).toContainText(data_login_username);

            /***** Assertion for Email ID - END ******/

    /****************** Checkout Page - END *******************/

    //await page.pause();
});

test.afterEach(async() => {
    await new CommonUtils().waitForSomeTime(5);
});//afterEach



