console.log("Let's play Rock, Paper, Scissors!");

const choices = ["Rock", "Paper", "Scissors"]
let humanScore = 0;
let computerScore = 0;
let tieCount = 0;
let whoWon = "";

function playRound(humChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)]; 
        let result = "";
 
        if (humChoice === computerChoice) {
                playerChoiceDisplay.textContent = `Player: ${humChoice}`;
                computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
                whoWon = "Tie! Another round!";
                result = tieCount++;
                tieCountDisplay.textContent = `Ties: ${tieCount}`;
        } else if (humChoice === "Paper" && computerChoice === "Rock") {
                playerChoiceDisplay.textContent = `Player: ${humChoice}`;
                computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
                whoWon = "You win! Paper beats Rock";
                result = humanScore++;
                playerScoreDisplay.textContent = `Player score: ${humanScore}`;
        } else if (humChoice === "Rock" && computerChoice === "Scissors") {
                playerChoiceDisplay.textContent = `Player: ${humChoice}`;
                computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
                whoWon = "You win! Rock beats Scissors";
                result = humanScore++;
                playerScoreDisplay.textContent = `Player score: ${humanScore}`;
        } else if (humChoice === "Scissors" && computerChoice === "Paper") {
                playerChoiceDisplay.textContent = `Player: ${humChoice}`;
                computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
                whoWon = "You win! Scissors beats Paper";
                result = humanScore++;
                playerScoreDisplay.textContent = `Player score: ${humanScore}`;
        } else if (computerChoice === "Paper" && humChoice === "Rock") {
                playerChoiceDisplay.textContent = `Player: ${humChoice}`;
                computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
                whoWon = "You lose! Paper beats Rock";
                result = computerScore++;
                computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
        } else if (computerChoice === "Rock" && humChoice === "Scissors") {
                playerChoiceDisplay.textContent = `Player: ${humChoice}`;
                computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
                whoWon = "You lose! Rock beats Scissors";
                result = computerScore++;
                computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
        } else if (computerChoice === "Scissors" && humChoice === "Paper") {
                playerChoiceDisplay.textContent = `Player: ${humChoice}`;
                computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
                whoWon = "You lose! Scissors beats Paper";
                result = computerScore++;
                computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
        }

        roundWinner.textContent = `Round winner: ${whoWon}`;
        
        console.log("Your score: ",humanScore,"-","Computer score: ",computerScore,"-","Ties: "  ,tieCount)
                if (humanScore == 5) {
                        alert("You won!");
                        return playAgain();
                } else if (computerScore == 5) {
                        alert("You lost!");
                        return playAgain();
                }
        }


function playAgain() {
        const newPlay = window.prompt("Do you want to play again? Yes or No")
        if (newPlay == "Yes") {
                humanScore = 0;
                computerScore = 0;
                tieCount = 0;
                whoWon = "";
                humChoice = "";
                computerChoice = "";
                playerChoiceDisplay.textContent = `Player: ${humChoice}`;
                computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
                roundWinner.textContent = `Round winner: `;
                playerScoreDisplay.textContent = `Player score: ${humanScore}`;
                computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
                tieCountDisplay.textContent = `Ties: ${tieCount}`;
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
const roundWinner = document.createElement("p");

const playerScoreDisplay = document.createElement("p");
const computerScoreDisplay = document.createElement("p");
const tieCountDisplay = document.createElement("p");

rockBtn.textContent = "👊";
paperBtn.textContent = "✋";
scissorsBtn.textContent = "🖖";

playerChoiceDisplay.textContent = `Player: `;
computerChoiceDisplay.textContent = `Computer: `;
roundWinner.textContent = `Round winner: ${whoWon}`;

playerScoreDisplay.textContent = `Player score: ${humanScore}`;
computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
tieCountDisplay.textContent = `Ties: ${tieCount}`;

choiceSelectionDiv.appendChild(rockBtn);
choiceSelectionDiv.appendChild(paperBtn);
choiceSelectionDiv.appendChild(scissorsBtn);
choiceSelectionDiv.appendChild(playerChoiceDisplay);
choiceSelectionDiv.appendChild(computerChoiceDisplay);
choiceSelectionDiv.appendChild(roundWinner);
choiceSelectionDiv.appendChild(playerScoreDisplay);
choiceSelectionDiv.appendChild(computerScoreDisplay);
choiceSelectionDiv.appendChild(tieCountDisplay);
container.appendChild(choiceSelectionDiv);

rockBtn.addEventListener("click", () => {
        playRound(choices[0]);
});
paperBtn.addEventListener("click", () => {
        playRound(choices[1]);
});
scissorsBtn.addEventListener("click", () => {
        playRound(choices[2]);
});


