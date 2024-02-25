// Using Object Literal
/*
const person = {
  name: "Sandip",
  age: 20,
  hobbies: ["reading", "games", "coding"],
  greet: function () {
    console.log("Hello everyone");
  },
  score: {
    math: 90,
    science: 80,
  },
};
console.log(typeof person); //object
//accessing the object value;
console.log(person.name);
console.log(person.hobbies[1]);
console.log(person.score.science);
console.log(person.greet());
*/

// creating instance of object directly.
/*
const person = new Object({
  name: "Ramesh",
  age: 20,
  hobbies: ["playing", "coding", "reading"],
  greet: function () {
    console.log("Good Morning");
  },
  score: {
    ram: 40,
    binita: 30,
  },
});
console.log(typeof person); //object
//accessing the object value;
console.log(person.name);
console.log(person.hobbies[1]);
console.log(person.score.science);
person.greet();
*/
// By using constructor function
/*
function Person() {
  (this.name = "Sandip"),
    (this.age = 20),
    (this.hobbies = ["hanging friend", "playing football", "reading book"]),
    (this.greet = function () {
      console.log("good Morning");
    }),
    (this.score = {
      Math: 30,
      science: 32,
    });
}
const person = new Person();
console.log(typeof person); //object
//accessing the object value;
console.log(person.name);
console.log(person.hobbies[0]);
console.log(person.score.science);
person.greet();
*/

//count char to the sting in sentence
/*
function countString(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    //check if the character is at the position
    if (str.charAt(i) == letter) {
      count+=1;
    }
  }
}
// taking input from the user.
const string = prompt("Enter a string");
const letter = prompt("Enter a letter");
//passing parameter and calling check:
const result = countString(string, letter);
//display the result
console.log(result);
*/
