const {test,expect} = require('@playwright/test');

test('Section_07_RS_UI_Tests - RahulShettyAcademy Automation Practice App - Assertion for Element Visible/Hidden', async ({page} )=> {

    const applicationURL = "https://rahulshettyacademy.com/AutomationPractice/";

    const txtBox_hide_show_example = page.locator('#displayed-text');
    const btn_hide = page.locator('#hide-textbox');
    
    await page.goto(applicationURL);

    console.log('Assertion for TextBox visible');
    await expect(txtBox_hide_show_example).toBeVisible();

    clickOnElement(btn_hide);

    await waitForSomeTime(2);
    
    console.log('Assertion for TextBox hidden');
    await expect(txtBox_hide_show_example).toBeHidden();

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

