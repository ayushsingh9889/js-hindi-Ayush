// here if for in we use in object then it print the key or value
// but in array  it print also key but that's key is array key  which is sharting from 0 and it not return the main value so  we use another method  for printing key

const myobject = {
  js: "java  script",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myobject) {
  //   console.log(`${key} shortcut is  for ${myobject[key]}`);
}

// for in in array here it print keys of array
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  console.log(programming[key]);
}
