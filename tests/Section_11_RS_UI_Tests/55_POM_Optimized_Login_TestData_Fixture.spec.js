const {test,expect} = require('@playwright/test');
const {CommonUtils}=require('../../utils/CommonUtils');
const {POM_Manager} = require('../../pageObjects/POM_Manager');
const {customtest} = require('../../utils/test-base');

customtest('RS - Playwright Test - POM_Optimized_Login_TestData_FixtureFile', async ({page, testData_Login})=> {

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



