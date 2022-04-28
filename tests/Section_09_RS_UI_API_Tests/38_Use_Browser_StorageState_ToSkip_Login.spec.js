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

const applicationURL = "https://www.rahulshettyacademy.com/client/";

let webContext;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(applicationURL);
    await page.locator('#userEmail').fill('testtmail95@gmail.com');
    await page.locator('#userPassword').fill('HiRahul@123');
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');

    // Store application stated in json file.
    await context.storageState({path:'state.json'});

    // Creating a webContext using this json file
    webContext = await browser.newContext({storageState:'state.json'});

});//beforeAll

test('Section_09_RS_UI_API_Tests - RahulShettyAcademy Client App Login - Skip Login using Browser Context (JSON file): Assert Tab - Home', async ()=> {
    const page = await webContext.newPage(); 
    page.goto(applicationURL);
    const tab_Home = page.locator("[routerlink='/dashboard/']");
    console.log('Assertions for tab: Home')
    await expect(tab_Home).toBeVisible();   
    
});

test('Section_09_RS_UI_API_Tests - RahulShettyAcademy Client App Login - Skip Login using Browser Context (JSON file): Assert Tab - Sign Out', async ()=> {
    const page = await webContext.newPage(); 
    page.goto(applicationURL);
    const tab_SignOut = page.locator("[class='fa fa-sign-out']");
    console.log('Assertions for tab: Sign Out')
    await expect(tab_SignOut).toBeVisible();  
});

test.afterEach(async() => {
    await waitForSomeTime(2);    
});//afterEach

async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

