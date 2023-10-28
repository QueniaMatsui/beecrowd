const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

//lines = lines[0].shift().split(" ")
const primeiralinha = lines [1].split()


//let [x]= lines[0].split(" ")
//let [y]= lines[1].split(" ")

///////////////////////COLAR NO BEECROWD O CODIGO ABAIXO///////////////////
let [a] = lines.shift().split(" ");
let [b] = lines.shift().split(" ");
//var lines = input.split('\n')

//let lines1= lines[0].split(" ");


let litros
let distancia



distancia = Number(parseFloat(b * a))

litros = Number(parseFloat(distancia / 12)).toFixed(3)

console.log (litros)


