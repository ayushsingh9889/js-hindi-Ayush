// for loop-: for loop is used to repeat a block of code a certain number of times. It consists of three parts: initialization, condition, and increment/decrement. The loop will continue to execute as long as the condition is true.

for (let i = 0; i < 10; i++){
    const element = i;
    if(element ==5){
        // console.log("5 is the best number");
        
    }
    // console.log(element);

}
// console.log(element); // ReferenceError: element is not defined because it is block scoped variable and it is only accessible within the block it is defined in.


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop  value : ${i}`);
    
    for (let j = 0; j <=  10; j++) {
        // console.log(`Inner loop  vaalue is ${j} and inner loop ${i}`);
        // console.log(i+'*' + j + '=' + i*j);
            }
}


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// BREAK AND CONTINUE


// for (let index = 1; index < 20; index++) {
//     if(index ==5){
//         console.log(`Detected`);
//         break;  // break is  used for break the condition in between
//     }
//       console.log(`value of i is ${index}`);
    
    
// }
for (let index = 1; index < 20; index++) {
    if(index ==5){
        console.log(`Detected`);
        continue;  // continue is give one time after it continue 
    }
      console.log(`value of i is ${index}`);
    
    
}


