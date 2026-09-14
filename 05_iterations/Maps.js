// Maps:- the maps object key- value pairs and remembers the original insertion order of the keys.  Any value  (both object  and prinmitive values) may be  used as either a key or  a value

// it not repete the same value
// Maps are iteratebale 
// it store in order and unique value
const map = new Map();
map.set("IN", "India");
map.set("USA", "united states of america");
map.set("Fr", "Francw");
map.set("JER", "Jermany");

// console.log(map);

for (const [Key, value] of map) {
//   console.log(Key, ":-", value);
}


// object are not iteratebale in  normally but we can use Object.entries() method to convert the object into an array of key-value pairs, which can then be iterated over using a for...of loop.
const myObject = {
    js: 'java Script',
    cpp: "c++",
    py: 'python',
}

for (const [key, value] of Object.entries(myObject)) {
  // console.log(key, ":-", value);
}




// use  for in in maps
for (const key in map) {
     console.log(key);
  
}