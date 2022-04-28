/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Playwright JS Automation Testing from Scratch with Framework (https://www.udemy.com/course/playwright-tutorials-automation-testing/)
* Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
*/

/******************************************************** */

class CheckoutPage{
    
    constructor(page){
        this.page = page;
        this.txtBox_email = page.locator(".user__name [type='text']").nth(0);
        this.btn_placeOrder = page.locator('.action__submit');
        this.drpdwn_selectCountry = page.locator("[placeholder='Select Country']");
        this.options_country = page.locator('.ta-results');

    }//constructor

    get_TxtBox_Email(){
        this.txtBox_email.waitFor();
        return this.txtBox_email;
    }
  
    async placeOrder(){
        console.log('Clicking on Place Order button')
        await this.btn_placeOrder.click();
    }

    async searchCountryAndSelect(inputToTextBox,country_ToSearch){
        console.log("Filling "+inputToTextBox+" in Select Country slowly")
        //{delay:100} -> This will help to type Ind slowly
        this.drpdwn_selectCountry.type(inputToTextBox, { delay:1000 } );

        console.log("Waiting for Countries to load after search for '"+inputToTextBox+"'");
        await this.options_country.waitFor();

        const countriesCount =  this.options_country.locator('button').count();

        for(let index=0;index<countriesCount;index++){
            const countryName = await this.options_country.locator('button').nth(index).textContent();
            console.log("countryName: "+countryName);

            //trim() -> To remove the spaces from country name
            if(countryName.trim() === country_ToSearch){
                console.log('Clicking on '+country_ToSearch+'.')
                await this.options_country.locator('button').nth(index).click();
                break;
            }//if
        }//for
    }//searchProduct_And_AddToCart()
}//class

module.exports = {CheckoutPage};