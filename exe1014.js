const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

//lines = lines[0].split(" ");

let dist = parseFloat(lines[0]);
let qtdadeLitros = parseFloat(lines[1]);

let consumoMedio

consumoMedio =  (dist / qtdadeLitros).toFixed(3)

console.log(consumoMedio + " km/l")