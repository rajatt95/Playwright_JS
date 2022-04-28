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

test('Section_07_RS_UI_Tests - RahulShettyAcademy Automation Practice App - Assertion with Go Back and Forward', async ({page} )=> {

    const rs_applicationURL = "https://rahulshettyacademy.com/AutomationPractice/";
    const google_URL = "https://www.google.com/";

    console.log('Go to application: '+rs_applicationURL);
    page.goto(rs_applicationURL);
    await waitForSomeTime(2);

    console.log('Go to application: '+google_URL);
    page.goto(google_URL);
    await waitForSomeTime(2);

    await expect(page).toHaveTitle('Google');

    await page.goBack();
    await waitForSomeTime(2);

    await expect(page).toHaveTitle('Practice Page');

    await page.goForward();
    await waitForSomeTime(2);

    await expect(page).toHaveTitle('Google');
    await waitForSomeTime(2);
});



async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

