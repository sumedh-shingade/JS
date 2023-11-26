//challenge 1
// const myString = 'developer';
// let myNewString;

// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// console.log(myNewString);

//challenge 2

// let x;
// x = Math.floor(Math.random() * 100 + 1);
// let y = Math.floor(Math.random() * 50 + 1);

// let sum, difference, product, quotient, remainder;
// sum = x + y;
// difference = x - y;
// product = x * y;
// quotient = x / y;
// remainder = x % y;

// console.log(sum);
// console.log(difference);
// console.log(product);
// console.log(quotient);
// console.log(remainder);

//JSON challenge
let x;

const library = {
  title: 'hello',
  author: 'james clear',
  status: {
    own: true,
    reading: false,
    read: false,
  },
};

x = library.status['read'] = true;
const { title } = library;

const { title: firstBook } = library;

x = JSON.stringify(library);

console.log(x);
