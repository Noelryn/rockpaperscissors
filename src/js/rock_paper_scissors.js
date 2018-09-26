require('.src/js/choice.js')

function RockPaperScissors() {
    this.check = (choice1, choice2) => {
        if (choice1 === choice2) {
            return "TIE!";
        }

        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "Winner winner chicken dinner!";
            } else {
                return "Loser!";
            }
        }

        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "Winner winner chicken dinner!";
            } else {
                return "Loser!";
            }
        }

        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "Winner winner chicken dinner!";
            } else {
                return "Loser!";
            }
        }

        let results = check(userChoice,computerChoice);
        document.write("<br><hr><br>" + results);
    }
}



