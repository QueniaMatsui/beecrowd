const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

//lines = lines[0].shift().split(" ")
//const primeiralinha = lines [1].split()


let valor = Number(lines.shift()); 
let anos
let meses
let dias
let resto

anos = Math.floor(valor / 365)
    resto = (valor - (anos * 365));

meses = Math.floor(resto / 30)
    dias = resto - (meses * 30)

console.log(anos + " ano(s)")
console.log(meses + " mes(es)")
console.log(dias + " dia(s)")