const d = new Date(2023, 11, 20, 12, 0, 0);
const month = d.getMonth();

switch (month) {
  case 1:
    console.log('It is jan');
    break;

  case 2:
    console.log('It is feb');
    break;

  default:
    console.log('It is neither jan nor feb');
}

//challenge 1

function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      break;
    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      console.log(num1 / num2);
      break;
    case '%':
      console.log(num1 % num2);
      break;

    default:
      console.log('error');
  }
}

calculator(4, 5, '$');

//challenge 2

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('Fizzbuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
