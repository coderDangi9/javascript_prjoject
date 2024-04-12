/*let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};
btn1.addEventListener("click", () => {
  console.log("Button1 was clicked.");
});
btn1.addEventListener("click", () => {
  console.log("Button1 was clicked2.");
});
let handler3 = () => {
  console.log("Button1 was clicked3.");
};
btn1.addEventListener("click", () => {
  console.log("Button1 was clicked4.");
});

btn.removeEventListener("click", handler3);

btn1.addEventListener("dblclick", () => {
  console.log("Button1 was clicked -handler2.");
});

let div = document.querySelector("div");
div.onmouseover = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};
*/
// Create a toggle button that changes the screen to dark-mode
// and light mode when clicked again.

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "Light"; //dark
// modeBtn.addEventListener("click", () => {
//   if (currMode === "Light") {
//     currMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currMode = "Light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
//   console.log(currMode);
// });
// console.log("Sandip");

let div1 = document.querySelector("#mark");
let bod = document.querySelector("body");
let dom = "true";
div1.addEventListener("mouseover", () => {
  if (dom === "true") {
    dom = "false";
    bod.classList.add("dark");
    bod.classList.remove("light");
  } else {
    dom = "true";
    bod.classList.add("light");
    bod.classList.remove("dark");
  }
  console.log("hello");
});
