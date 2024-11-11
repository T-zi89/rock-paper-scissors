console.log("Hello World")

function getComputerChoice() {
    const computerNumber = Math.random(); 
        if (computerNumber < 0.33) {
         return "Rock";
    }   else if (computerNumber > 0.33 && computerNumber < 0.66) {
         return "Paper"; 
    }   else {
         return "Scissor";
    }
}
//console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = window.prompt("Choose: Rock, Paper or Scissor").toLowerCase();
    if (humanChoice === "rock") {
        return "Rock";
    } else if (humanChoice === "paper") {
        return "Paper";
    } else {
        return "Scissor";
    }
}

//console.log(getHumanChoice())

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame (playRound) {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Tie! Another round!";
        } else if (    
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissor") ||
            (humanChoice === "scissor" && computerChoice === "paper")
        ) { humanScore ++;
            return "Win!";
        } else {
            computerScore ++;
            return "Dang!";
        }
    }
  }
console.log(getHumanChoice)