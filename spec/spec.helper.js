const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

//fs is a node.js library and it's use to interact with the file system

let rps = fs.readFileSync('./src/js/rock_ps.js');
eval( rps + `\nexports.RockPaperScissors = RockPaperScissors;`)
// here im am giving node.js the possibility to read the rock_ps.js in which
// I store the function. 
