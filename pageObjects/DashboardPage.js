class DashboardPage{
    
    constructor(page){
        this.page = page;
        this.msg_login_success = page.locator("div[aria-label='Login Successfully']");
        this.msg_productAdded_ToCart = page.locator("div[aria-label='Product Added To Cart']");

        this.products = page.locator('.card-body');
        this.tab_cart = page.locator("[routerlink*=cart]");
    }//constructor

    async searchProduct_And_AddToCart(product_ToAdd){
        const productsCount = await this.products.count();
        console.log("productsCount: " + productsCount);
    
        for(let index=0;index < productsCount;index++){
            
            // Searching for b tag inside
            // Scope for search is limited; not search in the whole page
            // const products = page.locator('.card-body');
            const productName = await this.products.nth(index).locator('b').textContent();
            console.log("productName: "+productName);
    
            if(productName === product_ToAdd){
                console.log('Adding '+productName+' to the Cart.')
                await this.products.nth(index).locator('text= Add To Cart').click();
                break;
            }//if
        }//for
    }//searchProduct_And_AddToCart()


    async navigateToCart(){
        await this.tab_cart.click();
        await this.page.waitForLoadState('networkidle');
    }

    getMsg_LoginSuccess(){
        this.msg_login_success.waitFor();
        return this.msg_login_success;
    }

    getMsg_ProductAdded_ToCart(){
        this.msg_productAdded_ToCart.waitFor();
        return this.msg_productAdded_ToCart;
    }
}//class

module.exports = {DashboardPage};