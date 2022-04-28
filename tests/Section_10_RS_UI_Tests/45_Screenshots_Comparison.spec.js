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

test('Section_10_RS_UI_Tests - Screenshots_Comparison', async ({page} )=> {
    await page.goto('https://uk.flightaware.com/');
    expect(await page.screenshot()).toMatchSnapshot('uk.flightaware-prod.png');

});

