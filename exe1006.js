const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


//lines = lines[0].split(" ");


let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);
let resultado

resultado = ((A * 2) + (B * 3) + (C * 5))/ 10;

console.log ("MEDIA = " + resultado.toFixed(1));