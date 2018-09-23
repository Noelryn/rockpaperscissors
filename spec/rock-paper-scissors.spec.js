const { rockPaperScissor } = require( '.spec.helper')

describe('Rock Paper Scissors', () => {
    let rockPaperScissor = new RockPaperScissor
})

it('returns try again if player loses', () => {
    expect(rockPaperScissor.check(rock)).to eql(paper)
})