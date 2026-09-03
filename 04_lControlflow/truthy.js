/**
 * Truthy and Falsy values in JavaScript
 * 
 * falsy value: wwhich evaluates to false in a boolean context. In JavaScript, the following values are considered falsy:
 * ex-: false,0, -0, 0n, "", null, undefined, NaN(not an number), bigint(0), document.all
 * 
 * truthy value: except falsy value all other values are truthy value.
 * 
 * ex-: "0", "false", [], {}, function() {}, 1, -1, Infinity, -Infinity, new Date(), /regex/, Symbol(), etc.
 * 
 * In JavaScript, truthy and falsy values are used in conditional statements to determine the flow of execution based on the truthiness or falsiness of a value. A truthy value is any value that evaluates to true in a boolean context, while a falsy value is any value that evaluates to false.
 * 
 * Falsy    
 * In JavaScript, truthy and falsy values are used in conditional statements to determine the flow of execution based on the truthiness or falsiness of a value. A truthy value is any value that evaluates to true in a boolean context, while a falsy value is any value that evaluates to false.
 * 
 * Falsy values in JavaScript include:
 * - false: The boolean value false.
 * - 0: The number zero.
 
 */


const userEmail = "ayush.singh281022@gmail.com"
/*if(userEmail){
    console.log("got user email")
}
if (userEmail.length === 0) {
  console.log("Array is empty");
} else {
  console.log("user don't have email");
}
*/

const emptyobject = {};
if (Object.keys(emptyobject).length === 0) {
  console.log("Object is empty");
}


// NULLISH COALESING OPERATOR (??): nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand. It is used to provide a default value for variables that may be null or undefined.


let val1;
// val1 = 5??10; // val1 will be 5 because it is not null or undefined
// val1 = null??10 // if  first value is null or undefined then it will return the second value otherwise it will return the first value.
// val1 = undefined ?? 10

val1 = null ?? 10 ?? 20; // val1 will be 10 because it is null
console.log(val1); // Output: 10


//TERNARY OPERATOR: The ternary operator is a conditional operator that takes three operands: a condition, an expression to evaluate if the condition is true, and an expression to evaluate if the condition is false. It is often used as a shorthand for simple if-else statements.

// condition ? expressionIfTrue : expressionIfFalse


const iceTeaPrice = 100;
iceTeaPrice >= 80
  ? console.log("You can buy the ice tea.")
  : console.log("You can't buy the ice tea.");
