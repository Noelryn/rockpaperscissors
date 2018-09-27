let userScore = 0;
let computerScore =0;
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoice());

function RockPaperScissors() {
    this.compare = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return "TIE!";
        }

        if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                return "Winner winner chicken dinner!";
            } else {
                return "Loser!";
            }
        }

        if (userChoice === "paper") {
            if (computerChoice === "rock") {
                return "Winner winner chicken dinner!";
            } else {
                return "Loser!";
            }
        }

        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                return "Winner winner chicken dinner!";
            } else {
                return "Loser!";
            }
        }
    
    }

        rock_div.addEventListener('click', function () {
            game("rock");
        })

        paper_div.addEventListener('click', function () {
            game("paper");
        })

        scissors_div.addEventListener('click', function () {
            game("scissors");
        })

    let result = compare(userScore, computerScore);
        document.write("<br><hr><br>" + result);
}



