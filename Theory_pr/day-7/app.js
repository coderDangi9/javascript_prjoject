// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let sd = div.getAttribute("name");
// console.log(sd);
// let par = document.querySelector("p");
// console.log(par.setAttribute("class", "bindu"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "brown";
// div.style.forntSize = "98px";
// div.innerText = "Hello";
// div.style.visibility = "hidden";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!!";
// console.log(newBtn);

// let p = document.querySelector("p");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new !</i>";

document.querySelector("body").prepend(newHeading);
