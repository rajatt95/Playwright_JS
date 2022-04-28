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

class CartPage{
    
    constructor(page){
        this.page = page;
        this.productName = page.locator("div[class='cartSection'] h3");     
        this.btn_checkout = page.locator("text=Checkout");
    }//constructor

    getProductName(){
        this.productName.waitFor();
        return this.productName;
    }

    getProductNameText(){
        this.productName.waitFor();
        return this.productName.textContent();
    }


    async goToCheckoutPage(){
        console.log('Clicking on Checkout button')
        await this.btn_checkout.click();
    }
  
}//class

module.exports = {CartPage};