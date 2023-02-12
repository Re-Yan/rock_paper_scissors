'strict mode'

const playerSelection = 'paper';

let getComputerChoice = function() {
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

let computerChoice = getComputerChoice();
console.log(`computer choice: ${computerChoice}`);

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

const gameResult = playRound(`${playerSelection}`, `${computerChoice}`);
console.log(gameResult);