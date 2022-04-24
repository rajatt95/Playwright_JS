const {test,expect} = require('@playwright/test');

test('RS - Playwright Test - RahulShettyAcademy Automation Practice App - Handle Alerts/Popu/Dialog', async ({page} )=> {

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

