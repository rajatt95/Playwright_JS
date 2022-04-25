class CommonUtils{
    
    async waitForSomeTime(timeInSeconds) {
        console.log('Additional Wait for '+timeInSeconds+' seconds.');
        await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
    }

}//class

module.exports={CommonUtils};

//This is required so that other classes can also use ProductsPage.js file 
//export default new CommonUtils