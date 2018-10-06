const { RockPaperScissors } = require('./spec.helper')

describe('Rock Paper Scissor', function() {
    let rps = new RockPaperScissors();
  
    it('should return a tie when same object', () => {
        expect(rps.compare('paper', 'paper')).to.eq("TIE!!!");
    })

    it('should return rock wins when against scissors', () => {
        expect(rps.compare("rock", "scissors")).to.eq("rock Wins");
    })

    it('should return you lose when against rock', () => {
        expect(rps.compare("rock", "paper")).to.eq("Loser!");
    })

    it('should return paper wins when against rock', () => {
        expect(rps.compare("paper", "rock")).to.eq("paper Wins");
    })

    it('should return you lose when against paper', () => {
        expect(rps.compare("paper", "scissors")).to.eq("Loser!");
    })

    it('should return scissors wins when against paper', () => {
        expect(rps.compare("paper", "rock")).to.eq("paper Wins");
    })

    it('should return you lose when against paper', () => {
        expect(rps.compare("paper", "scissors")).to.eq("Loser!");
    })
})