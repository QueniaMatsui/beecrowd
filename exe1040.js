const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

//const primeiralinha = Number(lines[0].split(" "))


let [n1, n2, n3, n4] = lines.shift().split(" ")
let notaExame = lines.shift()



 console.log(n1, n2, n3, n4)

let mediaPonderada = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;

console.log("Media: " + mediaPonderada.toFixed(1));

if (alunoAprovado(mediaPonderada)){
    console.log("Aluno aprovado.")

}else if (alunoReprovado(mediaPonderada)){
    console.log("Aluno reprovado.");
} else {
    console.log("Aluno em exame.");
    console.log("Nota do exame: "+ parseFloat(notaExame).toFixed(1));

    let media = (mediaPonderada + parseFloat(notaExame)) /2 ;

    console.log(alunoAprovado(media) ? "Aluno aprovado. " : "Aluno reprovado." );


} 