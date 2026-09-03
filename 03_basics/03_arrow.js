const user = {
    username: "Ayush",
    price: 999,


    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
    }
    

}

// user.welcomeMessage   // it don't print
// user.welcomeMessage();  // It print
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Ayush"
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//     let username = "Ayush"
//     console.log(this.username);
//     // console.log(this.username)
// }
// chai()

//  const chai = ()=>{
//     let username = "Ayush"
//     console.log(this);
    
// }


// chai()



// +++++++++++  Arrow function +++++++++++++++++++
// const addTwo =(num1, num2) =>{
//     return num1 + num2

// }


// const addTwo = (num1, num2) =>  num1 + num2; // second way of delaration
// const addTwo = (num1, num2) =>  (num1 + num2);
const addTwo = (num1, num2) => ({username: "Ayush"})

console.log(addTwo(17,15))


const myarray = [1,2,3,4,5]
// myarray.forEach()