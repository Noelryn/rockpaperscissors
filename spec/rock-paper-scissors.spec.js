const { RockPaperScissors } = require( './spec.helper')

describe('Rock Paper Scissors', () => {
    let rps = new rockPaperScissors
});

it('returns a tie when objects the same', () => {
    expect(rps.compare('rock', 'rock')).to.eq("TIE!")
})

it 