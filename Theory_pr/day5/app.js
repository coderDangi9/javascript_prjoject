/*function myFunction() {
  console.log("Welcome my boy");
}
// myFunction();

function sum(n1, n2) {
  // n1 and n2 is a Parameter
  sum = n1 + n2;
  return sum;
}
console.log(`Total sum :- ${sum(5, 3)}`);// 5 and 3 is Argument.


const arrsum = (a, b) => {
  console.log(a + b);
};
arrsum(4, 5);

//Multiple functionf
const multi = (x, y) => {
  console.log(x * y);
};
multi(4, 3);
*/
// Create a function using the "Function " keyword that takes a string
// as an argument & returns the number of vowels in the string.
/*
function countVowel(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(`Total vowels include there string:-${countVowel("sandip")}`);


// Create an arrow function to perform the same task.
const vowCount = (string) => {
  let count = 0;
  for (let str of string) {
    if (
      str === "a" ||
      str === "e" ||
      str === "i" ||
      str === "o" ||
      str === "u"
    ) {
      count += 1;
    }
  }
  return count;
};
console.log(`Total vowel is ${vowCount("aeiou")}`);


// let arr = [2, 1, 4, 5, 3, 6, 7];
let arr = ["ghorahi", "tulsipur", "ktm"];
arr.forEach((val) => {
  let res = val.toUpperCase(val);
  console.log(res);
});


// Q.No.1 for a given array of numbers, print the squre of each
//  value using  the forEach loop

arr = [3, 6, 7, 9];
arr.forEach((val) => {
  console.log(`${val * val}`);
});

let arr = [44, 33, 22, 11, 55, 66];
let newarr = arr.map((val) => {
  return val * 2;
});
console.log(newarr);

let arr = [44, 33, 22, 11, 55, 66];

let newarr = arr.filter((val) => {
  return val % 2 == 0;
});
console.log(newarr);

const arr = [22, 33, 55, 66, 88, 77];

const output = arr.reduce((res, curr) => {
  return res > curr ? res : curr;
});
console.log(output);
*/

// We are given array of marks of students. Filter out of the marks of
// student that score 90+.
/*
let mark = [34, 100, 38, 44, 98, 91, 95];
let newarr = mark.filter((val) => {
  return val > 90;
});
console.log(newarr);
*/
// Take a number n as input from user. Create an array of number from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter the value of n:");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

let result = arr.reduce((pr, curr) => {
  return pr + curr;
  // return pr*curr;
});
console.log(result);

let Results = arr.reduce((pr, curr) => {
  // return pr + curr;
  return pr * curr;
});
console.log(Results);
