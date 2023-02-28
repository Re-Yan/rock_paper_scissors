"strict mode";

let playerSelection, computerChoice, promptResult;
let scores = [0, 0];
let gameActive = true;
// Function Declarations

const getComputerChoice = function () {
  let randnum = Math.floor(Math.random() * (4 - 1) + 1);

  if (randnum === 1) {
    return (computerChoice = "rock");
  } else if (randnum === 2) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissors");
  }
};

const playRound = function (playerSelection, computerChoice) {
  if (playerSelection === "rock" && computerChoice === "rock") {
    mainDescription.textContent = "DRAW";
    subDescription.textContent = "";
  } else if (playerSelection === "rock" && computerChoice === "paper") {
    mainDescription.textContent = "COMPUTER WIN";
    subDescription.textContent = "";
    scores[1] += 1;
    computerScore.textContent = scores[1];
  } else if (playerSelection === "rock" && computerChoice === "scissors") {
    mainDescription.textContent = "PLAYER WIN";
    subDescription.textContent = "";
    scores[0] += 1;
    playerScore.textContent = scores[0];
  }

  if (playerSelection === "paper" && computerChoice === "rock") {
    mainDescription.textContent = "PLAYER WIN";
    subDescription.textContent = "";
    scores[0] += 1;
    playerScore.textContent = scores[0];
  } else if (playerSelection === "paper" && computerChoice === "paper") {
    mainDescription.textContent = "DRAW";
    subDescription.textContent = "";
  } else if (playerSelection === "paper" && computerChoice === "scissors") {
    mainDescription.textContent = "COMPUTER WIN";
    subDescription.textContent = "";
    scores[1] += 1;
    computerScore.textContent = scores[1];
  }

  if (playerSelection === "scissors" && computerChoice === "rock") {
    mainDescription.textContent = "COMPUTER WIN";
    subDescription.textContent = "";
    scores[1] += 1;
    computerScore.textContent = scores[1];
  } else if (playerSelection === "scissors" && computerChoice === "paper") {
    mainDescription.textContent = "PLAYER WIN";
    subDescription.textContent = "";
    scores[0] += 1;
    playerScore.textContent = scores[0];
  } else if (playerSelection === "scissors" && computerChoice === "scissors") {
    mainDescription.textContent = "DRAW";
    subDescription.textContent = "";
  }
};

const computerPickDescription = () => {
  if (computerChoice === "rock") {
    compSelectionName.textContent = "The computer played ROCK";
  } else if (computerChoice === "paper") {
    compSelectionName.textContent = "The computer played PAPER";
  } else {
    compSelectionName.textContent = "The computer played SCISSORS";
  }
};

const scoreChecker = () => {
  if (scores[0] >= 5) {
    modal.classList.remove("hidden");
    winnerMessage.textContent = "YOU WON!";
    gameActive = false;
  } else if (scores[1] >= 5) {
    modal.classList.remove("hidden");
    winnerMessage.textContent = "YOU LOST!";
    gameActive = false;
  }
};

const pictureChanger = () => {
  // Changes the picture to the corresponding computer pick
  if (computerChoice === "rock") {
    computerPick.src = "./pictures/rock.jpeg";
  } else if (computerChoice === "paper") {
    computerPick.src = "./pictures/paper.jpeg";
  } else {
    computerPick.src = "./pictures/scissors.jpeg";
  }
};

// DOM elements
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const computerPick = document.querySelector("#computerPick");
const mainDescription = document.querySelector("#main-description");
const subDescription = document.querySelector("#sub-description");
const compSelectionName = document.getElementById("compSelectionName");
const playerScore = document.querySelector("#current-score-0");
const computerScore = document.querySelector("#current-score-1");
const modal = document.querySelector(".modal");
const winnerMessage = document.querySelector(".winner");
const reset = document.querySelector(".reset");

// Events for each button

rockBtn.addEventListener("click", () => {
  if (gameActive) {
    computerChoice = getComputerChoice();
    playRound("rock", `${computerChoice}`);
    computerPickDescription();
    pictureChanger();
    scoreChecker();
  }
});
paperBtn.addEventListener("click", () => {
  if (gameActive) {
    computerChoice = getComputerChoice();
    playRound("paper", `${computerChoice}`);
    computerPickDescription();
    pictureChanger();
    scoreChecker();
  }
});
scissorsBtn.addEventListener("click", () => {
  if (gameActive) {
    computerChoice = getComputerChoice();
    playRound("scissors", `${computerChoice}`);
    computerPickDescription();
    pictureChanger();
    scoreChecker();
  }
});

reset.addEventListener("click", function () {
  scores = [0, 0];
  playerScore.textContent = scores[0];
  computerScore.textContent = scores[1];
  computerPick.src = "./pictures/QuestionMark.PNG";
  modal.classList.add("hidden");
  mainDescription.textContent = "Ready to Play?";
  subDescription.textContent = "Choose Your Pick";
  compSelectionName.textContent = " ";
  gameActive = true;
});
