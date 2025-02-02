console.log("Let's play Rock, Paper, Scissors!");

// This array displays the possible choices to be used by the computerChoice
// and as values of by the buttons clicked by the player with the event listeners
const choices = ["Rock", "Paper", "Scissors"]

// Declared score global variables to be updated by the playRound function
let humanScore = 0;
let computerScore = 0;
let tieCount = 0;
let whoWon = "";

// The main function of the game, take the humChoice as an argument and check the outcome
// against the computerChoice, updates the scores global variables and also
// updates the text content of the roundWinner and Player, Computer and Ties scores displayed
// This function also stops when one of the players get to 5 wins and returns to another
// function called playAgain
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

// This function asks the player if he wants to play another game, if the answer is Yes it resets all the text
// displayed on the page, if the answer is No, it displays a Bye alert
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

// Elements created
const container = document.querySelector("#container");
const choiceSelectionDiv = document.createElement("div");
choiceSelectionDiv.classList.add("choiceSelectionDiv");
const choicesButtons = document.createElement("div");
choicesButtons.classList.add("choicesButtons");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const choiceDisplayDiv = document.createElement("div");
choiceDisplayDiv.classList.add("choiceDisplayDiv");
const choicesText = document.createElement("p");
const playerChoiceDisplay = document.createElement("p");
const computerChoiceDisplay = document.createElement("p");
const scoresDiv = document.createElement("div");
scoresDiv.classList.add("scoresDiv");

const roundWinner = document.createElement("p");
const playerScoreDisplay = document.createElement("p");
const computerScoreDisplay = document.createElement("p");
const tieCountDisplay = document.createElement("p");

// Updated the text content of the elements created
choiceSelectionDiv.textContent = "Make your choice: ";
choicesText.textContent = "Choices: ";
playerChoiceDisplay.textContent = `Player: `;
computerChoiceDisplay.textContent = `Computer: `;

// Updated the text content of other elements, this time by using as a placeholder
// the value of the variables previously declared as the get updated
roundWinner.textContent = `Round winner: ${whoWon}`;
playerScoreDisplay.textContent = `Player score: ${humanScore}`;
computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
tieCountDisplay.textContent = `Ties: ${tieCount}`;

// The DOM is structured
choicesButtons.appendChild(rockBtn);
choicesButtons.appendChild(paperBtn);
choicesButtons.appendChild(scissorsBtn);

choiceDisplayDiv.appendChild(playerChoiceDisplay);
choiceDisplayDiv.appendChild(computerChoiceDisplay);

scoresDiv.appendChild(roundWinner);
scoresDiv.appendChild(playerScoreDisplay);
scoresDiv.appendChild(computerScoreDisplay);
scoresDiv.appendChild(tieCountDisplay);
choiceSelectionDiv.appendChild(choicesButtons);
choiceSelectionDiv.appendChild(choicesText);
container.appendChild(choiceSelectionDiv);
container.appendChild(choiceDisplayDiv);
container.appendChild(scoresDiv);

// Styling the elements
rockBtn.textContent = "👊";
paperBtn.textContent = "✋";
scissorsBtn.textContent = "🖖";
rockBtn.style.fontSize = "100px";
paperBtn.style.fontSize = "100px";
scissorsBtn.style.fontSize = "100px";
choicesText.style.color = "blue";
choicesText.style.fontWeight = "900";
playerChoiceDisplay.style.color = "green";
computerChoiceDisplay.style.color = "red";
playerScoreDisplay.style.color = "green";
computerScoreDisplay.style.color = "red";
roundWinner.style.cssText = "color: blue";
roundWinner.style.fontWeight = "900";

// Event listeners are added to the buttons as they are clicked, they take 
// the choice from the array at the start and pass it as an argument for the playRound function
rockBtn.addEventListener("click", () => {
        playRound(choices[0]);
});
paperBtn.addEventListener("click", () => {
        playRound(choices[1]);
});
scissorsBtn.addEventListener("click", () => {
        playRound(choices[2]);
});


