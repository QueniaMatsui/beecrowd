const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


//lines = lines[0].split(" ");


let numeroFuncionario = parseInt(lines[0]);
let horasTrabalhadas = parseInt(lines[1]);
let valorHora = parseFloat(lines[2]);

let valorSalario

valorSalario = parseFloat(horasTrabalhadas * valorHora).toFixed(2)

console.log ("NUMBER = " + numeroFuncionario);
console.log ("SALARY = U$ " + valorSalario)