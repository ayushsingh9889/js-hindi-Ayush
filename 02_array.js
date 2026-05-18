const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros);

const all_new_heros = [...marvel_heros,...dc_heros ]
//console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);  




//console.log(Array.isArray("hitesh"))
//console.log(Array.from("Hitesh"))
//interesting
console.log(Array.from({name:"hitesh"}))

let age1 = 100
let age2 = 900
let age3 = 300
console.log(Array.of(age1, age2, age3));