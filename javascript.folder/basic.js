//

const cssScoreAbsoluteDiv = document.querySelector(".js-score-absolute-div");
const jsResultDiv = document.querySelector(".js-result-div");
const jsResultButton = document.querySelector(".js-result-button");
const cssTicTacToeButton = document.querySelectorAll(".css-tic-tac-toe-button");
const autoPlayButton = document.querySelector(".auto-play-button");
const score = JSON.parse(localStorage.getItem("scoreTicTacToeTitle39")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
let { wins, losses, ties } = score;
uptScoreFunction();

let ticTacToeButton = document.querySelectorAll(".tic-tac-toe-button");
autoPlayButton.addEventListener("click", () => {
  ticTacToeButton.forEach((value, index) => {
    if (value.classList.contains("tic-tac-toe-button")) {
      value.classList.remove("tic-tac-toe-button");
      value.classList.add("play-with-bot");
    } else {
      value.classList.remove("play-with-bot");
      value.classList.add("tic-tac-toe-button");
    }
  });
  ticTacToeButton = switchMode();
  console.log(ticTacToeButton);
  ticTacToeButton.forEach((value, index) => {
    value.innerHTML = "";
    isTrue = false;
    return isTrue;
  });

  return ticTacToeButton;
});

function switchMode() {
  if (
    cssTicTacToeButton.forEach((value) => {
      value.classList.contains("tic-tac-toe-button");
    })
  ) {
    ticTacToeButton = document.querySelectorAll(".tic-tac-toe-button");
  }
  if (
    cssTicTacToeButton.forEach((value) => {
      value.classList.contains("play-with-bot");
    })
  ) {
    ticTacToeButton = document.querySelectorAll(".play-with-bot");
  }
  return ticTacToeButton;
}

let isTrue = false;
let XO = "X";
let result9;
let result10;
let result11;
console.log(XO);
ticTacToeButton.forEach((value, index) => {
  let isEmpty = false;
  let timeoutIdResult11;
  // console.log(timeoutIdResult9);
  result9 = value.addEventListener("click", () => {
    if (value.innerHTML === "") {
      switchXO();
      value.innerHTML = XO;
      isEmpty = true;
    }
    result11 = uptScoreButton();
    if (result11 === "wins") {
      console.log(result11);
      wins++;
    } else if (result11 === "losses") {
      losses++;
    } else if (result11 === "ties") {
      ties++;
    }
    if (value.classList.contains("play-with-bot") && isEmpty === true) {
      isEmpty = false;
      if (isFull() === 1) {
        console.log(result11);
        if (
          result11 === "losses" ||
          result11 === "wins" ||
          result11 === "ties"
        ) {
        } else {
          ComputerLoop();

          clearTimeout(timeoutIdResult11);
          timeoutIdResult11 = setTimeout(() => {
            console.log("work?1");
            result11 = uptScoreButton();
            if (result11 === "wins") {
              console.log(result11);
              wins++;
            } else if (result11 === "losses") {
              losses++;
            } else if (result11 === "ties") {
              ties++;
            }

            return;
          }, 301);
        }
      }
      // clearTimeout(timeoutIdResult11);

      // console.log(wins, losses, ties);
      // timeoutIdResult11 = setTimeout(() => {
      //   //  console.log(timeoutIdResult9);
      // }, 301);
    }
  });
  console.log(result9);
});
function uptScoreButton() {
  const result8 = checkScoreFunction();
  // console.log(result8);
  if (result8 === "you win X") {
    jsResultButton.classList.add("css-result-button");
    jsResultButton.classList.remove("css-result-button-display-none");
    jsResultDiv.classList.remove("css-result-div-display-none");
    jsResultDiv.classList.add("css-result-div");
    jsResultButton.innerHTML = "Win";
    result10 = "wins";
    return result10;
  }
  if (result8 === "you win O") {
    jsResultButton.classList.add("css-result-button");
    jsResultButton.classList.remove("css-result-button-display-none");
    jsResultDiv.classList.remove("css-result-div-display-none");
    jsResultDiv.classList.add("css-result-div");
    jsResultButton.innerHTML = "Lose";
    result10 = "losses";
    return result10;
  }

  if (result8 === "full") {
    jsResultButton.classList.add("css-result-button");
    jsResultButton.classList.remove("css-result-button-display-none");
    jsResultDiv.classList.remove("css-result-div-display-none");
    jsResultDiv.classList.add("css-result-div");
    jsResultButton.innerHTML = "Tie";
    result10 = "ties";
    return result10;
  }
  return (result10 = "empty");
}
function switchXO() {
  if (!isTrue === true) {
    XO = "X";
    isTrue = true;
  } else {
    XO = "O";
    isTrue = false;
  }
  return XO;
}
const resetPositionAbsoluteDiv = document.querySelector(
  ".reset-position-absolute-div"
);
console.log(resetPositionAbsoluteDiv);
resetPositionAbsoluteDiv.addEventListener("click", () => {
  ticTacToeButton.forEach((value, index) => {
    value.innerHTML = "";
  });

  isTrue = false;

  return isTrue;
});

const computerMoveButton = document.querySelector(".computer-move-button");

console.log(computerMoveButton);
let rndN;
function computerRndN() {
  rndN = Math.random();
  return rndN;
}
console.log(computerRndN());
let count = 0;
computerMoveButton.addEventListener("click", () => {
  if (isFull() === 1) {
    ComputerLoop();
  }
});
function ComputerLoop() {
  let result2 = computerMove();
  count++;
  console.log(count);

  while (result2 === -1) {
    result2 = computerMove();
    console.log(result2);
  }
  if (result2 === 1) {
    console.log(result2);
  }
}
function isFull() {
  let result5 = -1;
  ticTacToeButton.forEach((value) => {
    if (value.innerHTML === "") {
      result5 = 1;
    } else {
      console.log("full");
    }
  });
  return result5;
}
function computerMove() {
  let timeoutId;
  clearTimeout(timeoutId);
  console.log(timeoutId);
  result = 1;
  isTrue = false;
  computerRndN();
  ticTacToeButton.forEach((value, index) => {
    if (rndN >= 0 && rndN <= 1 / 9 && index === 0) {
      if (value.innerHTML === "") {
        timeoutId = setTimeout(() => {
          value.innerHTML = "O";
        }, 300);
        console.log(timeoutId);
      } else {
        console.log("notFit0");
        result = -1;
      }
    } else if (rndN >= 1 / 9 && rndN <= 2 / 9 && index === 1) {
      if (value.innerHTML === "") {
        timeoutId = setTimeout(() => {
          value.innerHTML = "O";
        }, 300);
        console.log(timeoutId);
      } else {
        console.log("notFit1");
        result = -1;
      }
    } else if (rndN >= 2 / 9 && rndN <= 3 / 9 && index === 2) {
      if (value.innerHTML === "") {
        timeoutId = setTimeout(() => {
          value.innerHTML = "O";
        }, 300);
        console.log(timeoutId);
      } else {
        console.log("notFit2");
        result = -1;
      }
    } else if (rndN >= 3 / 9 && rndN <= 4 / 9 && index === 3) {
      if (value.innerHTML === "") {
        timeoutId = setTimeout(() => {
          value.innerHTML = "O";
        }, 300);
        console.log(timeoutId);
      } else {
        console.log("notFit3");
        result = -1;
      }
    } else if (rndN >= 4 / 9 && rndN <= 5 / 9 && index === 4) {
      if (value.innerHTML === "") {
        timeoutId = setTimeout(() => {
          value.innerHTML = "O";
        }, 300);
        console.log(timeoutId);
      } else {
        console.log("notFit4");
        result = -1;
      }
    } else if (rndN >= 5 / 9 && rndN <= 6 / 9 && index === 5) {
      if (value.innerHTML === "") {
        timeoutId = setTimeout(() => {
          value.innerHTML = "O";
        }, 300);
        console.log(timeoutId);
      } else {
        console.log("notFit5");
        result = -1;
      }
    } else if (rndN >= 6 / 9 && rndN <= 7 / 9 && index === 6) {
      if (value.innerHTML === "") {
        timeoutId = setTimeout(() => {
          value.innerHTML = "O";
        }, 300);
        console.log(timeoutId);
      } else {
        console.log("notFit6");
        result = -1;
      }
    } else if (rndN >= 7 / 9 && rndN <= 8 / 9 && index === 7) {
      if (value.innerHTML === "") {
        timeoutId = setTimeout(() => {
          value.innerHTML = "O";
        }, 300);
        console.log(timeoutId);
      } else {
        console.log("notFit7");
        result = -1;
      }
    } else if (rndN >= 8 / 9 && rndN <= 1 && index === 8) {
      if (value.innerHTML === "") {
        timeoutId = setTimeout(() => {
          value.innerHTML = "O";
        }, 100);
        console.log(timeoutId);
      } else {
        console.log("notFit8");
        result = -1;
      }
    }
  });

  return result;
}

const playWithBot = document.querySelectorAll(".play-with-bot");

playWithBot.forEach((value) => {
  value.addEventListener("click", () => {
    if (value.innerHTML === "") {
      switchXO();
      value.innerHTML = XO;
    }

    if (isFull() === 1) {
      console.log("working");
      ComputerLoop();
    }
  });
});
const checkScoreButton = document.querySelector(".check-score-button");
checkScoreButton.addEventListener("click", () => {
  checkScoreFunction();
  arrayScore = [];
  addToArrayHTML(arrayScore);
  //score.
  wins = 0;
  // score.
  losses = 0;
  // score.
  ties = 0;
  // const { wins, losses, ties } = score;
  uptScoreFunction();
  const score = { wins, losses, ties };
  localStorage.removeItem("scoreTicTacToeTitle39");

  jsResultButton.classList.add("css-result-button");
  jsResultButton.classList.remove("css-result-button-display-none");
  jsResultDiv.classList.remove("css-result-div-display-none");
  jsResultDiv.classList.add("css-result-div");
  jsResultButton.innerHTML = "Score was Reset";
});
function checkScoreFunction() {
  const value = ticTacToeButton;
  if (
    value[0].innerHTML === "X" &&
    value[1].innerHTML === "X" &&
    value[2].innerHTML === "X"
  ) {
    console.log("You win X");
    return "you win X";
  } else if (
    value[3].innerHTML === "X" &&
    value[4].innerHTML === "X" &&
    value[5].innerHTML === "X"
  ) {
    console.log("You win X");
    return "you win X";
  } else if (
    value[6].innerHTML === "X" &&
    value[7].innerHTML === "X" &&
    value[8].innerHTML === "X"
  ) {
    console.log("You win X");
    return "you win X";
  } else {
  }
  if (
    value[0].innerHTML === "X" &&
    value[3].innerHTML === "X" &&
    value[6].innerHTML === "X"
  ) {
    console.log("You win X");
    return "you win X";
  } else if (
    value[1].innerHTML === "X" &&
    value[4].innerHTML === "X" &&
    value[7].innerHTML === "X"
  ) {
    console.log("You win X");
    return "you win X";
  } else if (
    value[2].innerHTML === "X" &&
    value[5].innerHTML === "X" &&
    value[8].innerHTML === "X"
  ) {
    console.log("You win X");
    return "you win X";
  } else {
  }
  if (
    value[0].innerHTML === "X" &&
    value[4].innerHTML === "X" &&
    value[8].innerHTML === "X"
  ) {
    console.log("You win X");
    return "you win X";
  } else if (
    value[2].innerHTML === "X" &&
    value[4].innerHTML === "X" &&
    value[6].innerHTML === "X"
  ) {
    console.log("You win X");
    return "you win X";
  } else {
  }
  if (
    value[0].innerHTML === "O" &&
    value[1].innerHTML === "O" &&
    value[2].innerHTML === "O"
  ) {
    console.log("You win O");
    return "you win O";
  } else if (
    value[3].innerHTML === "O" &&
    value[4].innerHTML === "O" &&
    value[5].innerHTML === "O"
  ) {
    console.log("You win O");
    return "you win O";
  } else if (
    value[6].innerHTML === "O" &&
    value[7].innerHTML === "O" &&
    value[8].innerHTML === "O"
  ) {
    console.log("You win O");
    return "you win O";
  } else {
  }
  if (
    value[0].innerHTML === "O" &&
    value[3].innerHTML === "O" &&
    value[6].innerHTML === "O"
  ) {
    console.log("You win O");
    return "you win O";
  } else if (
    value[1].innerHTML === "O" &&
    value[4].innerHTML === "O" &&
    value[7].innerHTML === "O"
  ) {
    console.log("You win O");
    return "you win O";
  } else if (
    value[2].innerHTML === "O" &&
    value[5].innerHTML === "O" &&
    value[8].innerHTML === "O"
  ) {
    console.log("You win O");
    return "you win O";
  } else {
  }
  if (
    value[0].innerHTML === "O" &&
    value[4].innerHTML === "O" &&
    value[8].innerHTML === "O"
  ) {
    console.log("You win O");
    return "you win O";
  } else if (
    value[2].innerHTML === "O" &&
    value[4].innerHTML === "O" &&
    value[6].innerHTML === "O"
  ) {
    console.log("You win O");
    return "you win O";
  } else {
    if (
      value[0].innerHTML === "" ||
      value[1].innerHTML === "" ||
      value[2].innerHTML === "" ||
      value[3].innerHTML === "" ||
      value[4].innerHTML === "" ||
      value[5].innerHTML === "" ||
      value[6].innerHTML === "" ||
      value[7].innerHTML === "" ||
      value[8].innerHTML === ""
    ) {
      // console.log("not Full");
    } else {
      return "full";
    }
  }

  // let i = 0;
  // let index = -1;
  // while (i < 3) {
  //   const value = ticTacToeButton;
  //   console.log(index);
  //   if (
  //     value[(index = index + 1)].innerHTML === "X" &&
  //     value[(index = index + 1)].innerHTML === "X" &&
  //     value[(index = index + 1)].innerHTML === "X"
  //   ) {
  //     console.log("You win O");
  //   } else {
  //     console.log("you lose");
  //   }
  //   // index = index + 3;
  //   i++;
  // }

  // for (let i = 0; i < ticTacToeButton.length; i++) {
  //   const value = ticTacToeButton[i];
  //   if (
  //     value.innerHTML === "X" &&
  //     value.innerHTML === "X" &&
  //     value.innerHTML === "X"
  //   ) {
  //     console.log("You win");
  //   } else {
  //     console.log("Tie");
  //   }
  // }

  // let XOWord;
  // ticTacToeButton.forEach((value, index) => {
  //   if (value.innerHTML === "X" && index < 2) {
  //     console.log(index);
  //   } else {
  //     console.log("worksOpposite way");
  //   }
  // });
}
jsResultButton.addEventListener("click", () => {
  uptScoreFunction();
  if (jsResultButton.classList.contains("css-result-button")) {
    jsResultButton.classList.remove("css-result-button");
    jsResultButton.classList.add("css-result-button-display-none");
    jsResultDiv.classList.add("css-result-div-display-none");
    jsResultDiv.classList.remove("css-result-div");
  }
  ticTacToeButton.forEach((value, index) => {
    value.innerHTML = "";
    isTrue = false;
  });
  const score = { wins, losses, ties };
  localStorage.setItem("scoreTicTacToeTitle39", JSON.stringify(score));
  return isTrue;
});
function uptScoreFunction() {
  cssScoreAbsoluteDiv.innerHTML = `Wins:${wins} Losses:${losses} Ties:${ties}`;
}

const jsGreenScoreDiv = document.querySelector(".js-green-score-div");
const addToHistoryButton = document.querySelector(".add-to-history-button");

arrayScore = JSON.parse(localStorage.getItem("scoreTicTacToe39")) || [];
addToArrayHTML(arrayScore);
addToHistoryButton.addEventListener("click", () => {
  console.log(wins, losses, ties);
  uptScoreFunction();
  const score = { wins, losses, ties };
  addToArray(score);
  addToArrayHTML(arrayScore);
});

function addToArray(value) {
  arrayScore.push(value);
}
function addToArrayHTML(value) {
  let generateHTML = "";

  value.forEach((value, index) => {
    const { wins, losses, ties } = value;
    const html = `<p>Wins:${wins} Losses:${losses} Ties:${ties} <button class="js-delete">Delete</button></p>`;
    generateHTML += html;
  });
  jsGreenScoreDiv.innerHTML = generateHTML;
  document.querySelectorAll(".js-delete").forEach((value, index) => {
    value.addEventListener("click", () => {
      arrayScore.splice(index, 1);
      addToArrayHTML(arrayScore);
    });
  });
  localStorage.setItem("scoreTicTacToe39", JSON.stringify(arrayScore));
}
