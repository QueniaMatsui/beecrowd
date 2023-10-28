const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')



///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

lines = lines[0].split(" ");

let A = Number(lines[0])
let B = Number(lines[1])
let C = Number(lines[2])


var areaTriangulo
var areaCirculo
var areaTrapezio
var areaQuadrado
var areaRetangulo


areaTriangulo = Number(A * C / 2).toFixed(3);

areaCirculo = Number(parseFloat(3.14159 * Math.pow(C , 2)).toFixed(3));

areaTrapezio = Number(parseFloat((A + B) * C / 2)).toFixed(3);

areaQuadrado = Number(parseFloat(Math.pow(B , 2))).toFixed(3);

areaRetangulo = Number(parseFloat(A * B)).toFixed(3);

console.log("TRIANGULO: "+ areaTriangulo)
console.log("CIRCULO: "+ areaCirculo)
console.log("TRAPEZIO: "+ areaTrapezio)
console.log("QUADRADO: "+ areaQuadrado)
console.log("RETANGULO: "+ areaRetangulo)