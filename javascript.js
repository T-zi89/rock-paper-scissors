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
console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = window.prompt("Choose: Rock, Paper or Scissor");



}

console.log(getHumanChoice())