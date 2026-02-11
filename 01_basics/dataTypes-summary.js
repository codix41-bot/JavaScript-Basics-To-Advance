// 1- Primitive data type
// 7 typs: String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.33

const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 74545649869465655654n





// Referance (Non Primitive)
// Array, Object, Functions

const student = ["Amit", "Raj", "Amit"]

let myObj = {
    name: "Amit",
    age: 25
}

const myFunctions = function(){
    console.log("Hello World");
}


// Link to chekc data types into JavaScript Official Documentation
// https://262.ecma-international.org/5.1/#sec-11.4.3
