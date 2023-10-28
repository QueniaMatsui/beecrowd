const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

//lines = lines[0].shift().split(" ")
//const primeiralinha = lines [1].split()

let valor = Number(lines.shift()); 
let horas
let minutos
let segundos
let resto

horas = Math.floor(valor / 3600)
    resto = (valor - (horas * 3600));

minutos = Math.floor(resto / 60)
    segundos = resto - (minutos * 60)

console.log(horas + ":" + minutos + ":" + segundos)
