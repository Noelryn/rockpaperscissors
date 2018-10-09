const { RockPaperScissors } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can input a value and get RockPaperScissors results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })

    it('clicking on the "rock" button', async () => {
        await browser.fillIn("input[id='rock']",)
        await browser.clickOnButton("input[id='rock']")
        let content = await browser.getContent("[id='result']")
        expect(content).to.eql('rock');
    })

    it('clicking on the "paper" button', async () => {
        await browser.fillIn("input[id='paper']",)
        await browser.clickOnButton("input[id='paper']")
        let content = await browser.getContent("[id='result']")
        expect(content).to.eql('paper');
    })

    it('clicking on the "scissors" button', async () => {
        await browser.fillIn("input[id='scissors']",)
        await browser.clickOnButton("input[id='scissors']")
        let content = await browser.getContent("[id='result']")
        expect(content).to.eql('scissors');
    })
})