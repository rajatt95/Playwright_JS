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

test('Section_06_RS_UI_Tests - RahulShettyAcademy Client App Login - Assertion for Order ID Order History Page', async ({page} )=> {

    const applicationURL = "https://www.rahulshettyacademy.com/client/";

    const txtBox_username = page.locator('#userEmail');
    const txtBox_password = page.locator('#userPassword');
    const btn_Login = page.locator('#login');
    
    const data_login_username = "testtmail95@gmail.com";
    const data_login_password = "HiRahul@123";

    const msg_login_success = page.locator("div[aria-label='Login Successfully']");

    const products = page.locator('.card-body');
    const product_ToAdd='iphone 13 pro';

    const msg_productAdded_ToCart = page.locator("div[aria-label='Product Added To Cart']");

    await loginToApplication(applicationURL, page, data_login_username, txtBox_username, data_login_password, txtBox_password, btn_Login, msg_login_success);

    /****************** Product Add to Cart - START *******************/
    const productsCount = await products.count();
    console.log("productsCount: " + productsCount);

    for(let index=0;index<productsCount;index++){
        
        // Searching for b tag inside
        // Scope for search is limited; not search in the whole page
        // const products = page.locator('.card-body');
        const productName = await products.nth(index).locator('b').textContent();
        console.log("productName: "+productName);

        if(productName === product_ToAdd){
            console.log('Adding '+productName+' to the Cart.')
            await products.nth(index).locator('text= Add To Cart').click();

            console.log('Assertions for message: Product Added To Cart')
            await expect(msg_productAdded_ToCart).toBeVisible();
            await expect(msg_productAdded_ToCart).toHaveText('Product Added To Cart');
            await expect(msg_productAdded_ToCart).toContainText('Added To Cart');
            
            break;
        }
    }
    /****************** Product Add to Cart - END *******************/


    /****************** Cart Page - START *******************/

    const btn_cart = page.locator("[routerlink*=cart]");
    console.log('Clicking on Cart button')
    await btn_cart.click();

    // Ways to find element on the page using text
    // page.locator("text=Add to Cart")
    // page.locator("h3:has-text("+productName+")")
    
    // Wait for element -> This is required because Playwright is not supporting Auto-wait for isVisible()
    // Auto-Wait -> https://playwright.dev/docs/actionability
    await page.locator('div li').first().waitFor();

    console.log("Assertion for Product name on Cart Page")
    //Pseudo text
    const productNameStatus = await page.locator("h3:has-text('"+product_ToAdd+"')").isVisible();
    expect(productNameStatus).toBeTruthy();

    const btn_checkout = page.locator("text=Checkout");

    console.log('Clicking on Checkout button')
    await btn_checkout.click();

    /****************** Cart Page - END *******************/
    
    /****************** Checkout Page - START *******************/
        /***** Select value from Dropdown - START ******/
    
        const drpdwn_selectCountry = page.locator("[placeholder='Select Country']");

        const country_ToSearch = 'India';
    
        await page.waitForLoadState('networkidle');

        console.log("Filling 'ind' in Select Country slowly")
        //{delay:100} -> This will help to type Ind slowly
        drpdwn_selectCountry.type('ind', { delay:1000 } );
    
        const options_country = page.locator('.ta-results');
        console.log("Waiting for Countries to load after search for 'ind'");
        await options_country.waitFor();
    
        const countriesCount =  options_country.locator('button').count();
    
        for(let index=0;index<countriesCount;index++){
            
            const countryName = await options_country.locator('button').nth(index).textContent();
            console.log("countryName: "+countryName);
    
            //trim() -> To remove the spaces from country name
            if(countryName.trim() === country_ToSearch){
                console.log('Clicking on '+country_ToSearch+'.')
                await options_country.locator('button').nth(index).click();
                break;
            }
        }
    
        /***** Select value from Dropdown - END ******/
    

    /***** Assertion for Email ID - START ******/

    //const txtBox_email_checkoutPage = page.locator(".user__name [type='text']").nth(0);
    const txtBox_email_checkoutPage = page.locator(".user__name [type='text']").first();
    console.log('Assertion for EMail ID on Checkout page');
    await expect(txtBox_email_checkoutPage).toContainText(data_login_username);

    const btn_placeOrder = page.locator('.action__submit');
    console.log('Clicking on Place Order button');
    await btn_placeOrder.click();

    /***** Assertion for Email ID - END ******/

    /****************** Checkout Page - END *******************/    
 
    /****************** Order Placed Page - START *******************/

    const msg_orderPlaced = page.locator("h1[class='hero-primary']");
    console.log('Assertions for message:  Thankyou for the order.')
    await expect(msg_orderPlaced).toBeVisible();
    await expect(msg_orderPlaced).toContainText('Thankyou for the order.');
   
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("orderID: "+orderID);

    const tab_orders = page.locator("button[routerlink*='myorders']");
    await tab_orders.click();

    /****************** Order Placed Page - END *******************/

    /****************** Order History Page - START *******************/

    const rows_orders = page.locator("tbody tr");
    for(let i=0;i<await rows_orders.count();i++){
        // tbody tr th
        const orderID_Table = await rows_orders.nth(i).locator('th').textContent();
        
        // orderID:         | 62658560e26b7e1a10e8b092 |
        // orderID_Table:     62658560e26b7e1a10e8b092
        if(orderID.includes(orderID_Table)){
            
            console.log('Clicking on the View button to see Order details');
            // tbody tr button
            await rows_orders.nth(i).locator('button').first().click(); //First button is View
            break;
        }//if       
    }//for

    /****************** Order History Page - END *******************/

    await page.pause();

    await waitForSomeTime(2);

    
});



async function waitForSomeTime(timeInSeconds) {
    console.log('Additional Wait for '+timeInSeconds+' seconds.');
    await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
}

async function loginToApplication(applicationURL, page, data_login_username, txtBox_username, data_login_password, txtBox_password, btn_Login, msg_login_success) {
    console.log('Go to application: ' + applicationURL);
    await page.goto(applicationURL);

    console.log('Filling ' + data_login_username + ' in Username textBox');
    await txtBox_username.fill(data_login_username);

    console.log('Filling ' + data_login_password + ' in Password textBox');
    await txtBox_password.fill(data_login_password);

    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec

    console.log('Click on Log In button');
    await btn_Login.click();

    console.log('Assertions for message: Login Successfully')
    await expect(msg_login_success).toBeVisible();
    await expect(msg_login_success).toHaveText('Login Successfully');
    await expect(msg_login_success).toContainText('Successfully');

}

