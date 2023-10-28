const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


//lines = lines[0].split(" ");


let nomeFuncionario = (lines[0]);
let salarioFixo = parseInt(lines[1]);
let totalVendas = parseFloat(lines[2]);

let totalReceber = (salarioFixo + (totalVendas * 0.15)).toFixed(2)

console.log ("TOTAL = R$ " + totalReceber);
