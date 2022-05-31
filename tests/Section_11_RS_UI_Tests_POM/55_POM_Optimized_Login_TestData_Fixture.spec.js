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
const {customtest} = require('../../utils/test-base');

customtest('Section_11_RS_UI_Tests - POM_Optimized_Login_TestData_FixtureFile', async ({page, testData_Login})=> {

    const data_login_username = testData_Login.username;
    const data_login_password = testData_Login.password;

    const pom_Manager = new POM_Manager(page);
    /****************** Login Page - START *******************/
    
    //const loginPage = new LoginPage(page);
    const loginPage = pom_Manager.getLoginPage();
    await loginPage.goToApplication();
    await loginPage.loginToApplication(data_login_username,data_login_password);

    /****************** Login Page - END *******************/
 
});

test.afterEach(async() => {
    await new CommonUtils().waitForSomeTime(5);
});//afterEach



