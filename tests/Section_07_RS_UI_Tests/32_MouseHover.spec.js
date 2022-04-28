const {test,expect} = require('@playwright/test');

test('RS - Playwright Test - RahulShettyAcademy Automation Practice App - Handle Alerts/Popu/Dialog', async ({page} )=> {

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

