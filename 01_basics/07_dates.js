//date standerd is start from 1970
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString);
console.log(typeof myDate)



//let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date(2023,0,23,5,3)
//console.log(myCreatedDate.toDateString());

let myCreaditDate =new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleDateString());
let myTimeStamp =Date.now()

console.log(myTimeStamp);
console.log(myCreaditDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());


//`${newDate.getDay()} and the time is`

newDate.toLocaleString('default',{
weekdayL:"long",

}
)
