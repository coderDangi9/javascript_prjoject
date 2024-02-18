// Javascript program to find the sample calculator.
/*let operator = prompt("To choose '+', '-','/', '*' & '&' ");
const n1 = parseFloat(prompt("Enter first value"));
const n2 = parseFloat(prompt("Enter second value"));

if (operator == "+") {
  console.log(`${n1}+${n2} = ${n1 + n2}`);
} else if (operator == "-") {
  console.log(`${n1}-${n2} = ${n1 - n2}`);
} else if (operator == "*") {
  console.log(`${n1}*${n2} = ${n1 * n2}`);
} else if (operator == "/") {
  console.log(`${n1}/${n2} = ${n1 / n2}`);
} else if (operator == "%") {
  console.log(`${n1}%${n2} = ${n1 % n2}`);
}

*/

// Javascript program to find the sum of Natural numbers.
/*
let sum = 0;
let num = parseInt(prompt("Enter the positive number."));
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(`Total sum is ${sum}`);

*/
//Javascript program to check if the number have same last digit.
/*
const a = prompt("Enter first integer");
const b = prompt("Enter second integer");
const c = prompt("Enter third integer");

const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

if (result1 == result2 && result1 == result3) {
  console.log(`${a},${b} and ${c} have the same last digits.`);
} else {
  console.log(`${a},${b} and ${c} haven't the same last digits.`);
}
*/

// Find HCF using for LOOP
/*
let num1 = prompt("Enter a first positive integer.");
let num2 = prompt("Enter a second positive integer.");
while (num1 != num2) {
  if (num1 > num2) {
    num1 -= num2;
  } else {
    num2 -= num1;
  }
}
console.log(`HCF is ${num1}`);

for (let i = 1; i <= num1 && i <= num2; i++) {
  //check if isfactor of both integers.
  if (num1 % i == 0 && num2 % i == 0) {
    hcf = i;
  }
}
console.log(`HCF of ${num1} and ${num2}is ${hcf}`);


*/

// Find LCM using while loop and if statement.
/*
const n1 = prompt("Enter the first value");
const n2 = prompt("Enter the second value");

//Higher number among n1 and n2 is store in Min.
let min = n1 > n2 ? n1 : n2;
// whileLoop
while (true) {
  if (min % n1 == 0 && min % n2 == 0) {
    console.log(`The LCM of${n1} and ${n2} is ${min}`);
    break;
  }
  min++;
}
*/
// Find LCM while using HCF
/*
let hcf;
const n1 = prompt("Enter the first value");
const n2 = prompt("Enter the second value");
for (let i = 1; i < n1 && i < n2; i++) {
  if (n1 % i == 0 && n2 % i == 0) {
    hcf = i;
  }
}
let lCM = (n1 * n2) / hcf;
console.log(`The LCM of ${n1} and ${n2} is ${lCM}`);
*/

// Javascript program to find the factors of a Number.
const num = prompt("Enter the number to find factorial");
console.log(`The factors of ${num} is :`);

for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}
