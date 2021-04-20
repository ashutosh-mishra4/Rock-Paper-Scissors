const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");
const ROCK = document.getElementById("rock");
const OPTIONS = document.getElementById("options"); // ID which contains all the options
const PLAYER = document.querySelector(".result-screen__img");
const RESULT_SCREEN = document.querySelector(".result-screen");
const SCORE = document.querySelector(".header__value");
const RULES_BTN = document.querySelector(".rules__btn");
const RULES_BOX = document.querySelector(".rules__box");
const RULES_CLOSE = document.querySelector(".rules__close");
const PLAY_AGAIN = document.querySelector(".result-screen__play-again");
const RESULTS = ["You Win", "You Lose", "It's a Draw"];
const OPTION_IMAGE = [
  "images/icon-paper.svg",
  "images/icon-rock.svg",
  "images/icon-scissors.svg",
];

//CLICK EVENT LISTENERS
PAPER.addEventListener("click", paperUpdate);
ROCK.addEventListener("click", rockUpdate);
SCISSORS.addEventListener("click", scissorsUpdate);
RULES_BTN.addEventListener("click", rulesShowHide);
RULES_CLOSE.addEventListener("click", rulesCloseBtn);
PLAY_AGAIN.addEventListener("click", resetGame);

//UPDATE VALUE WHEN USER CHOOSE PAPER
function paperUpdate() {
  showHide();
  playerImageUpdate("paper");
  playerBorderUpdate("paper");
  winLossPaper("paper");
  computerImageUpdate();
  computerBorderUpdate();
}

////UPDATE VALUE WHEN USER CHOOSE ROCK
function rockUpdate() {
  showHide();
  playerImageUpdate("rock");
  playerBorderUpdate("rock");
  winLossRock("rock");
  computerImageUpdate();
  computerBorderUpdate();
}

//UPDATE VALUE WHEN USER CHOOSE SCISSORS
function scissorsUpdate() {
  showHide();
  playerImageUpdate("scissors");
  playerBorderUpdate("scissors");
  winLossScissors("scissors");
  computerImageUpdate();
  computerBorderUpdate();
}

// NUMBERS EACH OPTION, 0 = PAPER, 1 = ROCK, 2 = SCISSOR
let optionNumber = (function () {
  let randomNum = Math.floor(Math.random() * OPTION_IMAGE.length);
  return function() {
      return randomNum;
    }
})();

//FUNCTION TO UPDATE THE SCORE
function updateScore(value) {
  let score = SCORE.innerHTML;
  return score+= value;
};

//HIDES THE OPTIONS-SCREEN AND SHOW RESULT-SCREEN
function showHide() {
  if (OPTIONS.style.display !== "none") {
    OPTIONS.style.display = "none";
    document.querySelector(".result-screen").style.display = "flex"; // displays the selected options
  }
}

//UPDATE USER IMAGE
function playerImageUpdate(option) {
  document.querySelector(
    ".result-screen__img--player"
  ).src = `images/icon-${option}.svg`;
}

//UPDATE USER BORDER
function playerBorderUpdate(option) {
  if (option == "paper") {
    document.querySelector(".result-screen__button--player").style.background =
      "linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
  } else if (option == "rock") {
    document.querySelector(".result-screen__button--player").style.background =
      "linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
  } else if (option == "scissors") {
    document.querySelector(".result-screen__button--player").style.background =
      "linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
  }
}

//UPDATE COMPUTER IMAGE
function computerImageUpdate() {
  document.querySelector(".result-screen__img--computer").src =
    OPTION_IMAGE[optionNumber()];
}

//UPDATE COMPUTER BORDER
function computerBorderUpdate() {
  if (optionNumber() == 0) {
    document.querySelector(
      ".result-screen__button--computer"
    ).style.background =
      "linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
  } else if (optionNumber() == 1) {
    document.querySelector(
      ".result-screen__button--computer"
    ).style.background =
      "linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
  } else if (optionNumber() == 2) {
    document.querySelector(
      ".result-screen__button--computer"
    ).style.background =
      "linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
  }
}

//DETERMINE RESULT WHEN USER CHOICE PAPER
function winLossPaper(playerChoice) {
  if (playerChoice == "paper" && optionNumber() == 0) {
    //paper
    document.querySelector(".result-screen__text").innerHTML = RESULTS[2];
  } else if (playerChoice == "paper" && optionNumber() == 1) {
    //rock
    document.querySelector(".result-screen__text").innerHTML = RESULTS[0];
    updateScore(1);
  } else if (playerChoice == "paper" && optionNumber() == 2) {
    //scissors
    document.querySelector(".result-screen__text").innerHTML = RESULTS[1];
    updateScore(-1); 
  }
}

//DETERMINE RESULT WHEN USER CHOICE ROCK
function winLossRock(playerChoice) {
  if (playerChoice == "rock" && optionNumber() == 0) {
    //paper
    document.querySelector(".result-screen__text").innerHTML = RESULTS[1];
    updateScore(-1);
  } else if (playerChoice == "rock" && optionNumber() == 1) {
    //rock
    document.querySelector(".result-screen__text").innerHTML = RESULTS[2];
  } else if (playerChoice == "rock" && optionNumber() == 2) {
    //scissors
    document.querySelector(".result-screen__text").innerHTML = RESULTS[0];
    updateScore(1);
  }
}

//DETERMINE RESULT WHEN USER CHOICE SCISSORS
function winLossScissors(playerChoice) {
  if (playerChoice == "scissors" && optionNumber() == 0) {
    //paper
    document.querySelector(".result-screen__text").innerHTML = RESULTS[0];
    updateScore(1);
  } else if (playerChoice == "scissors" && optionNumber() == 1) {
    //rock
    document.querySelector(".result-screen__text").innerHTML = RESULTS[1];
    updateScore(-1);
  } else if (playerChoice == "scissors" && optionNumber() == 2) {
    //scissors
    document.querySelector(".result-screen__text").innerHTML = RESULTS[2];
  }
}

// DISPLAY AND HIDE RULE BOX
function rulesShowHide() {
  if (RULES_BOX.style.display == "none") {
    RULES_BOX.style.display = "flex";
    document.querySelector("body > section:not(RULES_BOX)").style.opacity = 0.5;
    //RULES_BOX.style.opacity = 1;
  }
}

// HIDE RULE BOX
function rulesCloseBtn() {
  RULES_BOX.style.display = "none";
  document.querySelector("body > section:not(RULES_BOX)").style.opacity = 1;
}

// RESET GAME TO PREVIOUS STATE
function resetGame() {
  RESULT_SCREEN.style.display = "none";
  OPTIONS.style.display = "flex";
}

//const fdg43 = document.querySelector("body > :not(RULES_BOX)");
