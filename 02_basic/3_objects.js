// singleton
// Object.create{}


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ankit",
    "Full name": "Ankit JAngid",
    [mySym]: "myKey1",
    age: 18,
    locatoin: "Jaipur",
    email: "admin@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],

} 

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full name"]);
// console.log(jsUser[mySym]);



jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());