//Welcome message
console.log("Let's play Rock, Paper, Scissors!");
// This function assigns to the computer a random choice between Rock, Paper and Scissors
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
// This function asks the player to choose between Rock, Paper and Scissors, the choice is not case sensitive, but it has to be typed 
// correctly, if that's not the case, it returns to ask the player again, typing correctly
function getHumanChoice() {
    let humanChoicePrompt = window.prompt(("Choose: Rock, Paper or Scissors"));
    let humanChoice = humanChoicePrompt.toLowerCase();
    if (humanChoice === "rock") {
        return "Rock";
    } else if (humanChoice === "paper") {
        return "Paper";
    } else if (humanChoice === "scissors") {
        return "Scissors";
    } else {
        console.log("Please type your choice correctly");
        return getHumanChoice();
    }
}
// This is the main function of the Rock, Paper, Scissors game
function playGame() {
        let humanScore = 0;
        let computerScore = 0;
        let tieCount = 0;
// This function has all the possible outcomes based on all the possible choices, also returns a + to all scores and ties variables  
        function playRound(humanChoice, computerChoice) {
                if (humanChoice === computerChoice) {
                        console.log("Tie! Another round!");
                        return tieCount++;
                } else if (humanChoice === "Paper" && computerChoice === "Rock") {
                        console.log("You win! Paper beats Rock");
                        return humanScore++;
                } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
                        console.log("You win! Rock beats Scissors");
                        return humanScore++;
                } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
                        console.log("You win! Scissors beats Paper"); 
                        return humanScore++;    
                } else if (computerChoice === "Paper" && humanChoice === "Rock") {
                        console.log("You lose! Paper beats Rock");
                        return computerScore++;
                } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
                        console.log("You lose! Rock beats Scissors");
                        return computerScore++;
                } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
                        console.log("You lose! Scissors beats Paper")
                        return computerScore++;
                }
        }
// A loop for five rounds, displaying player and computer scores, also ties 
        /* for (let i = 0; i < 5; i++)  {
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
                console.log("Your score: ",humanScore,"-","Computer score: ",computerScore,"-","Ties: "  ,tieCount)
        }     */
// Declaring if the player won, lost or tied, all the choices return to the next function, asking the player if he wants to play again
        if (humanScore > computerScore) {
                console.log("You won!");
                return playAgain();
        } else if (computerScore > humanScore) {
                console.log("You lost!");
                return playAgain();
        } else {
                console.log("It's a tie!");
                return playAgain();
        }
// This function asks the player if he wants to play another round, if he chooses Yes, another round starts, if he chooses No, a goodbye
// message appears, if he type anything else, the question is asked again
        function playAgain() {
                let askingToPlayAgain = window.prompt(("Do you want to play again? Yes/No"));
                        if (askingToPlayAgain === "Yes") {
                        console.log("Let's go again!");
                        return playGame();
                        } else if (askingToPlayAgain === "No") {
                        return console.log("Bye");
                        } else {
                        console.log("Please type your choice correctly");
                        return playAgain();
                        }        
        }
}
// Play
//playGame()

const container = document.querySelector("#container");
const choiceSelectionDiv = document.createElement("div");
choiceSelectionDiv.classList.add("choiceSelectionDiv");
choiceSelectionDiv.textContent = "Make your choice";
container.appendChild(choiceSelectionDiv);
const buttons = querySelector("button");
buttons.forEach((button) => {
        button.addEventListener("click", () => {
                alert(button.id);
        });
})

    

