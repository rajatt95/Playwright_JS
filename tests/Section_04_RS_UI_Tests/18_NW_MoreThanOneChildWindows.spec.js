const {test,expect} = require('@playwright/test');

test('Section_04_RS_UI_Tests - Change Focus From Child To Parent Window', async ({browser} )=> {

   
    /**************** Operations on Child Window - START ****************/
    
    const [child1,child2,child3] = await Promise.all([
        context.waitForEvent('page'),
        msg_blinkingText.click(),
    ]);
    /**************** Operations on Child Window - END ****************/

});
