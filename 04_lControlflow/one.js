// here var is  inside the block of if statement, so it is not accessible outside the block but it also access outer block because of var keyword, if we use let or const then it will not be accessible outside the block.

//let is used to declare a block-scoped variable, which means it is only accessible within the block it is defined in. In this case, since 'power' is declared with 'let' inside the if statement, it will not be accessible outside of that block.

//const is used to declare a block-scoped constant, which means it is also only accessible within the block it is defined in. Similar to 'let', if 'power' were declared with 'const' inside the if statement, it would not be accessible outside of that block.

// if

// const isuserloggedin = true;
// const Temperature = 41;

// if (Temperature > 40) {
//     console.log("It's hot outside!");
// }else{
//     console.log("Temperature is not that high.");
// }

// console.log("execute");

// 2<=2
// <, >, <=, >=, ==, !=, ===, !==

/* const score = 220;
 if (score > 100) {
   let power = "fly";

  console.log(`user power: ${power}`);
 }

 console.log(`user power: ${power}`);*/

const balence = 1000;
//Here we only written one line like this  if  we want to write more than one line then we have to use , and  also use {] curly braces.

// but this is not a good practice to write like this because it is not readable and also it is not a good practice to write more than one line in if statement without using curly braces.
//  if (balence > 500)  console.log("You can buy the product"),  console.log("You can also buy the product");

/*if(balence < 500) {
console.log("less then 500");
}else if(balence<750){
    console.log("less then 750");
}else if(balence<900){
    console.log("less then 900");
}
else{
console.log("more then 900");
}*/



const userloggedin = true;
const debitcard = true;
const loggedinFromGoogle = false;
const loggrdinFromEmail = true;

if (userloggedin && debitcard && 2 == 3) {
  console.log("Allow to buy the course.");
}

if (userloggedinFromGoogle || loggrdinFromEmail) {
  console.log("User is logged in.");
}
