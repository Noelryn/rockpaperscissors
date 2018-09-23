const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let rockPaperScissor = fs.readFileSync('./src/js/rock-paper-scissor.js');
eval( rockPaperScissor + `\nexports.RockPaperScissor = rockPaperScissor;`)
