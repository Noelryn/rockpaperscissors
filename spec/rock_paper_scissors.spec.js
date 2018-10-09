const { RockPaperScissors } = require('./spec.helper')
const { computerChoice } = ("paper")

describe('Rock Paper Scissor', function() {
    let rps = new RockPaperScissors();
  
    it('should return "WINNER!! The Computer choose paper"', () => {
        expect(rps.play("scissors")).to.eql("WINNER!! The Computer choose paper")
    })
    
    it('should return "TIE! The Computer choose paper"', () => {
        expect(rps.play("paper")).to.eql("TIE! The Computer choose paper")
    });

    it('should return "LOSER! The Computer choose paper"', () => {
        expect(rps.play("rock")).to.eql("LOSER! The Computer choose paper")
    })

});