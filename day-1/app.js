// Javascript program to print Helloworld

const variable = "Hello guys";
console.log(variable);
alert(variable);
document.write(variable);

//javascript program to Add two number
/*
let num1 =9;// variable and constant declare
let num2 = 4;

//userdefine variable;
let num1 = parseInt(prompt("Enter first number :"));
let num2 = parseInt(prompt("Enter second number :"));

const Sum = num1+num2; 

console.log(`Total sum of ${num1} and ${num2} is ${Sum}`);
*/
/*
//Math library
const num = 16;
const result = Math.sqrt(num);

console.log(` The Square root of ${num} is ${result}`);
*/
//Area of triangle
/*

const base = parseInt(prompt("Enter the value of base."));
const height = parseInt(prompt("Enter the value of height."));

const area = base * height /2;

console.log(area);

*/
//Area of heron's formula. If a,b,c are three side of triangle
/*
const a = parseInt(prompt("Enter the first value"));
const b = parseInt(prompt("Enter the second value"));
const c = parseInt(prompt("Enter the third value"));


let s = (a+b+c)/2;

let ans = Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log(ans);
*/

// javascript pragram to swap two variable
/*
let a = prompt("Enter the first variable .");
let b = prompt("Enter the second variable.");

console.log(`Before Swap :: ${a}, ${b}`);
//Swap variable
// let temp;
//  temp = a;
//  a=b;
//  b = temp;

// using Destructing assignment
[a,b] =[b,a];

// Using Arithmetic operation

// a= a+b;
// b= a-b;
// a= a-b;

//Using Bitwise Operator
    // a= a^b;
    // b=a^b;
    // a= a^b;

console.log(`after Swap :: ${a}, ${b}`);
  */

//Converting kilometer into miles
/*
const kilometer = parseInt(prompt("Enter kilometer :"));
let miles = 0.6213;

let result = kilometer *miles;
console.log(`${kilometer} kilometer is converted into ${result} miles`);
*/


// converting Celsius to Fahrenheit
/*

// calculate Fahrenheit;
let  Fahrenheit = (celsius * 1.8) + 32;

//Display the result
console.log(`${celsius}C is converted into ${celsius} `);

*/
