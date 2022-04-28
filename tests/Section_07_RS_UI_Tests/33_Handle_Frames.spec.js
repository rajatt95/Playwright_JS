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

//NW -> Playwright unable to scroll to Frame element 
test('Section_07_RS_UI_Tests - RahulShettyAcademy Automation Practice App - Handle Frames', async ({page} )=> {

    const applicationURL = "https://rahulshettyacademy.com/AutomationPractice/";

    await page.goto(applicationURL);

    // courses-iframe -> This is the ID of this frame
    const frame_courses = page.frameLocator('#courses-iframe');

    // frame_courses has the acces of this frame (which has ID courses-iframe)
    // Perform operations on the elements in this Frame
    // li a[href*='lifetime-access'] -> This CSS seector is giving 2 elements count (1 visible, 1 hidden)
    await frame_courses.locator(" li a[href*='lifetime-access']:visible").click();

    const frame_courses_link_more = frame_courses.locator('.navigation .dropdown-toggle').first();
    mouseHoverOnElement(frame_courses_link_more,'Button Mouse Hover');
    
    await expect(frame_courses.locator("[href*='about-my-mission']").first()).toContainText('About us');

    await waitForSomeTime(6);
    
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

