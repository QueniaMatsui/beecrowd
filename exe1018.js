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
//let [a] = lines.shift().split(" ");
//let [b] = lines.shift().split(" ");

let valor = lines.shift(); 

console.log(valor)

nota = 100
qtdeNotas = parseInt(valor / nota);
resto = valor % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 50
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 20
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 10
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 5
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 2
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 1
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ",00");




