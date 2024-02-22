// Javascript program to check the given string is plaindrome or not.
/*
function checkOut(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not palindrome.";
    }
  }
  return "It is Plaindrome";
}
let str = prompt("Enter any string");
console.log(`Result: ${checkOut(str)}`);

function checkPlaindrome(string) {
  //convert string to an array
  const ArrVal = string.split("");
  //reverse the array values
  const reverseArrVal = ArrVal.reverse();
  //convert arr to string
  const reverseStr = reverseArrVal.join("");

  if (string == reverseStr) {
    return "plaindrome";
  } else {
    return "not plaindrome";
  }
}
// take input
const str = prompt("Enter a string");

console.log(`Result: ${checkPlaindrome(str)}`);
*/

// Javascript program to sort a string in alphabetical order.
/*
//take a string
const str = prompt(`Enter a string .`);
//convert a string into array.
const words = str.split(" ");

//sort this word
words.sort();
let combo = words.join(" ");

console.log(`Sorting an array in Alphabetical order.`);
for (const element of words) {
  console.log(element);
}
console.log(combo);
*/

// Javascript program to replace character of a string.
/*
const string =
  "Hello it's me sandip dangi from nepal. currently i study csit in collage and to learn different language to you know just like javascript, solidity, and react also";

// const newstr = string.replace("Hello", "hey");
let re = /to/g;
const newstr = string.replace(re, "do");
console.log(newstr);
*/

// Javascript program to Reverse a string
/*
function reverseString(str) {
  // create new empty string
  empstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    empstr += str[i];
  }
  return empstr;
}
//take input from user
const string = prompt("Enter any string");
const result = reverseString(string);
console.log(`${result}`);

function revstr(str) {
  //return newarr of string;
  const newstr = str.split("");
  const reverseArr = newstr.reverse();
  const joinArr = reverseArr.join("");
  return joinArr;
}
const string = prompt("Enter a string");
const result = revstr(string);
console.log(`${result}`);
*/

// Javascript to shuffle Deck of card
const suits = ["spade", "Diamonds", "club", "Heart"];

const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
// const value = ["Ace", "2", "3", "4", "5", "6", "7", "jack", "Queen", "King"];
//create deck of cards
let deck = [];
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < suits.length; x++) {
    let card = { value: values[x], suit: suits[i] };
    deck.push(card);
  }
}
