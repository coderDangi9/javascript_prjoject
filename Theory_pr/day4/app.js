/*let heroes = ["Rajesh Hamal", "Nikhel", "Biraj Bhatta"];
let marks = [43, 32, 53, 65, 76, 88];

// for (let i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }

// for of
for (let hero of heroes) {
  console.log(hero.toUpperCase());
}

//Qs. For a given array with marks of student -> [85,97,44,37,76,60]
// find the average marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let ma of marks) {
  sum += ma;
}
console.log(`Average : ${sum / marks.length}`);


// Qs. FOr a given array with prices of 5 items ->[250,645,300,900,50] All items have
// an offer of 10% Off on them. Change the array to store final price after appying offer.

let item = [250, 645, 300, 900, 50];
for (let i = 0; i < item.length; i++) {
  offer = item[i] / 10;
  item[i] -= offer;
}
console.log(item);

let fodItem = ["apple", "mango", "Litchi", "Banana"];
fodItem.push("Panier");
console.log(fodItem);
fodItem.pop();
console.log(fodItem);

console.log(fodItem.toString());

let mmher = ["thor", "spider", "dfcje", "Lisa", "mon"];
let bbher = ["brokle"];
// let heroes = mmher.concat(bbher);
// let heroes = mmher.unshift(bbher);
// let heroes = mmher.shift();
let heroes = mmher.slice(1, 3);
console.log(heroes);

let arr = [2, 3, 5, 4, 6, 11, 43, 54, 66, 7];
let res = arr.splice(3, 0, 34, 55);
console.log(arr);
console.log(res);
*/

// Q.No.1 Create an array to store companies ->"Bloomberg", "Microsoft", "Uber", "Google","IBM", "Netflix";
// (a) Remove the first company from the array
// (b) Remove Uber and Add old in its place
// (c) Add Amazon at the end
/*
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
let result = companies.shift();
console.log(`a. changing array ::${companies}`);
result = companies.splice(2, 1, "Ola");
console.log(`b. changing array ::${companies}`);
result = companies.push("Amazon");
console.log(`c. changing array ::${companies}`);
*/
