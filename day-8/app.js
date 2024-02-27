//js to count vowel letter
/*
//Defining Vowles
const vowels = ["a", "e", "i", "o", "u"];
function countVowel(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  //return no.of vowels
  return count;
}
const string = prompt("Enter a string");
const result = countVowel(string);
console.log(result);
*/
// Remove a Property from an object
/*
// Creating an object

const student = {
  name: "John",
  age: 22,
  hobbies: ["reading", "game", "coding"],
  greet: function () {
    console.log("Hello everyone!!");
  },
  Score: {
    math: 90,
    physic: 80,
  },
};
delete student.hobbies;
delete student["Score"];
console.log(student);
*/
//Javascript program to check whether a string start and end with certain character.
/*
// Program to check if a string starts with 'S' and ends with 'G'.
function checkstring(str) {
  //check if the string starts with S and ends with G
  if (str.startsWith("S")) {
    console.log("The string which have S but not G");
  } else if (str.endsWith("G")) {
    console.log("The string doesnt start with S but end with G");
  } else {
    console.log("The string doesnt start with s and doesnt end with G");
  }
}
function checkstring(str) {
  if (/^S/i.test(str) && /G$/i.test(str)) {
    console.log("The string start with S and end with G");
  } else if (/^S/i.test(str)) {
    console.log("string start with S but not end with G");
  } else if (/G$/i.test(str)) {
    console.log("string doesnt start with S but end with G");
  } else {
    console.log("String doesnt start with S and doesnt end with G");
  }
}
//take input
let string = prompt("Enter a string");
checkstring(string);
*/
// javascript program to check if a key Exits in an object.

/*const person = {
  id: 2,
  name: "Sandip",
  address: "Ghorahi",
};
const hasKey = "name" in person;
if (hasKey) {
  console.log("The key exists.");
} else {
  console.log("The key doesnt exist.");
}
*/
// Javascript program to clone Js object

//clone the object using object.assign();
/*
//program to clone the object
//declaring object
const person = {
  name: "John",
  age: 21,
};
//cloning the object
const clonePerson = Object.assign({}, person);
console.log(clonePerson);
//changing the value of clone person
clonePerson.name = "Sandip";
console.log(clonePerson.name);
console.log(person.name);
*/

//clone the object using spread syntax
const person = {
  name: "john",
  age: 32,
  mark: {
    physic: 80,
    chemistry: 78,
    math: 100,
  },
};
//clone the object by spread syntax
const clonePerson = { ...person };
console.log(clonePerson);
//changing the value of clonePerson
clonePerson.name = "sandip";
clonePerson.mark.chemistry = 89;
// console.log(clonePerson.mark.chemistry);
