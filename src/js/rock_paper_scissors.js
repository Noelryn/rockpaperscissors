function RockPaperScissors() {
    this.check = (choice1, choice2) => {
        if (choice1 === choice2) {
            return "TIE!";
        }
        if (choice1 === "paper") {
            if (choice2 === "rock"){
                return "Paper beats rock";
            }
        }
        if (choice1 === "rock") {
            if(choice2 === "scissors") {
                return "Rock beats scissors";
            }
        }
    }
}

