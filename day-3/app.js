// To find the number is prime
/*
let num = parseInt(prompt("Enter the positive number"));
let isPrime = true;
if (num === 1) {
  console.log("1 is neither prime nor ");
} else if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num} is prime`);
  } else {
    console.log(`${num} is not prime`);
  }
}
*/

// Javascript program to print all prime
/*
let n = parseInt(prompt("Enter the positive number."));
isPrime = [];
for (let j = 3; j < n; j++) {
  for (let i = 2; i < j; i++) {
    if (j % i != 0) {
      isPrime.push(j);
    }
  }
}
console.log(isPrime);
*/
//javascript program to find the factorial number.
/*
let num = parseInt(prompt("Enter the number which you want to factorial."));
let result = 1;
if (num == 0) {
  console.log("1");
} else {
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(`${result}`);
}
*/

// To show the multiplication table
/*
let n = parseInt(
  prompt("Enter the value which you want multiplication table.")
);

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
  // document.write(` \n ${n} x ${i} = ${n * i}\n`);
}

*/

// To find the Fibonacci sequence :: 0,1,1,2,3....
/*
console.log("sandip");
const n = parseInt(prompt("Enter the nth number."));
let n1 = 0,
  n2 = 1,
  n3;

for (let i = 1; i < n; i++) {
  console.log(n1);
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}
*/

// Javascript program to print all Promise.
/*
const lowerNum = parseInt(prompt(`Enter lower Number.`));
const higherNum = parseInt(prompt(`Enter Higher number.`));
console.log(`The prime number betn ${lowerNum} and ${higherNum}`);

for (i = lowerNum; i < higherNum; i++) {
  let flag = 0;
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  // The number greater than 1 and not divisible by other numbers.
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
*/

// To check the Armstrong number
let num = prompt("Enter the any number.");
let n = num.length;
let sum = 0;
let temp = num;
while (temp > 0) {
  let rem = temp % 10;
  sum += rem ** n;
  temp = parseInt(temp / 10); // convert float into integer.
}

// console.log(sum);
if (sum == num) {
  console.log(`${num} is armstrong number.`);
} else {
  console.log(`${num} is not armstrong number.`);
}
