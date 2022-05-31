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
const {POM_Manager} = require('../../pageObjects/POM_Manager');

// JSON -> String -> JS Object
const credentials_login_dataSet = JSON.parse(JSON.stringify(require('../../testData/credentials_login.json')));

test('Section_11_RS_UI_Tests - POM_Optimized_Login_TestData_JSON', async ({page} )=> {

    // const data_login_username = "testtmail95@gmail.com";
    // const data_login_password = "HiRahul@123";

    const data_login_username = credentials_login_dataSet.valid_username_1;
    const data_login_password = credentials_login_dataSet.valid_password_1;

    const pom_Manager = new POM_Manager(page);
    /****************** Login Page - START *******************/
    
    //const loginPage = new LoginPage(page);
    const loginPage = pom_Manager.getLoginPage();
    await loginPage.goToApplication();
    await loginPage.loginToApplication(data_login_username,data_login_password);

    /****************** Login Page - END *******************/
 
    /****************** Dashboard Page - START *******************/
    const dashboardPage = pom_Manager.getDashboardPage();
    
    console.log('Assertions for message: Login Successfully')
    await expect(dashboardPage.getMsg_LoginSuccess()).toBeVisible();
    await expect(dashboardPage.getMsg_LoginSuccess()).toHaveText('Login Successfully');
    await expect(dashboardPage.getMsg_LoginSuccess()).toContainText('Successfully');
  
    /****************** Dashboard Page - END *******************/
    //await page.pause();
});

test.afterEach(async() => {
    await new CommonUtils().waitForSomeTime(5);
});//afterEach



