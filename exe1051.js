const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

valor = lines[0].split(" ")

//const primeiralinha = Number(lines[0].split(" "))

let salario = parseFloat(lines.shift());
let imposto;

if (salario<= 2000.00){
    console.log("Isento");

} else if (salario <= 3000.00){
    imposto= (salario - 2000.00)*0,08;
    console.log("R$ "+ imposto.toFixed(2));

}else if(salario <= 4500.00){
    imposto = 1000.00 * 0.08 +(salario - 3000.00)*0.18;
    console.log("R$ " + imposto.toFixed(2));

}else{
    imposto = 1000.00 * 0.08 + 1500.00 * 0.18 + (salario - 45000.00) * 0.28;
    console.log("R$ " + imposto.toFixed(2))

}