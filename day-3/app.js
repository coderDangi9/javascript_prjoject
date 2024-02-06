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
