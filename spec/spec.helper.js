const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let rps = fs.readFileSync('./src/js/rock_paper_scissors.js');
eval( rps + `\nexports.RockPaperScissors = RockPaperScissors;`)

