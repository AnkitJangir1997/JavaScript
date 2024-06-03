console.log("Ankit");
const accountId = 14
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 not allow to change const var

// console.log(accountId);

accountEmail = "aj@google.com"
accountPassword = "123123"
accountCity = "raj"
let accountState
/*
Prefer not use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
