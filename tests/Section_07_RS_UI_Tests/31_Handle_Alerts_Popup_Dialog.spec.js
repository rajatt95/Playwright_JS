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

    const btn_confirm = page.locator('#confirmbtn');
    
    await page.goto(applicationURL);


    clickOnElement(btn_confirm,'Confirm button');

    // We are listening to this event
    // To accept it
    page.on('dialog' , dialog => dialog.accept());
    // To dismiss it
    // page.on('dialog' , dialog => dialog.dismiss());
   
    // await page.pause();

    await waitForSomeTime(2);
    
});


async function clickOnElement(element,elementText) {
    console.log('Clicking on: '+elementText);
    await element.click();
}


async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

