const totalRounds = 5;

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
};

function getHumanChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice;

    while (true) {
        choice = prompt("Rock, Paper, Scissors?").toLowerCase();
        if (choices.includes(choice)) {
            return choice;
        }
        alert("Invalid input. Please enter Rock, Paper, or Scissors.");
    }
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;



    function playRound(humanChoice, computerChoice) {
    
        if (humanChoice === computerChoice) return 'Tie';
        
        const wins = {
            'rock': 'scissors',
            'paper': 'rock',
            'scissors': 'paper'
        };
        
        return wins[humanChoice] === computerChoice ? 'Player' : 'Computer';
    };


    for (let i = 0; i < totalRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let roundResult = playRound(humanSelection, computerSelection);

        switch (roundResult) {
            case 'Player':
                humanScore += 1;
                round += 1
                alert(
                    `Player wins!\nYou: ${humanScore} - Computer: ${computerScore}\n${totalRounds - round} rounds left
                    `
                );
                break;
            case 'Computer':
                computerScore +=1;
                round += 1
                alert(
                    `Computer wins!\nYou: ${humanScore} - Computer: ${computerScore}\n${totalRounds - round} rounds left
                    `
                );
                break;
            default:
                round += 1
                alert(
                    `Tie!\nYou: ${humanScore} - Computer:${computerScore}\n${totalRounds - round} rounds left
                    `
                );
                break;
        }
    };

    function determineWinner(humanScore, computerScore) {
        if (humanScore > computerScore) {
            return "Human wins";
        } else if (humanScore < computerScore) {
            return "Computer wins";
        } else return "Tie"
    };

    alert(`The game has ended with the score:\nYou: ${humanScore} - Computer: ${computerScore}\n${determineWinner(humanScore,computerScore)}!`);
};

playGame();


