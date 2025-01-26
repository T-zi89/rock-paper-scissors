console.log("Let's play Rock, Paper, Scissors!");

let humanScore = 0;
let computerScore = 0;
let tieCount = 0;

function playRound(humChoice) {
        const computerChoice = Math.floor(Math.random() * 3); 
        let result = "";
        computerSelection = "";
        switch (computerChoice) {
                case 0:
                        computerSelection = "Rock";
                        computerChoiceDisplay.textContent = 'Computer: Rock';
                        break
                case 1:
                        computerSelection = "Paper"; 
                        computerChoiceDisplay.textContent = 'Computer: Paper';
                        break
                case 2:
                        computerSelection = "Scissors";
                        computerChoiceDisplay.textContent = 'Computer: Scissors';
                        break
                }
                console.log(computerSelection);
                console.log(humChoice);
        
            
        if (humChoice === computerSelection) {
                console.log("Tie! Another round!");
                result = tieCount++;
                tieCountDisplay.textContent = tieCountDisplay, " ", tieCount;
        } else if (humChoice === "Paper" && computerSelection === "Rock") {
                console.log("You win! Paper beats Rock");
                result = humanScore++;
                playerScoreDisplay.textContent = humanScore;
        } else if (humChoice === "Rock" && computerSelection === "Scissors") {
                console.log("You win! Rock beats Scissors");
                result = humanScore++;
                playerScoreDisplay.textContent = humanScore;
        } else if (humChoice === "Scissors" && computerSelection === "Paper") {
                console.log("You win! Scissors beats Paper");
                result = humanScore++;
                playerScoreDisplay.textContent = humanScore; 
        } else if (computerSelection === "Paper" && humChoice === "Rock") {
                console.log("You lose! Paper beats Rock");
                result = computerScore++;
                computerScoreDisplay.textContent = computerScore;
        } else if (computerSelection === "Rock" && humChoice === "Scissors") {
                console.log("You lose! Rock beats Scissors");
                result = computerScore++;
                computerScoreDisplay.textContent = computerScore;
        } else if (computerSelection === "Scissors" && humChoice === "Paper") {
                console.log("You lose! Scissors beats Paper");
                result = computerScore++;
                computerScoreDisplay.textContent = computerScore;
        }
        console.log("Your score: ",humanScore,"-","Computer score: ",computerScore,"-","Ties: "  ,tieCount)
                if (humanScore == 5) {
                        console.log("You won!");
                        return playAgain();
                } else if (computerScore == 5) {
                        console.log("You lost!");
                        return playAgain();
                }
        }


function playAgain() {
        const newPlay = window.prompt("Do you want to play again? Yes or No")
        if (newPlay == "Yes") {
                humanScore = 0;
                computerScore = 0;
                tieCount = 0;
                playerChoiceDisplay.textContent = 'Player: ';
                computerChoiceDisplay.textContent = 'Computer: ';

                alert("Another round");
        return playRound();
        } else if (newPlay == "No") {
                console.log("Bye");
        } else {
                alert("Please type your choice correctly");
                return playAgain();
        }
}

const container = document.querySelector("#container");
const choiceSelectionDiv = document.createElement("div");
choiceSelectionDiv.classList.add("choiceSelectionDiv");
choiceSelectionDiv.textContent = "Make your choice: ";

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const playerChoiceDisplay = document.createElement("p");
const computerChoiceDisplay = document.createElement("p");

const playerScoreDisplay = document.createElement("p");
const computerScoreDisplay = document.createElement("p");
const tieCountDisplay = document.createElement("p");

rockBtn.textContent = "👊";
paperBtn.textContent = "✋";
scissorsBtn.textContent = "🖖";

playerChoiceDisplay.textContent = 'Player: ';
computerChoiceDisplay.textContent = 'Computer: ';

playerScoreDisplay.textContent = 'Player score: ';
computerScoreDisplay.textContent = "Computer score: ";
tieCountDisplay.textContent = "Ties: ";

choiceSelectionDiv.appendChild(rockBtn);
choiceSelectionDiv.appendChild(paperBtn);
choiceSelectionDiv.appendChild(scissorsBtn);
choiceSelectionDiv.appendChild(playerChoiceDisplay);
choiceSelectionDiv.appendChild(computerChoiceDisplay);
choiceSelectionDiv.appendChild(playerScoreDisplay);
choiceSelectionDiv.appendChild(computerScoreDisplay);
choiceSelectionDiv.appendChild(tieCountDisplay);
container.appendChild(choiceSelectionDiv);

rockBtn.addEventListener("click", () => {
        playRound("Rock");
        playerChoiceDisplay.textContent = 'Player: Rock';
});
paperBtn.addEventListener("click", () => {
        playRound("Paper");
        playerChoiceDisplay.textContent = 'Player: Paper';
});
scissorsBtn.addEventListener("click", () => {
        playRound("Scissors");
        playerChoiceDisplay.textContent = 'Player: Scissors';
});


