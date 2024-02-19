// Javascript program to find the sum of nth natural number by using recursion method.
/*
function sum(num) {
  if (num > 0) {
    return num + sum(num - 1);
  } else {
    return num;
  }
}
const number = parseInt(prompt("Enter positive number"));
const result = sum(number);
console.log(`Therefore, Total sum of nth natural number is ${result}`);
*/

// Javascript program to guess the random number.
/*
function guessNum() {

  // Generating a random number from 1 to 10.
    const random = Math.floor(Math.random * 10) + 1;
//   const random = 8;

  let user = parseInt(prompt("Enter you guessing number upto 10"));

  while (random !== user) {
    user = parseInt(prompt("Enter your guessing number upto 10"));
  }
  if (random == user) {
    console.log(`congrats, you guess right number`);
  }
}
guessNum();

// console.log("Sandip");
*/

// Javascript program to find the factorial number using recursion.
/*
let num = prompt("Enter the positive integer.");

function fact(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
let result = fact(num);
console.log(`Conclusion, Output is ${result}`);
*/

// Javascript program to convert Decimal to binary.
/*
function convertToBinary(x) {
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x != 0) {
    rem = x % 2;
    console.log(
      `step${step++}:${x}/2, Remainder= ${rem},Quotient=${parseInt(x / 2)}`
    );
    x = parseInt(x / 2);
    bin += rem * i;
    i = i * 10;
  }
  console.log(`Binary:${bin}`);
}
// take input;
let num = parseInt(prompt(`Enter the decimal number`));
convertToBinary(num);
*/
// Alternative method using toString();
/*
let num = parseInt(prompt("Enter a Decimal number."));

let result = num.toString(2);
console.log(`Binary: ${result}`);
*/
// Javascript program to find the ASCII value of character
/*
const char = prompt("Enter a charater");

// const result = char.charCodeAt(0);
const result = char.codePointAt(0);
console.log(`Given, ${char}=${result}`);
*/

// Javscript program to set a Default Parameter Value for a function.\
/*
function sum(x = 9, y = 2) {
  return x + y;
}
console.log(sum(1, 3));
console.log(sum(5));
console.log(sum());
*/

// using previous parameter in Another Parameter
let calculate = function (x = 3, y = x + 7) {
  return x + y;
};
let result1 = calculate(28);
let result2 = calculate();
console.log(result1);
console.log(result2);
