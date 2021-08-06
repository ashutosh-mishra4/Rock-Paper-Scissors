const SCORE = document.querySelector(".header__value");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");
const ROCK = document.getElementById("rock");
const OPTIONS = document.getElementById("options"); // ID which contains all the options
const PLAYER = document.querySelector(".result-screen__img");
const RESULT_SCREEN = document.querySelector(".result-screen");
const RULES_BTN = document.querySelector(".rules__btn");
const RULES_BOX = document.querySelector(".rules__box");
const RULES_CLOSE = document.querySelector(".rules__close");
const PLAY_AGAIN = document.querySelector(".result-screen__play-again");
const RESULTS = ["You Win", "You Lose", "Draw"];
const OPTION_IMAGE = [
  "images/icon-paper.svg",
  "images/icon-rock.svg",
  "images/icon-scissors.svg",
];

PAPER.addEventListener("click", paperUpdate);
ROCK.addEventListener("click", rockUpdate);
SCISSORS.addEventListener("click", scissorsUpdate);
RULES_BTN.addEventListener("click", rulesShowHide);
RULES_CLOSE.addEventListener("click", rulesCloseBtn);
PLAY_AGAIN.addEventListener("click", resetGame);


//Update value when user chooses paper
function paperUpdate() {
  showHide();
  updatePlayerButton('paper');
  checkWinner('paper');
}

//Update value when user chooses rock
function rockUpdate() {
  showHide();
  updatePlayerButton('rock');
  checkWinner('rock');
}

//Update value when user chooses scissors
function scissorsUpdate() {
  showHide();
  updatePlayerButton('scissors')
  checkWinner('scissor');
}

// Numbers each option 0 = paper, 1 = rock, 2 = scissor
function random(){
  return  Math.floor(Math.random() * OPTION_IMAGE.length);
};

//Hides the options-screen and display results-screen
function showHide() {
  if (OPTIONS.style.display !== "none") {
    OPTIONS.style.display = "none";
    document.querySelector(".result-screen").style.display = "flex"; // displays the selected options
  }
}

//Update player button
function updatePlayerButton(option){
  
  //Update player image
  document.querySelector(".result-screen__img--player").src = `images/icon-${option}.svg`;
    
  //Update player border
  if (option === "paper") {
    return document.querySelector(".result-screen__button--player").style.background =
    "linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
  } else if (option === "rock") {
      return document.querySelector(".result-screen__button--player").style.background =
      "linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
  } else if (option === "scissors") {
      return document.querySelector(".result-screen__button--player").style.background =
      "linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
  }
}

//Update computer value and checks winner
function checkWinner(playerChoice) {

  let computerChoice = random()
  //Update computer image
  document.querySelector(".result-screen__img--computer").src = OPTION_IMAGE[computerChoice];

  //Update computer border
    if (computerChoice === 0) {
      document.querySelector(".result-screen__button--computer").style.background =
      "linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
    } else if (computerChoice === 1) {
        document.querySelector(".result-screen__button--computer").style.background =
        "linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
    } else if (computerChoice === 2) {
        document.querySelector(".result-screen__button--computer").style.background =
        "linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
    }

  // When player wins
  if(
    playerChoice === 'rock' && computerChoice === 2 || // scissor
    playerChoice === 'paper' && computerChoice === 1 || // rock
    playerChoice === 'scissor' && computerChoice === 0 // paper
  ) {
      document.querySelector(".result-screen__text").innerText = RESULTS[0]; 
      SCORE.innerText++;
  }
  //When player loses
  else if(
    playerChoice === 'rock' && computerChoice === 0 || // paper
    playerChoice === 'paper' && computerChoice === 2 || // scissor
    playerChoice === 'scissor' && computerChoice === 1 // rock
  ) {
      document.querySelector(".result-screen__text").innerText = RESULTS[1]; 
      SCORE.innerText--;
  }
  //When game is draw
  else if(
    playerChoice === 'rock' && computerChoice === 1 || //rock
    playerChoice === 'paper' && computerChoice === 0 || //paper
    playerChoice === 'scissor' && computerChoice === 2 //scissor
  ) {
    return document.querySelector(".result-screen__text").innerText = RESULTS[2]; 
  }
}

//Display and hide rule box
function rulesShowHide() {
  if (RULES_BOX.style.display === "none") {
    RULES_BOX.style.display = "flex";
  }
}

//Hide rule box when clicked on close button
function rulesCloseBtn() {
  return RULES_BOX.style.display = "none";
}

//Reset game to previous state
function resetGame() {
  RESULT_SCREEN.style.display = "none";
  OPTIONS.style.display = "flex";
}
