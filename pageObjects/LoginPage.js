class LoginPage{
    
    constructor(page){
        this.page = page;
        this.txtBox_username = page.locator('#userEmail');
        this.txtBox_password = page.locator('#userPassword');
        this.btn_Login = page.locator('#login');

    }//constructor

    async goToApplication(){
        const applicationURL = "https://www.rahulshettyacademy.com/client/";
        console.log('Go to application: ' + applicationURL);
        await this.page.goto(applicationURL);
    }//goToApplication()

    async loginToApplication(username,password){
        console.log('Filling ' + username + ' in Username textBox');
        await this.txtBox_username.fill(username);

        console.log('Filling ' + password + ' in Password textBox');
        await this.txtBox_password.fill(password);
       
        console.log('Clicking on Login button');
        await this.btn_Login.click();

        await this.page.waitForLoadState('networkidle');
    }//loginToApplication()

}//class

module.exports = {LoginPage};