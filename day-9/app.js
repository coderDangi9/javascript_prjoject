// Javascript program to loop through an object
/*
// Loop through object using for --in

//program to loop through an objects using for -- in loop
const student = {
  name: "Sandip",
  age: 20,
  hobbies: ["study", "football", "cooking"],
};
//using for -- in
for (let key in student) {
  let value = student[key];
  console.log(key + "-" + value);
}
*/
// javascript program  to merge property of two objects.
//object1
const person = {
  name: "sandip",
  age: 32,
};
//object2
const student = {
  gender: "male",
};
//merge two objects
const newObj = Object.assign(person, student);
// const newObjec ={...person,... student};
console.log(newObj);

//
