const { RockPaperScissors } = require('./spec.helper')

describe('Rock Paper Scissor', () => {
    let rps = new RockPaperScissors

    it('should return a tie when same object', () => {
        expect(rps.check("rock", "rock")).to.eq("TIE!");
    })

    it('should return paper beats rock', () => {
        expect(rps.check("paper", "rock")).to.eq("Paper beats rock")
    })

    it('should return rock beats scissors', () => {
        expect(rps.check("rock", "scissors")).to.eq("Rock beats scissors")
    })

    it('should return scissors beats paper', () => {
        expect(rps.check("scissors", "paper")).to.eq("Scissors beats paper")
    })
});
