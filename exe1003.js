const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


//lines = lines[0].split(" ");

let A = lines[0]
let B = lines[1]
let SOMA

a = parseInt(lines[0]);
b = parseInt(lines[1]);

SOMA = (a + b)


console.log("SOMA = "+ SOMA);