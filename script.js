const totalRounds = 5;
let round = 0;
let humanScore = 0;
let computerScore = 0;

const userSelectionBtns = document.querySelector(".game-grid");
const result = document.querySelector(".gameResult");
const playerScoreDisplay = document.querySelector('#Player');
const computerScoreDisplay = document.querySelector('#Computer');
const roundDisplay = document.querySelector('#roundnum');

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
};

function playRound(humanChoice, computerChoice) {
    
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
    playerScore = 0;
    computerScore = 0;
    round = 0;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    roundDisplay.textContent = '0';
    
}



userSelectionBtns.addEventListener('click', (e) => {
    // User selection
    const button = e.target.closest("button");
    if (!button) return;
    const humanChoice = button.id;

    // Computer selection
    const computerChoice = getComputerChoice();

    // Update round counter and display
    round += 1
    roundDisplay.textContent = round

    playRound(humanChoice,computerChoice);


    
    


});




// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     let round = 0;

//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     let roundResult = playRound(humanSelection, computerSelection);

//     switch (roundResult) {
//         case 'Player':
//             humanScore += 1;
//             round += 1
//             alert(
//                 `Player wins!\nYou: ${humanScore} - Computer: ${computerScore}\n${totalRounds - round} rounds left
//                 `
//             );
//             break;
//         case 'Computer':
//             computerScore +=1;
//             round += 1
//             alert(
//                 `Computer wins!\nYou: ${humanScore} - Computer: ${computerScore}\n${totalRounds - round} rounds left
//                 `
//             );
//             break;
//         default:
//             round += 1
//             alert(
//                 `Tie!\nYou: ${humanScore} - Computer:${computerScore}\n${totalRounds - round} rounds left
//                 `
//             );
//             break;
        
//     };

//     function determineWinner(humanScore, computerScore) {
//         if (humanScore > computerScore) {
//             return "Human wins";
//         } else if (humanScore < computerScore) {
//             return "Computer wins";
//         } else return "Tie"
//     };

//     alert(`The game has ended with the score:\nYou: ${humanScore} - Computer: ${computerScore}\n${determineWinner(humanScore,computerScore)}!`);
// };

// playGame();


