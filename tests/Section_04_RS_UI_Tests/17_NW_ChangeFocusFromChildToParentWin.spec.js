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


test('Section_04_RS_UI_Tests - Change Focus From Child To Parent Window', async ({browser} )=> {

    const context = await browser.newContext(); // ----------------------------------- > (A) 
    
    const page = await context.newPage(); // ----------------------------------- > (B)
    
    const applicationURL = "https://www.rahulshettyacademy.com/loginpagePractise/";
    const msg_blinkingText = page.locator("[href*='documents-request']");
    
    console.log('Go to application: '+applicationURL);
    await page.goto(applicationURL);

    console.log('Click on the link that opens in new window');
    //msg_blinkingText.click();

    /**************** Operations on Child Window - START ****************/
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        msg_blinkingText.click(),
    ]);
     
    //newPage -> This is the new page (Opened after click operation over link)
    //.theme-btn.register-btn -> Login button
    const elementText_OnNewPage =  await newPage.locator('.theme-btn.register-btn').textContent();
    console.log('elementText_OnNewPage: '+elementText_OnNewPage);
    console.log("Assertion for Element Text present on new page");
    await expect(newPage.locator('.theme-btn.register-btn')).toHaveText('Login');
    
    /**************** Operations on Child Window - END ****************/

    /**************** Operations on Parent Window - START ****************/

    console.log("Filling 'Rajat Verma' in username textbox present on parent window");
    await page.locator('#username').fill("Rajat Verma");

    //await page.pause();

    console.log("await page.locator('#username').textContent(): " + await page.locator('#username').textContent());
    
    // console.log("Assertion for username textbox - It should contain text: 'Rajat Verma'")
    // await expect(page.locator('#username')).toContainText('Rajat Verma');

    await new Promise(resolve => setTimeout(resolve, 4000)); // 4 sec

    /**************** Operations on Parent Window - END ****************/

});
