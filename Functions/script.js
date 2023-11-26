function sayHello() {
  console.log('hello world');
}

sayHello();

function subtract(num1, num2) {
  return num1 - num2;
}

const result = subtract(10, 2);
console.log(result, subtract(25, 5));

//nested functions
function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first();

//challenge 1

function getCelsius(Fahrenheit) {
  return ((Fahrenheit - 32) * 5) / 9;
}

console.log(getCelsius(32));

//challenge 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(min);
  console.log(max);
}

minMax([54, 32, 12, 65, 78]);

//challenge 3  immediately invoked function expression
((l, w) => {
  const area = l * w;

  console.log(area);
})(10, 5);
