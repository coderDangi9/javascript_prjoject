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

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new !</i>";

// document.querySelector("body").prepend(newHeading);

// let par = document.querySelector("p");
// par.remove();

// newHeading.remove();

// const del = document.body.appendChild(document.createElement("h2"));

/*
QS. Create a new button element.Give it a text "click me", background
color of red and text color of white.
Insert the button as the first element inside the body tag.

*/
let but = document.createElement("button");
but.innerHTML = "Click me";

but.style.backgroundColor = "red";
but.style.color = "white";

document.querySelector("body").prepend(but);

/*
Create a <p> tag in HTML, give it a class & some styling.
Now create a new class in CSS and try to append this class to the
<p> else Did you notice, how you overwrite the class name when you 
add a newthing . solve this problem using classlist.
*/
let par = document.querySelector("p");
