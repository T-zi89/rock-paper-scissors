console.log("Hello World");

// Computer choice

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); 
        if (computerChoice === 0) {
         return "Rock";
    }   else if (computerChoice === 1) {
         return "Paper"; 
    }   else {
         return "Scissors";
    }
}

//console.log(getComputerChoice())

// Human choice

function getHumanChoice() {
    let humanChoicePrompt = window.prompt(("Choose: Rock, Paper or Scissors"));
    let humanChoice = humanChoicePrompt.toLowerCase();
    if (humanChoice === "rock") {
        return "Rock";
    } else if (humanChoice === "paper") {
        return "Paper";
    } else if (humanChoice === "scissors") {
        return "Scissors";
    }
}

//console.log(getHumanChoice())



// Global scores (the first to get to 5 wins)

function playGame() {
        for (let i = 0; i < 5; i++)  {
                let humanScore = 0;
                let computerScore = 0;

        function playRound(humanChoice, computerChoice) {
                if (humanChoice === computerChoice) {
                        return console.log("Tie! Another round!");
                } else if (humanChoice === "Paper" && computerChoice === "Rock") {
                        humanScore++;
                        return console.log("You win! Paper beats Rock");
                } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
                        humanScore++;
                        return console.log("You win! Rock beats Scissors");
                } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
                        humanScore++;
                        return console.log("You win! Scissors beats Paper");       
                } else if (computerChoice === "Paper" && humanChoice === "Rock") {
                        computerScore++;
                        return console.log("You lose! Paper beats Rock");
                } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
                        computerScoreScore++;
                        return console.log("You lose! Rock beats Scissors");
                } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
                        computerScore++;
                        return console.log("You lose! Scissors beats Paper");
                }
            }
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            console.log(humanScore, computerScore)   
        }
}    
// Play
playGame()

