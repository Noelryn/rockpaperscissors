function RockPaperScissors()  {
    this.compare = (com, player) => {
        if (com == player) {
            return 'TIE!!!'; 
        } else if (com == 'rock'){
            if (player == 'scissors') {
            return 'rock Wins';
            } else {
            return 'Loser!';
            }

        } else if (com == 'paper') {
            if (player == 'rock'){
                return 'paper Wins';
            } else {
                return 'Loser!';
            }
        }  else if (com == 'scissors') {
            if (player == 'paper') {
                return 'scissors win';
            } else {
                return 'Loser!';
            }
        }
    }
};