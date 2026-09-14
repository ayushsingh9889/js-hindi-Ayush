const myNums = [1, 2, 3, 4];
// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and  currval: ${currval}`);

//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "Devops course",
    price: 3500,
  },
  {
    itemName: "dsa with java course",
    price: 2999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
