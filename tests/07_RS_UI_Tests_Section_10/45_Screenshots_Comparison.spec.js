const {test,expect} = require('@playwright/test');

test('RS - Playwright Test - Screenshots_Comparison', async ({page} )=> {
    await page.goto('https://uk.flightaware.com/');
    expect(await page.screenshot()).toMatchSnapshot('uk.flightaware-prod.png');

});

