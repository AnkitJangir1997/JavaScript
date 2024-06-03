// console.log("Dates IN Js")

// Dates

let myDate = new Date()
// console.log( typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(typeof myDate.toTimeString());

// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date(2024, 0, 23, 5, 6)
let myCreatedDate = new Date("01-01-2024")


// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDate() +  1);
// console.log(newDate.getDay());


newDate.toLocaleDateString('default', {
    weekday: "long"
} )