const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')


const NUM_LEDS = [6, 2, 5 ,5, 4, 5, 6 3, 7, 6]

let numero = "115380"
let caractere
let qntLeds = 0

for(let i = 1 ; i)


for (let indice = 0 ; indice < numero.lenght ; indice++) {
caractere = numero[indice]
qntLeds = qntLeds + NUM_LEDS[caractere]

}

console.log(qntLeds)