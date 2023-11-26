//FOREACH method of array

const socials = ['facebook', 'twitter', 'insta'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//   console.log(item);
// });

socials.forEach((item) => console.log(item));

//FILTER method of array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers);

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenDouble = numbers1
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2);
// console.log(evenDouble);

//challenge

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter((ppl) => ppl.age <= 25)
  .map((ppl) => ({
    name: ppl.firstName + ' ' + ppl.lastName,
    email: ppl.email,
  }));
console.log(youngPeople);

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.filter((number) => number > 0);
console.log(positiveSum);
