console.log("Hello World")

//function getComputerChoice(Rock,Paper,Scissor) {
//    if (number <= 33,33) return "Rock";
//    else if (number > 33,33, number <= 66,66) return "Paper";
//    else if (number > 66,66) return "Scissor";
//}

const computerChoice = Math.random();
let number = (computerChoice * 100)
console.log(number)

function getComputerChoice(number) {
    let choice
    if (number < 33,33) choice = "Rock"; {
    }    if (number > 33,33 && number < 66,66) choice = "Paper"; {
    }   if (number > 66,66) choice = "Scissor";
}

console.log(getComputerChoice())
console.log(choice)