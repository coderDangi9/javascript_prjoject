let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const UScore = document.querySelector("#User-score");
const CScore = document.querySelector("#com-score");

const showWinner = (userwin, userChoice, compChic) => {
  // let count = 0;
  if (userwin) {
    // console.log("You Win !!");
    msg.innerText = `You Win!! your ${userChoice} beats ${compChic}`;
    userScore++;
    UScore.innerText = userScore;
    msg.style.backgroundColor = "green";
    // count++;
  } else {
    // console.log("You Loose !!");
    msg.innerText = `You Loose !! ${compChic} beats your ${userChoice}`;
    comScore++;
    CScore.innerText = comScore;
    msg.style.backgroundColor = "red";
  }
};

const gencomChoice = () => {
  const option = ["rock", "scissor", "Paper"];
  const rando = Math.floor(Math.random() * 3);
  return option[rando];
  //rock , paper, scissor
};
const draw = () => {
  //   console.log("Game was Draw");
  msg.innerText = "Game Was Draw !!";
  msg.style.backgroundColor = "#081b31";
};
const playGame = (userChoice) => {
  // console.log("UserChoice:-", userChoice);
  //Generate Computer choice =>modular.
  const compChic = gencomChoice();
  // console.log("CompChoice:-", compChic);

  if (userChoice == compChic) {
    //draw Game
    draw();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      //paper, scissor
      userwin = compChic === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      //rock,scissor
      userwin = compChic === "scissor" ? false : true;
    } else {
      //paper, rock
      userwin = compChic === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChic);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
    // gencomChoice();
  });
});
