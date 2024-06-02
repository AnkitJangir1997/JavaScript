// Primitive

//  7 types : string, number, boolearn, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567894561n




//  Reference ( Non primitive )

//  Array, Objects, Funnction

const heros = [ "hero 1", "hero 2", "hero 3" ]
let myobj = {
    name: "Ankit",
    age: 25,
}

const myFunction = function(){
    console.log("Hello Word");
}

console.log(typeof score);

