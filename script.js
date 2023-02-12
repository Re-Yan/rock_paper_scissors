'strict mode'

let playerSelection, computerChoice, promptResult;

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

computerChoice = getComputerChoice();

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

game();