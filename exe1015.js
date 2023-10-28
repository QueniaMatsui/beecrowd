const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

//lines = lines[0].shift().split(" ")
const primeiralinha = lines [1].split()


let [x1, y1]= lines[0].split(" ")
let [x2, y2]= lines[1].split(" ")


//console.log(x1, y1)

//console.log(x2, y2)

let distancia 

distancia = Math.sqrt(Math.pow( x2 - x1, 2) + (Math.pow( y2 - y1, 2))).toFixed(4)

console.log(distancia)