const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

lines = lines[0].split(" ");

let A = Number(lines[0])
let B = Number(lines[1])
let C = Number(lines[2])

let maiorAB
let maiorFinal


maiorAB = (A + B + Math.abs(A - B)) / 2;

maiorFinal = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(maiorFinal + " eh o maior")

/*if (maiorAB> maiorFinal) {
    console.log(maiorAB + " eh o maior");
}
else if(maiorFinal > maiorAB) {
    console.log(maiorFinal+ " eh o maior")
}*/
// este comentario nao foi necessario