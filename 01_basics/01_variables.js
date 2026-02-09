const accountId = 124356
let accountEmail = "inder@gmail.com"
var accountPassword = "124565"
accountCity = "Jaipur"
let accountState;

// accountId = 25  //not allowed

accountEmail = "aj@gmail.com"
accountPassword = "111212"
accountCity = "Delhi"


console.log(accountId);
/*
Perfer no use to var
beacuse of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity, accountState]);
