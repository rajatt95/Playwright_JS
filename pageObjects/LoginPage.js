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

class LoginPage{
    
    constructor(page){
        this.page = page;
        this.txtBox_username = page.locator('#userEmail');
        this.txtBox_password = page.locator('#userPassword');
        this.btn_Login = page.locator('#login');
        this.msg_incorrect_username_password = page.locator('[style*=block]');
    }//constructor



    getMsg_Incorrect_username_password(){
        //this.tab_home.click();
        this.msg_incorrect_username_password.waitFor();
        return this.msg_incorrect_username_password;
    }

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