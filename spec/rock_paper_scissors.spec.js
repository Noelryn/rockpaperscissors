const { RockPaperScissors } = require('./spec.helper')

describe('Rock Paper Scissor', () => {
    let rps = new RockPaperScissors

    it('should return a tie when same object', () => {
        expect(rps.check("rock", "rock")).to.eq("TIE!");
    })

    it('should return win against rock', () => {
        expect(rps.check("paper", "rock")).to.eq("Winner winner chicken dinner!")
    })

    it('should return Winner winner chicken dinner!', () => {
        expect(rps.check("rock", "scissors")).to.eq("Winner winner chicken dinner!")
    })

    it('should return Winner winner chicken dinner!', () => {
        expect(rps.check("scissors", "paper")).to.eq("Winner winner chicken dinner!")
    })

    it('should return you lose when against rock', () => {
        expect(rps.check("rock", "paper")).to.eq("Loser!");
    })

});
