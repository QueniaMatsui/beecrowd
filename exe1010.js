const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


//lines = lines[0].split(" ");

var line1 = lines[0].split(" ")
var line2 = lines[1].split(" ")


let peca1 = (line1[0]);
let numPeca1 = parseInt(line1[1]);
let valorPeca1 = parseFloat(line1[2]);

let totalPeca1 = parseFloat(numPeca1 * valorPeca1)

let peca2 = parseInt(line2[0]);
let numPeca2 = parseInt(line2[1]);
let valorPeca2 = parseFloat(line2[2]);

let totalPeca2 = parseFloat(numPeca2 * valorPeca2)


let valorPagar = parseFloat(totalPeca1) + parseFloat(totalPeca2)

console.log ("VALOR A PAGAR: R$ " + valorPagar.toFixed(2));
