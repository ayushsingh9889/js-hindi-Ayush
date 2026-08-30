// let a = 10
// const b = 20
// var c = 30

// we dont't use var because var is not good

//  var c = 300
let a = 300  // globel scope



if(true){
  let a = 10; // local scope
  const b = 20; // local scope
//   console.log("inner:", a);
}



// for (let i =0; i<Array.length; i++){
//     const element = array[i];
// }



// console.log(a);
// console.log(b);
// console.log(c);


function One(){
    const username = "Ayush"

    function two(){
        const website ="youtube"
        console.log(username);
    }

    // console.log(website);
    two();
}

// One();

if(true){
    const username ="Ayush"
    if(username == "Ayush"){

        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website);
}
// console.log(username)


//  +++++++++++ Interesting ++++++++++++++++
console.log(addOne(5));
function  addOne(num){
    return num +1;
}

// addOne (5)

addTwo(5);
const addTwo = function(num){
    return num +2
}
// addTwo(5)
