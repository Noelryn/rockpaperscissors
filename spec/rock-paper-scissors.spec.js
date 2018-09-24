const { rockPaperScissors } = require( './spec.helper')

describe('Rock Paper Scissors', () => {
    let rockPaperScissors = new RockPaperScissors
})

it('returns a tie when objects are the same', () => {
    expect(rockPaperScissors.compare('rock', 'rock')).to.eq("TIE!")
})
