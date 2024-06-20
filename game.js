//chng help to make our img look like a button

let chng = document.querySelectorAll(".chng");

//ps and cs are the score card

let ps = 0;
let cs = 0;

for (const ch of chng) {
  //this will take each and

  //helps to feel like an button

  ch.addEventListener("click", () => {
    ch.classList.remove("chng");
    let choice = ch.getAttribute("id");

    let val = compchoice();
    console.log(choice);
    console.log(val);
    checkwinner(choice, val);

    setInterval(function () {
      ch.classList.add("chng");
    }, 1000);
  });
}

function player(player_choice) {
  return player_choice;
}

function compchoice() {
  let com = Math.random();
  com = com * 3;
  com = Math.trunc(com);
  let comp_choice = ["rock", "scissor", "paper"];
  //   console.log(comp_choice[com]);
  return comp_choice[com];
}

let checkwinner = (choice, val) => {
  if (choice != "" && val != "") {
    let score = document.getElementById("score");
    let select = document.querySelector("#select");
    let win = document.querySelector("#win");
    let lose = document.querySelector("#lose");
    let score1 = document.getElementById("score1");

    let display = document.getElementById("result");

    let display1 = document.getElementById("result1");
    //rock decisions
    if (choice === val) {
      console.log("Draw ! Try Again");
      select.play();
      display.innerText = "Draw ! Try Again";
      display1.style.background = "#454343";
    } else if (choice == "rock" && val == "paper") {
      console.log("computer wins");
      display.innerText = "You Lose!";
      lose.play();
      display1.style.background = "red";
      cs += 1;
      score.innerText = cs;
    } else if (choice == "rock" && val == "scissor") {
      console.log("You wins");
      display.innerText = "You Wins!";
      win.play();
      display1.style.background = "green";
      ps += 1;
      score1.innerText = ps;
      //scissor decisions
    } else if (choice == "scissor" && val == "rock") {
      console.log("computer wins");
      display.innerText = "You lose";
      lose.play();
      display1.style.background = "red";
      ++cs;
      score.innerText = cs;
    } else if (choice == "scissor" && val == "paper") {
      console.log("You wins");
      display.innerText = "You Wins!";
      win.play();
      display1.style.background = "green";
      ++ps;
      score1.innerText = ps; //paper decisions
    } else if (choice == "paper" && val == "scissor") {
      console.log("computer wins");
      display.innerText = "You lose";
      lose.play();
      display1.style.background = "red";
      ++cs;
      score.innerText = cs;
    } else if (choice == "paper" && val == "rock") {
      console.log("You wins");
      display.innerText = "You Wins!";
      win.play();
      display1.style.background = "green";
      ++ps;
      score1.innerText = ps;
    }
  }
};

//reset game
let reset = document.getElementById("reset");
let display1 = document.getElementById("result1");
let display = document.getElementById("result");
let rsc = document.querySelectorAll(".rest");

reset.addEventListener("click", () => {
  for (const res of rsc) {
    res.innerText = "0";
    display1.style.background = "#454343";
    display.innerText = "Pick Your Move";
  }
});
