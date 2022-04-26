const base = require('@playwright/test');

exports.customtest = base.test.extend(
{
    testData_Login : {
        username : "testtmail95@gmail.com",
        password : "HiRahul@123"
    }    
}
)




