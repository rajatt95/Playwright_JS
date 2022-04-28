const {test,expect} = require('@playwright/test');

test('Section_10_RS_UI_Tests - Screenshots_Comparison', async ({page} )=> {
    await page.goto('https://uk.flightaware.com/');
    expect(await page.screenshot()).toMatchSnapshot('uk.flightaware-prod.png');

});

