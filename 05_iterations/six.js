// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((item) => {
// //   console.log(item);  // not print or return we not do it simplly
//   return item;
// });
// console.log(values);

// basic of filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 5);
// const newNums = myNums.filter((num) => {
//   // if we here use scope  then we need to use return function
//   return num > 5;
// });

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

const books = [
  { tittle: "book one", genre: "fiction", publish: 1981, edition: 1981 },
  { tittle: "book two", genre: "non-fiction", publish: 1981, edition: 1992 },
  { tittle: "book three", genre: "history", publish: 1981, edition: 1999 },
  { tittle: "book four", genre: "non-fiction", publish: 2001, edition: 2019 },
  { tittle: "book five", genre: "science", publish: 1551, edition: 2004 },
  { tittle: "book six", genre: "fiction", publish: 2014, edition: 2025 },
  { tittle: "book seven", genre: "history", publish: 1981, edition: 2010 },
  { tittle: "book eight", genre: "science", publish: 1981, edition: 2009 },
];

let userBooks = books.filter((bk) => bk.genre === "history");
const userbooks = books.filter((bk) => {
  return bk.publish >= "2000" && bk.genre === "history";
});

console.log(userbooks);
