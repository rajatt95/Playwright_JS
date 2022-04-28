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

test('Section_07_RS_UI_Tests - RahulShettyAcademy Automation Practice App - Handle Alerts/Popu/Dialog', async ({page} )=> {

    const applicationURL = "https://rahulshettyacademy.com/AutomationPractice/";

    const btn_mouseHover = page.locator('#mousehover');
    
    const link_top = page.locator("[href='#top']");
    
    await page.goto(applicationURL);

    mouseHoverOnElement(btn_mouseHover,'Button Mouse Hover');

    console.log('Assertion for Element visible - Top ');
    await expect(link_top).toBeVisible();

    console.log('Assertion for Element text - Top ');
    await expect(link_top).toHaveText('Top');

    await waitForSomeTime(2);
    
});

async function mouseHoverOnElement(element,elementText) {
    console.log('Mouse Hover on: '+elementText);
    await element.hover();
}

async function clickOnElement(element,elementText) {
    console.log('Clicking on: '+elementText);
    await element.click();
}


async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

