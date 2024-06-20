let chng = document.querySelectorAll(".chng");

console.log(chng);
for (const ch of chng) {
  ch.addEventListener("click", () => {
    ch.classList.remove("chng");
    let choice = ch.getAttribute("id");
    console.log(`${choice} was clicked`);

    let val = compchoice();
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
    let score1 = document.getElementById("score1");
    let ps = 0;
    let cs = 0;
    //rock decisions
    if (choice === val) {
      console.log("Draw ! Try Again");
    } else if (choice == "rock" && val == "paper") {
      console.log("computer wins");
      ++cs;
      score.innerText = cs;
    } else if (choice == "rock" && val == "scissor") {
      console.log("You wins");
      ++ps;
      score1.innerText = ps;
      //scissor decisions
    } else if (choice == "scissor" && val == "rock") {
      console.log("computer wins");
      ++cs;
      score.innerText = cs;
    } else if (choice == "scissor" && val == "paper") {
      console.log("You wins");
      ++ps;
      score1.innerText = ps; //paper decisions
    } else if (choice == "paper" && val == "scissor") {
      console.log("computer wins");
      ++cs;
      score.innerText = cs;
    } else if (choice == "paper" && val == "rock") {
      console.log("You wins");
      ++ps;
      score1.innerText = ps;
    }
  }
};
