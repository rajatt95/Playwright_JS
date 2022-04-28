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

const base = require('@playwright/test');

exports.customtest = base.test.extend(
{
    testData_Login : {
        username : "testtmail95@gmail.com",
        password : "HiRahul@123"
    }    
}
)




