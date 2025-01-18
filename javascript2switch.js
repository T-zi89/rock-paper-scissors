console.log("Welcome to Rock, Paper, Scissors")

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
        console.log("The computer chose Rock");
        return "Rock";    
        case 1:
        console.log("The computer chose Paper");
        return "Paper";
        case 2:
        console.log("The computer chose Scissors");
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoiceInput = window.prompt("Choose between Rock, Paper and Scissors");
    let humanChoice = humanChoiceInput.toLowerCase();
    switch (humanChoice) {
        case "rock":
        console.log("You chose Rock");
        return "Rock";
        case "paper":
        console.log("You chose Paper");
        return "Paper";
        case "scissors":
        console.log("You chose Scissors");
        return "Scissors";
        default:
        console.log("Please type your choice correctly"); 
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let tieCount = 0;

    function playRound(humanChoice, computerChoice) {
        switch (playRound) {
            case humanChoice === computerChoice:
                console.log("It's a Tie");
                return tieCount++;
                break;
            case humanChoice === "Rock" && computerChoice === "Scissors":
            case humanChoice === "Paper" && computerChoice === "Rock":
            case humanChoice === "Scissors" && computerChoice === "Paper":
                console.log("You won");
                return humanScore++;
                break;
            case computerChoice === "Rock" && humanChoice === "Scissors":
            case computerChoice === "Paper" && humanChoice === "Rock":
            case computerChoice === "Scissors" && humanChoice === "Paper":
                console.log("You lost");
                return computerScore++;
                break;
        }
    }
    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Your score: ",humanScore,"-","Computer score: ",computerScore,"-","Ties: "  ,tieCount)
    }
}  
playGame()


