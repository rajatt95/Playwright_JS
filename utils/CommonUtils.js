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

class CommonUtils{
    
    async waitForSomeTime(timeInSeconds) {
        console.log('Additional Wait for '+timeInSeconds+' seconds.');
        await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
    }

}//class

module.exports={CommonUtils};

//This is required so that other classes can also use ProductsPage.js file 
//export default new CommonUtils