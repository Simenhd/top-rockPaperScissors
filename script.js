

// Get computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
};

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors?");
    return choice

};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;



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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let roundResult = playRound(humanSelection, computerSelection);

        switch (roundResult) {
            case 'Player':
                humanScore += 1;
                console.log("Player wins");
                break;
            case 'Computer':
                computerScore +=1;
                console.log("Computer wins");
                break;
            default:
                "Tie"
                break;
        }
    };

    console.log(humanScore);
    console.log(computerScore);

};

playGame();


