

const totalRounds = 5;
let round = 0;
let humanScore = 0;
let computerScore = 0;

// Select DOM elements
const userSelectionBtns = document.querySelectorAll("#player .game-grid button");
const computerSelectionBtns = document.querySelectorAll("#pc .game-grid button");
const playerScoreDisplay = document.querySelector('#player');
const computerScoreDisplay = document.querySelector('#computer');
const roundDisplay = document.querySelector('#roundnum');

const gameOverDisplay = document.querySelector('.container#gameOver');
const resetGameBtn = document.querySelector('button#resetGame');
const resetGameTextbox = document.querySelector('#gameOver p')

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
};


function playRound(humanChoice, computerChoice) {
    if (round === 5) return "Game over";
    
    if (humanChoice === computerChoice) return 'Tie';
    
    // object to store game rules where key = choice and value = what choice wins against  
    const wins = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    // return round results
    let roundResult = wins[humanChoice] === computerChoice ? 'Player' : 'Computer';

    switch (roundResult) {
    case 'Player':
        humanScore += 1;
        break;
    case 'Computer':
        computerScore +=1;
        break;
    default:
        break;
    };

    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    
};

// Reset game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;

    // Reset scoreboard content
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    roundDisplay.textContent = '0';

    // Enable player buttons
    
    userSelectionBtns.forEach(btn => btn.disabled = false);
    computerSelectionBtns.forEach(btn => btn.disabled = false);

    // Hide game over display
    gameOverDisplay.style.display = "none";
    
}

resetGameBtn.addEventListener('click', (e) => {
    resetGame();
});



userSelectionBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        // User selection
        const humanChoice = e.currentTarget.id;

        // Computer selection
        const computerChoice = getComputerChoice();

        // Update round counter and display
        round += 1;
        roundDisplay.textContent = round;

        playRound(humanChoice, computerChoice);

        if (round === 5) {
            userSelectionBtns.forEach(btn => btn.disabled = true);
            computerSelectionBtns.forEach(btn => btn.disabled = true);

            gameOverDisplay.style.display = "block";

            let winnerText;

            if(humanScore > computerScore) {
                winnerText = `The game has ended - you win! :D...\nDo you want to play again?`
            } else if (humanScore < computerScore) {
                 winnerText = `The game has ended - the commputer wins :(...\nDo you want to play again?`
            } else {winnerText = `The game has ended with a tie - no one wins...\nDo you want to play again?`}

            resetGameTextbox.textContent = winnerText

        }
    });
});