


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

const descriptiveText = document.querySelector('.descriptiveContainer p');
const resetGameDiv = document.querySelector('.container#gameOver');
const resetGameBtn = document.querySelector('button#resetGame');

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerSelection = choices[Math.floor(Math.random() * 3)];

    computerSelectionBtns.forEach(button => {
        button.classList.remove('highlightComputer');
        if (button.id === computerSelection) {
            button.classList.add('highlightComputer');
        }
    });
    return computerSelection;
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
        descriptiveText.textContent = `${humanChoice} beats ${computerChoice}. You win!`
        break;
    case 'Computer':
        computerScore +=1;
        descriptiveText.textContent = `${humanChoice} looses to ${computerChoice}. Computer wins!`
        break;
    default:
        descriptiveText.textContent = `${humanChoice} ties with ${computerChoice}. It's a tie!`
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
    resetGameDiv.style.display = "none";

    descriptiveText.textContent = "Select rock, paper or scissors to start a round!"
    
}

resetGameBtn.addEventListener('click', (e) => {
    resetGame();
});


userSelectionBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove highlight from all buttons
        userSelectionBtns.forEach(btn => btn.classList.remove('highlightUser'));

        // Highlight the selected button
        e.currentTarget.classList.add('highlightUser');
        
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

            let winnerText;

            if(humanScore > computerScore) {
                descriptiveText.textContent = `The game has ended - you win! :D...\nDo you want to play again?`
            } else if (humanScore < computerScore) {
                descriptiveText.textContent = `The game has ended - the commputer wins :(...\nDo you want to play again?`
            } else {descriptiveText.textContent = `The game has ended with a tie - no one wins...\nDo you want to play again?`}

            resetGameDiv.style.display = 'block';

            // Remove highlight from all buttons
            userSelectionBtns.forEach(btn => btn.classList.remove('highlightUser'));

            computerSelectionBtns.forEach(btn => btn.classList.remove('highlightComputer'));

        }
    });
});