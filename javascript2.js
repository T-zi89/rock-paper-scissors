console.log("hi")

function getComputerChoice() {
let computerSelection = (Math.floor(Math.random() * 3));
switch (computerSelection) {
    case 0:
        return computerSelection = "Computer chose Rock";
        break;
    case 1:
        return computerSelection = "Computer chose Paper";
        break;
    case 2:
        return computerSelection = "Computer chose Scissors";
        break;
}}

function getHumanChoice() {
    let humanChoiceSelection = window.prompt("Choose between Rock, Paper and Scissors");
    let humanChoice = humanChoiceSelection.toLowerCase()
    if (humanChoice == "rock") {
        return "You chose Rock";
    } else if (humanChoice == "paper") {
        return "You chose Paper";
    } else if (humanChoice == "scissors") {
        return "You chose Scissors";
    } else {
        console.log("Please type your choice correctly");
        return getHumanChoice();
    }
}
console.log(getComputerChoice())
console.log(getHumanChoice())


//if (computerSelection === 0) {
//    return "Rock";
//} else if (computerSelection === 1) {
//    return "Paper";
//} else if (computerSelection === 2) {
//    return "Scissors";
//}

//}
let humanPoints = 0;
let computerPoints = 0;
let tieCount = 0;
function playRound(computerSelection, humanChoice) {
    if (computerSelection === "Computer chose Paper" && humanChoice === "You chose Paper") {
        console.log("It's a tie, choose again");
        return tieCount++;
    } else if (computerSelection === "Computer chose Paper" && humanChoice === "You chose Rock" ||
               computerSelection === "Computer chose Rock" && humanChoice === "You chose Scissors" ||
               computerSelection === "Computer chose Scissors" && humanChoice === "You chose Paper") {
                console.log("You lost");
                return computerPoints++;
              } else {
                console.log("You won");
                return humanPoints++;
              }       
}

console.log(humanPoints, computerPoints)

