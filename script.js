'strict mode'

let playerSelection, computerChoice, promptResult;

    // Function Declarations
const getComputerChoice = function() {
    let computerChoice;
    let randnum = Math.floor((Math.random() * (4 - 1)) + 1);

    if (randnum === 1) {
        return 'rock';
    } else if (randnum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    };
};

const playRound = function (playerSelection, computerChoice) {

    if (playerSelection === 'rock' && computerChoice === 'rock') return 'Draw';
    else if (playerSelection === 'rock' && computerChoice === 'paper') return 'You Lose';
    else if (playerSelection === 'rock' && computerChoice === 'scissors') return 'You Win';

    if (playerSelection === 'paper' && computerChoice === 'rock') return 'You Win';
    else if (playerSelection === 'paper' && computerChoice === 'paper') return 'Draw';
    else if (playerSelection === 'paper' && computerChoice === 'scissors') return 'You Lose';

    if (playerSelection === 'scissors' && computerChoice === 'rock') return 'You Lose';
    else if (playerSelection === 'scissors' && computerChoice === 'paper') return 'You Win';
    else if (playerSelection === 'scissors' && computerChoice === 'scissors') return 'Draw';
};

const game = function() {
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        promptResult = prompt('Choose: Rock, Paper or Scissors');
        playerSelection = promptResult.toLowerCase();
        console.log(`computer choice: ${computerChoice}`);
        console.log(playRound(`${playerSelection}`, `${computerChoice}`));
    }
}

computerChoice = getComputerChoice();
console.log(`COMPUTER CHOICE: ${computerChoice}`);
// Event for ROCK button
const rockBtn = document.querySelector('.rockButton');
rockBtn.addEventListener('click', ()  => console.log(playRound('rock', `${computerChoice}`)));
// Event for PAPER button
const paperBtn = document.querySelector('.paperButton');
paperBtn.addEventListener('click', () => console.log(playRound('paper', `${computerChoice}`)));
//Event for SCISSORS button
const scissorsBtn = document.querySelector('.scissorsButton');
scissorsBtn.addEventListener('click', () => console.log(playRound('scissors', `${computerChoice}`)));