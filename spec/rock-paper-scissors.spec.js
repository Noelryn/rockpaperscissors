const { RockPaperScissors } = require('./spec.helper')

describe('Rock Paper Scissor', () => {
    let rps = new RockPaperScissors()

    it('should return a tie when same object', () => {
        expect(rps.compare("rock", "rock")).to.eq("TIE!");
    })

    it('should return paper beats rock', () => {
        expect(rps.compare("paper", "rock")).to.eq("Paper beats rock")
    })
    
});
