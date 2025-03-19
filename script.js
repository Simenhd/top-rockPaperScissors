let humanScore = 0;
let computerScore = 0;
let round = 0;

// Get computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
};

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors?");
    return choice

};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) return 'Tie';
    
    const wins = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };
    
    return wins[humanChoice] === computerChoice ? 'Player' : 'Computer';
};

function playGame() {
    
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
