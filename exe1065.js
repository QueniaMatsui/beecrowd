const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

valor = lines[0].split(" ")

//const primeiralinha = Number(lines[0].split(" "))



let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();
let valor4 = lines.shift();
let valor5 = lines.shift();

valor1 = Number(valor1)
valor2 = Number(valor2)
valor3 = Number(valor3)
valor4 = Number(valor4)
valor5 = Number(valor5)



let qtdade = 0

qtdade = qtdade + ehPar(valor1);
qtdade = qtdade + ehPar(valor2);
qtdade = qtdade + ehPar(valor3);
qtdade = qtdade + ehPar(valor4);
qtdade = qtdade + ehPar(valor5);


function ehPar(valor){
    if ((valor % 2) == 0){
    qtdade = qtdade +1;
    return 1


} 
 return 0
 
    qtdade = qtdade + 1;
    return 1

}


console.log(qtdade + " valores pares")