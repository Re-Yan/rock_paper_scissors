'strict mode'

console.log('test');

const getComputerChoice = function() {
    let computerChoice;
    let randnum = Math.floor((Math.random() * (4 - 1)) + 1);

    if (randnum === 1) {
        return computerChoice = 'rock';
    } else if (randnum === 2) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissors';
    };
    
};