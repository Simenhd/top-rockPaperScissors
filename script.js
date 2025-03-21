const totalRounds = 5;
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

// Select DOM elements
const playerButtons = document.querySelectorAll("#player-controls .choice-grid button");
const computerButtons = document.querySelectorAll("#computer-controls .choice-grid button");
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const roundDisplay = document.querySelector('#round-number');

const gameMessage = document.querySelector('#game-message');
const gameOverSection = document.querySelector('#game-over-section');
const restartButton = document.querySelector('#restart-button');

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random() * 3)];

    computerButtons.forEach(button => {
        button.classList.remove('highlight-computer');
        if (button.id === `computer-${choice}`) {
            button.classList.add('highlight-computer');
        }
    });
    return choice;
}

function playRound(playerChoice, computerChoice) {
    if (currentRound >= totalRounds) return;

    if (playerChoice === computerChoice) {
        gameMessage.textContent = `Both chose ${playerChoice}. It's a tie!`;
        return;
    }

    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (winConditions[playerChoice] === computerChoice) {
        playerScore++;
        gameMessage.textContent = `${playerChoice} beats ${computerChoice}. You win!`;
    } else {
        computerScore++;
        gameMessage.textContent = `${computerChoice} beats ${playerChoice}. Computer wins!`;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

// Reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;

    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    roundDisplay.textContent = '0';

    playerButtons.forEach(btn => btn.disabled = false);
    computerButtons.forEach(btn => btn.disabled = false);
    gameOverSection.style.display = "none";
    gameMessage.textContent = "Select Rock, Paper, or Scissors to start!";
}

restartButton.addEventListener('click', resetGame);

playerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        playerButtons.forEach(btn => btn.classList.remove('highlight-player'));
        e.currentTarget.classList.add('highlight-player');

        let playerChoice = e.currentTarget.id.split('-')[1];
        let computerChoice = getComputerChoice();

        currentRound++;
        roundDisplay.textContent = currentRound;

        playRound(playerChoice, computerChoice);

        if (currentRound === totalRounds) {
            playerButtons.forEach(btn => btn.disabled = true);
            gameOverSection.style.display = 'block';
        }
    });
});
