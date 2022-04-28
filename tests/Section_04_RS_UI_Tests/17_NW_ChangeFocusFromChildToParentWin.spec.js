const {test,expect} = require('@playwright/test');

test('RS - Playwright Test - Change Focus From Child To Parent Window', async ({browser} )=> {

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
