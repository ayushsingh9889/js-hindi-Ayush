//Primitive
// 7 types: String, Number, boolean, null, undefined, symbol, BigInt

const { useInsertionEffect } = require("react");

const score =100
const scoreValue =100.3
const isLoggedIn =false
const outsideTemp=null
let userEmail;
const upiId = "user@ybl"
const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id === anotherId);

const bigNumber =1234567891234324546n

//Reference (Non primitive)
// Array, Objects, Functions

const heros =["shaktiman", "baalveer", "Ayush"]

    let myObj={
        name:"Ayush",
        age: 22,
    }
    const myFunction= function(){
        console.log("hello world");
    }

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof heros);
console.log(typeof anotherId);


//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide



//**************** 
//stack(Primitive), Heap(Non-primitive)

let myYoutubename = "Ayushsinghdotcom"
let anothername = myYoutubename
anothername ="yuvrajsingh"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com"
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email="ayush@google.com"

console.log(userOne.email);
console.log(userTwo.email);