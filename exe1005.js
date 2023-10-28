const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


//lines = lines[0].split(" ");


let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let resultado

resultado = ((a * 3.5) + (b * 7.5)) / 11;

console.log ("MEDIA = " + resultado.toFixed(5));