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

let humanScore = 0
let computerScore = 0

// Play

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("Tie! Another round!");
    } else if (
              (humanChoice === "Paper" && computerChoice === "Rock") ||
              (humanChoice === "Rock" && computerChoice === "Scissors") ||
              (humanChoice === "Scissors" && computerChoice === "Paper") 
            ){
                humanScore++;
                return console.log("You win!");       
    } else {
        computerScore++;
        return console.log("You lose!");
    }
}            

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Global scores (the first to get to 5 wins)

console.log(humanScore, computerScore)