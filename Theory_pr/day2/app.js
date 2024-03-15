//Arithmetic Operation
/*
let a = 8;
let b = 2;

console.log("a+b =" + a + b);
console.log(`a-b =${a - b}`);
console.log(`a*b =${a * b}`);
console.log(`a/b =${a / b}`);
console.log(`a%b =${a % b}`);
console.log(`a**b =${a ** b}`);
console.log(`++a =${++a}`);
*/

// Comprasion Operators
/*
let a = 5; // Number
let b = "5"; //String
console.log(`a==b :- ${a == b}`);
console.log(`a===b :- ${a === b}`);
console.log(`a>=b :- ${a >= b}`);
*/

//Logical operators
/*
let a = 8;
let b = 3;
let cond1 = a < b;
let cond2 = a === 8;
console.log(`cond1 && cond2 :- ${cond1 && cond2}`);
console.log(`cond1 || cond2 :- ${cond1 || cond2}`);
console.log(`! cond1 :- ${!cond1}`);
*/

// conditional statement
/*
let age = 29;
if (age > 18) {
  console.log("You can Vote.");
} else {
  console.log("You cannot vote");
}
*/

// ternary Operator
/*
let age = 25;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
*/

//Get user to input a number using prompt("Enter a number:")
// .Check if the number is a multiple of 5 or not.
/*
let user = prompt("Enter a number");
let result = user % 5 == 0 ? "Ismultiple" : "isNotmultiple";
console.log(result);
*/
//Write a code which can give grades to students according to their scores:
// 80-100,A
// 70-89,B
// 60-69,C
// 50-59,D
// 0-49,F

let user = prompt("Enter your Score:-");
if (user > 80 && user < 100) console.log("Grade :-A");
else if (user > 70 && user < 89) console.log("Grade :-B");
else if (user > 60 && user < 69) console.log("Grade :-C");
else if (user > 50 && user < 59) console.log("Grade :-D");
else if (user > 50 && user < 59) console.log("Grade :-F");
