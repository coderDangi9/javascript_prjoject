//JavaScript program to generate random number.
//  console.log(Math.floor(Math.random)*6)+1;
/*
    let x=1;
    let y = 9;
    // console.log(`${Math.floor(Math.random()*(x-y)+y)}`)
    console.log(Math.floor(Math.random()*(x-y+1)+y));

//JavaScript program to solve quadratic equation.
  let root1,root2;
  // take input from the user
  let a = prompt("Enter the first number:");
  let b= prompt("Enter the second number:");
  let c= prompt("Enter the third number:");

  //Calculate discriminant
  let discriminant = b*b-4*a*c;
  if(discriminant>0){
    root1 = (-b+ Math.sqrt(discriminant)/(2*a));
    root2 = (-b-Math.sqrt(discriminant)/2*a);

    //result
    comsole.log(`The roots of quadratic equation are ${root1} and ${root2}`);

  }
  else if(discriminant ==0){
    root1 = root2 = -b/(2*a);
    //result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);

  }
  else {
    let realpart =(-b/(2*a)).toFixed(2);
    let imagepart = (Math.sqrt(-discriminant)/(2*a)).toFixed(2);
    // result
    console.log(`The root of quadratic equation are ${realpart}+${imagepart} i and ${realpart}-${imagepart}i`);
    
  }
  */

  // TO check positive , negative, zero
  /*
  const num = parseInt(prompt("Enter any integer number"));

  if(num >=0){
    if(num ==0){
      console.log("equaltoZero");
    }
    else{
      console.log("positive");
    }

  }
  else{
    console.log("negative");
  }
*/

//TO check the number is odd or even
/*
const num = parseInt(prompt("Enter any number:"));
if(num %2==0){
  console.log("even");
}
else{
  console.log("odd");
}
*/

//Alternative
/*
const num = parseInt(prompt("Enter any number:"));
let result = (num %2==0)? "even":"Odd";
console.log(result);*/
/*
let n1= parseInt(prompt("Enter first number:"));
let n2= parseInt(prompt("Enter second number:"));
let n3= parseInt(prompt("Enter third number:"));
if(n1>n2){
  if(n1>n3){
      console.log(n1);
  }
  else{
      console.log(n3);
  }
}
else{
  if(n2>n3){
      console.log(n2);
  }
  else{
      console.log(n3);
  }
}
*/
//using ternary operator
/*
  let p1 = (n1 >n2)?n1:n2;
  let result = (p1 >n3)?p1:n3;

  // Using math.max
  let res = Math.max(n1,n2,n3);

  console.log(`${result} is largest number.`);

  */
