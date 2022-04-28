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

   
    /**************** Operations on Child Window - START ****************/
    
    const [child1,child2,child3] = await Promise.all([
        context.waitForEvent('page'),
        msg_blinkingText.click(),
    ]);
    /**************** Operations on Child Window - END ****************/

});
