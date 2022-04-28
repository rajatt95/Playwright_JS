/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Playwright JS Automation Testing from Scratch with Framework (https://www.udemy.com/course/playwright-tutorials-automation-testing/)
* Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
*/
const {test} = require('@playwright/test');

// test() -> Function (takes 1st argument as Test case name and 2nd as Anonymous function())
// {browser} -> Fixture (Available for all the tests)
// test('My First Playwright Test', async function(){
test('Section_02_RS_UI_Tests - My First Playwright Test - 01_NavigateToApplication, Direct use Fixture: Browser', async ({browser} )=> {
    
    // Step-1: Open Browser
        // Set the Browser context
        // newContext() 
            // -> This will help to create a fresh Browser instance
            // -> This can inject Cookies in the Browser
            // -> This can open the application with proxy
                // -> We can set the capabilities
            const context = await browser.newContext(); // ----------------------------------- > (A) 
                
            // newPage() -> This will be the page where automation tests will execute
            const page = await context.newPage(); // ----------------------------------- > (B)

        // What Playwright team has done
            // If you do not want to set any context (Cookies/Proxy/etc.), then, it will be done automatically
            // We do not need to write anything, just import page fixture

    //Step-2: Go to the application
        await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");

});
// {page} -> Fixture (Available for all the tests)
//only -> Only this test case will run 
//test.only('RS - My second Playwright Test - No Browser Context, Direct use Fixture: page', async ({page} )=> {

test('Section_02_RS_UI_Tests - My second Playwright Test - No Browser Context, Direct use Fixture: page', async ({page} )=> {

    //Step-1: Go to the application
    // await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
    await page.goto("https://www.google.com/");
});
